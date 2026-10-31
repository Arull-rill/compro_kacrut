import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icons.jsx'
import { band } from '../data/band.js'

export default function Follow() {
  const entries = [
    ['Spotify', band.social.spotify, 'Dengerin semua lagu'],
    ['YouTube', band.social.youtube, 'Tonton & dengerin'],
    ['Instagram', band.social.instagram, band.contact.instagramHandle],
    ['TikTok', band.social.tiktok, 'Potongan kacau'],
  ].filter(([, url]) => url)

  return (
    <section id="follow" className="relative border-y border-line bg-coal py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="06"
          label="Follow"
          title={
            <>
              Bantu band ini <em className="text-gold">kedengeran</em>
            </>
          }
        />
        <Reveal>
          <p className="mb-12 max-w-xl text-lg text-ivory/75">
            Buat band baru, dukungan terbesar itu sederhana: dengerin, follow, terus share ke temen lu.
          </p>
        </Reveal>

        <ul className="border-t border-line">
          {entries.map(([name, url, desc], i) => (
            <Reveal as="li" key={name} delay={i * 80}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line px-2 py-6 transition-all duration-500 hover:bg-gold hover:px-6 hover:text-ink md:py-8"
              >
                <span className="font-display text-5xl leading-none md:text-8xl">{name}</span>
                <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-mute transition group-hover:text-ink/70 md:block">
                  {desc}
                </span>
                <span className="h-9 w-9 shrink-0 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14">
                  <Icon name="arrow" strokeWidth={1.2} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
