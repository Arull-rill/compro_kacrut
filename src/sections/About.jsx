import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { band } from '../data/band.js'
import { songs } from '../data/songs.js'
import { members } from '../data/members.js'

export default function About() {
  const stats = [
    { label: 'Lagu', value: songs.length },
    { label: 'Personel', value: members.length },
    { label: 'Berdiri', value: band.formedYear },
    { label: 'Kota', value: band.location.split(',')[0] },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="01"
          label="About"
          title={
            <>
              Kenalan sama <em className="text-gold">The Kacrut</em>
            </>
          }
        />

        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <blockquote className="border-l-2 border-gold pl-6 font-display text-3xl italic leading-tight md:text-5xl">
              “{band.quote}”
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="pill">{band.genre}</span>
              <span className="pill">{band.location.split(',')[0]}</span>
              <span className="pill">Sejak {band.formedYear}</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-6 text-lg leading-relaxed text-ivory/85 md:col-span-7">
            {band.about.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-gold'
                    : ''
                }
              >
                {p}
              </p>
            ))}
            {band.nameMeaning && (
              <p className="border border-line bg-panel p-5 font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-mute">
                <span className="text-gold">Arti nama · </span>
                {band.nameMeaning}
              </p>
            )}
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-y border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="border-line px-2 py-8 md:border-r md:px-8 md:last:border-r-0">
              <dd className="font-display text-5xl leading-none text-gold md:text-6xl">{s.value}</dd>
              <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-mute">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
