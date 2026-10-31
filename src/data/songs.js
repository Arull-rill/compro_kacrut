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
    id: 'bising-sopan',
    title: 'Bising Sopan', // GANTI semua judul di bawah
    year: 2026,
    note: 'Lagu pertama',
    cover: '/images/covers/cover-1.svg',
    links: { spotify: 'https://open.spotify.com/', youtube: 'https://youtube.com/', appleMusic: '' },
    embed: { type: '', id: '' },
  },
  {
    id: 'jalan-pulang-telat',
    title: 'Jalan Pulang Telat',
    year: 2026,
    note: 'Single',
    cover: '/images/covers/cover-2.svg',
    links: { spotify: 'https://open.spotify.com/', youtube: 'https://youtube.com/', appleMusic: '' },
    embed: { type: '', id: '' },
  },
  {
    id: 'kopi-dingin',
    title: 'Kopi Dingin',
    year: 2026,
    note: 'Single',
    cover: '/images/covers/cover-3.svg',
    links: { spotify: 'https://open.spotify.com/', youtube: 'https://youtube.com/', appleMusic: '' },
    embed: { type: '', id: '' },
  },
  {
    id: 'lampu-merah-terakhir',
    title: 'Lampu Merah Terakhir',
    year: 2026,
    note: 'Single',
    cover: '/images/covers/cover-4.svg',
    links: { spotify: 'https://open.spotify.com/', youtube: 'https://youtube.com/', appleMusic: '' },
    embed: { type: '', id: '' },
  },
  {
    id: 'kacrut-jilid-satu',
    title: 'Kacrut Jilid Satu',
    year: 2026,
    note: 'Lagu terbaru',
    cover: '/images/covers/cover-5.svg',
    links: { spotify: 'https://open.spotify.com/', youtube: 'https://youtube.com/', appleMusic: '' },
    embed: { type: '', id: '' },
  },
]
