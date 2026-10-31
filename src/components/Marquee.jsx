/**
 * Dua pita berjalan yang saling silang, kayak selotip peringatan.
 * Pita 1: emas (kiri). Pita 2: gelap berbingkai emas (kanan).
 */
function Strip({ items, className, trackClass }) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className={`flex w-[120%] -translate-x-[10%] overflow-hidden whitespace-nowrap py-3 ${className}`}>
      <div className={`flex shrink-0 items-center ${trackClass}`}>
        {loop.map((t, i) => (
          <span key={i} className="flex items-center font-mono text-sm uppercase tracking-[0.3em]">
            <span className="px-8">{t}</span>
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
      <div className={`flex shrink-0 items-center ${trackClass}`} aria-hidden="true">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center font-mono text-sm uppercase tracking-[0.3em]">
            <span className="px-8">{t}</span>
            <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden py-14 md:py-20" aria-label="Pita teks berjalan">
      <Strip items={items} className="-rotate-2 bg-gold text-ink" trackClass="animate-marquee" />
      <Strip
        items={[...items].reverse()}
        className="-mt-9 rotate-[1.5deg] border-y border-gold-dark bg-ink text-gold"
        trackClass="animate-marquee-reverse"
      />
    </div>
  )
}
