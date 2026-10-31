import Reveal from './Reveal.jsx'
import Icon from './Icons.jsx'

function embedSrc(embed) {
  if (!embed?.type || !embed?.id) return null
  if (embed.type === 'spotify') return `https://open.spotify.com/embed/track/${embed.id}?theme=0`
  if (embed.type === 'youtube') return `https://www.youtube-nocookie.com/embed/${embed.id}`
  return null
}

const platforms = [
  ['spotify', 'Spotify'],
  ['youtube', 'YouTube'],
  ['appleMusic', 'Apple Music'],
]

/** Satu baris lagu: nomor besar, cover + piringan hitam, judul, link, dan player. */
export default function SongRow({ song, index, open, onToggle }) {
  const src = embedSrc(song.embed)
  const num = String(index + 1).padStart(2, '0')

  return (
    <Reveal as="li" delay={index * 80} className="border-b border-line">
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-5 py-7 md:grid-cols-[5rem_9rem_1fr_auto] md:gap-x-10">
        <span className="outline-text font-display text-5xl leading-none text-gold md:text-7xl" aria-hidden="true">
          {num}
        </span>

        {/* cover + piringan */}
        <div className={`vinyl-wrap relative aspect-square w-24 md:w-36 ${open ? 'is-open' : ''}`}>
          <div
            className="vinyl absolute inset-0 rounded-full border border-line bg-[radial-gradient(circle_closest-side,#c8a24a_0_16%,#0a0a0a_17%_40%,#1a1a1a_41%_43%,#0a0a0a_44%_62%,#1a1a1a_63%_65%,#0a0a0a_66%_100%)]"
            aria-hidden="true"
          />
          <img
            src={song.cover}
            alt={`Cover lagu ${song.title}`}
            loading="lazy"
            className="relative h-full w-full object-cover shadow-[0_10px_30px_-10px_rgba(0,0,0,.9)]"
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mute">
            {song.year}
            {song.note ? ` · ${song.note}` : ''}
          </p>
          <h3 className="mt-2 font-display text-4xl leading-none md:text-5xl">{song.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {platforms.map(([key, name]) =>
              song.links?.[key] ? (
                <a key={key} href={song.links[key]} target="_blank" rel="noopener noreferrer" className="pill">
                  {name}
                  <span className="h-3 w-3">
                    <Icon name="arrow" />
                  </span>
                </a>
              ) : null,
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`player-${song.id}`}
          className="btn-ghost col-span-2 md:col-span-1 md:justify-self-end"
        >
          <span className="h-3.5 w-3.5">
            <Icon name={open ? 'close' : 'play'} strokeWidth={2} />
          </span>
          {open ? 'Tutup' : 'Putar'}
        </button>
      </div>

      {/* Player: hanya dimuat saat dibuka (hemat kuota) */}
      <div id={`player-${song.id}`} className={`grid transition-all duration-500 ${open ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          {open &&
            (src ? (
              <iframe
                title={`Player ${song.title}`}
                src={src}
                width="100%"
                height={song.embed.type === 'spotify' ? 152 : 315}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="border-0"
              />
            ) : (
              <p className="border border-dashed border-gold-dark/60 p-6 font-mono text-xs leading-relaxed text-mute">
                Player belum dipasang untuk lagu ini. Isi bagian <span className="text-gold">embed</span> di{' '}
                <span className="text-gold">src/data/songs.js</span>, atau dengerin lewat tombol platform di atas.
              </p>
            ))}
        </div>
      </div>
    </Reveal>
  )
}
