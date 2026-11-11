// ============================================================
//  DAFTAR LAGU
//  Tambah lagu baru = tambah satu blok { ... } di bawah.
//
//  links  : isi URL platform. Kosongkan '' kalau belum ada.
//  embed  : biar lagu bisa diputar langsung di web.
//           type 'spotify' -> id dari URL track
//             https://open.spotify.com/track/XXXXXXXX  -> id: 'XXXXXXXX'
//           type 'youtube' -> id dari URL video
//             https://youtu.be/YYYYYYYY               -> id: 'YYYYYYYY'
//           Kosongkan type/id kalau belum mau pakai player.
// ============================================================

export const songs = [
  {
    id: 'nice dream',
    title: 'nice dream', // GANTI semua judul di bawah
    year: 2026,
    note: 'Lagu pertama',
    cover: '/images/covers/nicedream.webp', // GANTI cover
    links: { spotify: 'https://open.spotify.com/track/6Ci09GszPwHYpNOgFn4Skp?si=wIn6OWjcS5GUvYozFPoNSQ&utm_source=copy-link', youtube: 'https://youtu.be/0UUNslj3-AI?si=GE0gY2i_VFLQp5br', appleMusic: '' },
    embed: { type: 'spotify', id: '6Ci09GszPwHYpNOgFn4Skp' },
  },
  {
    id: 'i hope you hear it when you see me',
    title: 'I Hope You Hear It When You See Me',
    year: 2026,
    note: 'Single',
    cover: '/images/covers/cover-2.svg',
    links: { spotify: 'https://open.spotify.com/track/2bMWNh9kgRb89AEnNH6vYW?si=vK83VfnjRoad401IAsAUXw&utm_source=copy-link', youtube: 'https://youtu.be/8jPb_SBjfGs?si=m_SORl-o-6ahv27d', appleMusic: '' },
    embed: { type: 'spotify', id: '2bMWNh9kgRb89AEnNH6vYW' },
  },
  {
    id: 'quiet collapse',
    title: 'quiet collapse',
    year: 2026,
    note: 'Single',
    cover: '/images/covers/cover-3.svg',
    links: { spotify: 'https://open.spotify.com/track/2HqF0dpPNx52k9SwSpKJwM?si=WvdqLHLSRj2B74d6exBWRg&utm_source=copy-link', youtube: 'https://youtu.be/kwk84NhBHD0?si=i3Bv8v4hiQ2W_JKj', appleMusic: '' },
    embed: { type: 'spotify', id: '2HqF0dpPNx52k9SwSpKJwM' },
  },
  {
    id: 'before',
    title: 'before',
    year: 2026,
    note: 'Single',
    cover: '/images/covers/before.webp',
    links: { spotify: 'https://open.spotify.com/track/6YlsmnFx9dhqorXsltvF29?si=G5Qk-cXkQiSNVEZ-ugY82w&utm_source=copy-link', youtube: 'https://youtu.be/EyQYaKEm4pI?si=vkIlYyaiATvslHr9', appleMusic: '' },
    embed: { type: 'spotify', id: '6YlsmnFx9dhqorXsltvF29' },
  },
  // {
  //   id: 'kacrut-jilid-satu',
  //   title: 'Kacrut Jilid Satu',
  //   year: 2026,
  //   note: 'Lagu terbaru',
  //   cover: '/images/covers/cover-5.svg',
  //   links: { spotify: 'https://open.spotify.com/', youtube: 'https://youtube.com/', appleMusic: '' },
  //   embed: { type: '', id: '' },
  // },
]
