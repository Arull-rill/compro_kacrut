import Reveal from './Reveal.jsx'

/**
 * Judul section: angka outline besar di belakang + label kecil + judul serif.
 * `title` boleh berisi JSX (mis. <em> untuk kata miring emas).
 */
export default function SectionTitle({ number, label, title, className = '' }) {
  return (
    <Reveal className={`relative mb-14 md:mb-20 ${className}`}>
      <span
        aria-hidden="true"
        className="outline-text pointer-events-none absolute -top-10 -left-2 select-none font-display text-[9rem] leading-none text-gold/25 md:-top-16 md:text-[14rem]"
      >
        {number}
      </span>
      <div className="relative">
        <p className="label mb-4">
          {number} — {label}
        </p>
        <h2 className="h-display text-5xl md:text-7xl">{title}</h2>
      </div>
    </Reveal>
  )
}
