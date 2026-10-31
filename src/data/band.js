// ============================================================
//  DATA UTAMA BAND  —  semua yang bertanda "GANTI" wajib diisi
//  dengan data asli sebelum web dipublikasikan.
// ============================================================

export const band = {
  name: 'The Kacrut',
  tagline: 'Dari Bandung, dengan bising yang sopan.', // GANTI kalau mau
  location: 'Bandung, Indonesia',
  formedYear: 2025, // GANTI
  genre: 'Alternative / Indie', // GANTI

  // Teks di pita berjalan (marquee). Tambah / hapus sesuka hati.
  marquee: [
    'Dari Bandung',
    'Bising yang sopan',
    'Band baru',
    'Lagu pertama sudah rilis',
    'Dengerin dulu, baru nilai',
  ],

  // Paragraf di section "About" — GANTI dengan cerita asli band
  about: [
    'The Kacrut lahir dari ruang latihan sempit di Bandung, dari obrolan larut malam dan gitar yang nggak pernah benar-benar fals… tapi juga nggak pernah benar-benar pas.',
    'Kami band baru. Belum banyak panggung, belum ada merch, baru beberapa lagu. Tapi semua yang ada di sini kami tulis dengan serius — meski nggak selalu rapi.',
    'Kalau lu nyari musik yang berantakan tapi punya hati, mungkin ini tempatnya.',
  ],

  // Kutipan besar di section About — GANTI
  quote: 'Berantakan itu bukan kesalahan. Itu gaya.',

  // Arti nama band (opsional). Kosongkan '' kalau nggak mau ditampilkan.
  nameMeaning: '',

  contact: {
    email: 'kontak@thekacrut.com', // GANTI
    whatsapp: '6281234567890', // GANTI — format tanpa + dan tanpa 0 di depan
    whatsappText: 'Halo The Kacrut, aku mau ngobrol soal...',
    instagramHandle: '@thekacrut', // GANTI
  },

  // Link sosmed. Kosongkan '' kalau belum punya, otomatis disembunyikan.
  social: {
    instagram: 'https://instagram.com/', // GANTI
    spotify: 'https://open.spotify.com/', // GANTI
    youtube: 'https://youtube.com/', // GANTI
    tiktok: '', // GANTI / kosongkan
  },

  bookingOpen: true, // true = tampil "Terbuka untuk tawaran manggung"
}
