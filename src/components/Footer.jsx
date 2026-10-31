import { band } from '../data/band.js'

const nav = [
  ['About', '#about'],
  ['Music', '#music'],
  ['Members', '#members'],
  ['Story', '#story'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Footer() {
  const socials = [
    ['Instagram', band.social.instagram],
    ['Spotify', band.social.spotify],
    ['YouTube', band.social.youtube],
    ['TikTok', band.social.tiktok],
  ].filter(([, url]) => url)

  return (
    <footer className="relative overflow-hidden border-t border-line bg-coal">
      <div className="hairline" />
      <div className="container-x grid gap-12 pb-10 pt-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl">{band.name}</p>
          <p className="mt-3 max-w-xs text-sm text-mute">{band.tagline}</p>
        </div>

        <nav aria-label="Navigasi footer" className="md:col-span-3">
          <p className="label mb-4">Jelajah</p>
          <ul className="space-y-2 font-mono text-xs uppercase tracking-[0.2em]">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-mute transition hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="label mb-4">Ikuti</p>
          <ul className="space-y-2 font-mono text-xs uppercase tracking-[0.2em]">
            {socials.map(([label, url]) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-mute transition hover:text-gold">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x relative z-10 flex flex-col gap-2 border-t border-line py-6 font-mono text-[11px] uppercase tracking-[0.25em] text-mute md:flex-row md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {band.name}. Semua hak dilindungi.
        </p>
        <p>Dibuat di {band.location.split(',')[0]}</p>
      </div>

      {/* Tulisan raksasa terpotong di bawah */}
      <div
        aria-hidden="true"
        className="outline-text pointer-events-none -mb-[4vw] select-none whitespace-nowrap text-center font-display text-[26vw] leading-[0.75] text-gold/20"
      >
        KACRUT
      </div>
    </footer>
  )
}
