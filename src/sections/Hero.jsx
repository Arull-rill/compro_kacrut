import { useRef } from 'react'
import useScramble from '../hooks/useScramble.js'
import { band } from '../data/band.js'
import { songs } from '../data/songs.js'

export default function Hero() {
  const [word, replay] = useScramble('KACRUT', { duration: 1500, delay: 250 })
  const ref = useRef(null)

  // Lapisan emas "meleset cetak" ngikutin pergerakan mouse
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  const letters = word.split('')

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-32"
    >
      {/* cahaya emas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_28%,rgba(200,162,74,.16),transparent_55%)]"
      />
      {/* 5 garis paranada */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col gap-5 md:gap-8"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="h-px w-full bg-gold/15" />
        ))}
      </div>

      <div className="container-x relative z-10">
        <p className="label mb-6">Official Site — {band.location}</p>

        <h1 aria-label={band.name} className="select-none">
          <span className="block font-display text-4xl italic text-gold md:text-6xl">The</span>

          <span className="relative mt-1 block font-display text-[24vw] leading-[0.82] tracking-[-0.02em] md:text-[18vw] lg:text-[18rem]">
            {/* lapisan emas outline (meleset) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ transform: 'translate(calc(var(--mx) * 18px + 8px), calc(var(--my) * 12px + 6px))' }}
            >
              <span className="outline-text block animate-drift text-gold">{word}</span>
            </span>
            {/* lapisan utama */}
            <span className="relative block text-ivory">
              {letters.map((ch, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="inline-block cursor-default transition-transform duration-300 hover:-translate-y-3 hover:-rotate-6"
                >
                  {ch}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-ivory/80 md:text-xl">{band.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#music" className="btn-gold">
            Dengerin Sekarang
          </a>
          <a href="#about" className="btn-ghost">
            Kenalan
          </a>
          <button type="button" onClick={replay} className="pill" aria-label="Acak ulang tulisan KACRUT">
            ↻ Kacrutin lagi
          </button>
        </div>
      </div>

      {/* Stempel putar */}
      <div className="absolute bottom-10 right-6 hidden h-40 w-40 text-gold md:block lg:h-48 lg:w-48" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
          <defs>
            <path id="stamp-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text fill="currentColor" fontFamily="DM Mono, monospace" fontSize="13" letterSpacing="3">
            <textPath href="#stamp-circle" textLength="486" lengthAdjust="spacing">
              {`DARI BANDUNG • BAND BARU • ${songs.length} LAGU • `}
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-5xl italic">K</span>
      </div>

      {/* Petunjuk scroll */}
      <div className="absolute bottom-10 left-6 hidden flex-col items-center gap-3 md:flex" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-mute [writing-mode:vertical-rl]">Scroll</span>
        <span className="h-14 w-px animate-scroll-line bg-gold" />
      </div>
    </section>
  )
}
