import { useEffect, useRef } from 'react'
import Icon from './Icons.jsx'

/** Pop-up foto layar penuh. Tombol: Esc tutup, ← → pindah foto. */
export default function Lightbox({ items, index, onClose, onChange }) {
  const closeBtn = useRef(null)
  const item = items[index]
  const total = items.length

  useEffect(() => {
    const prev = () => onChange((index - 1 + total) % total)
    const next = () => onChange((index + 1) % total)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
    }
  }, [index, total, onChange, onClose])

  if (!item) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label="Foto">
      <button type="button" aria-label="Tutup" className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      <figure className="relative z-10 max-h-full max-w-5xl">
        <img src={item.src} alt={item.alt} className="max-h-[78vh] w-auto max-w-full border border-gold-dark/60 object-contain" />
        <figcaption className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-mute">
          <span>{item.alt}</span>
          <span className="text-gold">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </figcaption>
      </figure>

      <button
        ref={closeBtn}
        type="button"
        onClick={onClose}
        aria-label="Tutup foto"
        className="absolute right-5 top-5 z-20 h-11 w-11 border border-line p-3 text-ivory transition hover:border-gold hover:text-gold"
      >
        <Icon name="close" />
      </button>
      <button
        type="button"
        onClick={() => onChange((index - 1 + total) % total)}
        aria-label="Foto sebelumnya"
        className="absolute left-3 top-1/2 z-20 h-11 w-11 -translate-y-1/2 border border-line p-3 text-ivory transition hover:border-gold hover:text-gold md:left-6"
      >
        <Icon name="left" />
      </button>
      <button
        type="button"
        onClick={() => onChange((index + 1) % total)}
        aria-label="Foto berikutnya"
        className="absolute right-3 top-1/2 z-20 h-11 w-11 -translate-y-1/2 border border-line p-3 text-ivory transition hover:border-gold hover:text-gold md:right-6"
      >
        <Icon name="right" />
      </button>
    </div>
  )
}
