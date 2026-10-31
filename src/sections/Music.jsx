import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import SongRow from '../components/SongRow.jsx'
import Reveal from '../components/Reveal.jsx'
import { songs } from '../data/songs.js'
import { band } from '../data/band.js'

export default function Music() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="music" className="relative bg-coal py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="02"
          label="Music"
          title={
            <>
              Lagu-lagu <em className="text-gold">pertama</em>
            </>
          }
        />

        <Reveal>
          <p className="mb-12 max-w-xl text-lg text-ivory/75">
            {songs.length} lagu yang kami tulis dengan serius, meski nggak selalu rapi. Klik <span className="text-gold">Putar</span> buat
            dengerin langsung di sini.
          </p>
        </Reveal>

        <ul className="border-t border-line">
          {songs.map((song, i) => (
            <SongRow
              key={song.id}
              song={song}
              index={i}
              open={openId === song.id}
              onToggle={() => setOpenId(openId === song.id ? null : song.id)}
            />
          ))}
        </ul>

        {band.social.spotify && (
          <Reveal className="mt-12">
            <a href={band.social.spotify} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Dengerin semua di Spotify ↗
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
