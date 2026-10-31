import { useCallback, useState } from 'react'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'

const tilts = ['-rotate-1', 'rotate-1', 'rotate-0', 'rotate-[1.5deg]', '-rotate-[1.5deg]', 'rotate-0']

/** Foto "berserakan" ala cetakan foto di meja. Klik untuk memperbesar. */
export default function GalleryGrid({ items }) {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((it, i) => (
          <Reveal key={it.src} delay={(i % 3) * 100} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Perbesar foto: ${it.alt}`}
              className={`group relative block w-full overflow-hidden border border-line bg-coal p-2 transition duration-500 hover:z-10 hover:rotate-0 hover:border-gold-dark ${tilts[i % tilts.length]}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <span className="absolute bottom-4 left-4 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold opacity-0 transition group-hover:opacity-100">
                {it.alt}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && <Lightbox items={items} index={active} onClose={close} onChange={setActive} />}
    </>
  )
}
