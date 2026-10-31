# The Kacrut — Website Profil Band

Website satu halaman (one-page) untuk memperkenalkan band **The Kacrut**.
Dibuat dengan **React + Vite + Tailwind CSS**. Tanpa database, tanpa backend,
jadi bisa langsung di-hosting di **Vercel**.

## Konsep desain: "Kacrut, tapi Elegan"
Nama "Kacrut" = berantakan. Jadi desainnya sengaja bermain dengan kekacauan,
tapi dibungkus warna hitam, ivory, dan emas biar tetap mewah:

| Elemen | Ide |
|---|---|
| Hero | Huruf **KACRUT** diacak lalu "beres" satu-satu. Ada lapisan emas yang **meleset cetak** dan ngikutin mouse |
| Latar hero | 5 garis tipis = **paranada** musik |
| Pita berjalan | Dua pita **selotip** emas & hitam saling silang |
| Lagu | Cover album + **piringan hitam** yang menyembul saat di-hover. Player Spotify/YouTube dimuat saat diklik |
| Personel | Kartu **polaroid** miring yang ditempel selotip emas |
| Story | Timeline vertikal dengan titik belah ketupat emas |
| Galeri | Foto **berserakan** di meja + pop-up (lightbox), bisa pakai tombol ← → Esc |
| Follow | Daftar teks raksasa yang berubah emas saat di-hover |
| Seluruh layar | Efek **grain film** halus + garis progres scroll emas |

Font: **Instrument Serif** (judul), **DM Sans** (isi), **DM Mono** (label).

## Cara menjalankan di komputer

Butuh **Node.js 18+** (cek: `node -v`).

```bash
npm install
npm run dev        # buka http://localhost:5173
```

Perintah lain:

```bash
npm run build      # hasil jadi ada di folder dist/
npm run preview    # coba hasil build secara lokal
```

## Struktur folder

```
the-kacrut/
├── index.html              ← judul, deskripsi, OG (preview share), font, SEO
├── vercel.json             ← cache untuk aset
├── tailwind.config.js      ← warna, font, animasi
├── public/
│   ├── favicon.svg
│   ├── og-image.png        ← gambar preview saat link dishare (1200x630)
│   ├── robots.txt, sitemap.xml
│   └── images/
│       ├── covers/         ← cover lagu
│       ├── members/        ← foto personel
│       └── gallery/        ← foto galeri
└── src/
    ├── data/               ← ★ SEMUA ISI KONTEN ADA DI SINI ★
    │   ├── band.js         (nama, tagline, cerita, kontak, sosmed)
    │   ├── songs.js        (daftar lagu + link + player)
    │   ├── members.js      (personel)
    │   ├── story.js        (timeline perjalanan)
    │   └── gallery.js      (foto galeri)
    ├── sections/           Hero, About, Music, Members, Story, Gallery, Follow, Contact
    ├── components/         Navbar, Footer, Marquee, SongRow, MemberCard, GalleryGrid, Lightbox, ...
    ├── hooks/              useScramble, useActiveSection, useScrolled
    ├── App.jsx
    ├── main.jsx
    └── index.css           ← gaya global (grain, efek outline, dll)
```

## Cara mengganti konten

**Kamu cukup edit file di `src/data/`.** Nggak perlu sentuh komponen.
Semua yang ada tulisan `GANTI` itu data dummy.

### 1. Info band — `src/data/band.js`
Nama, tagline, tahun berdiri, genre, cerita (`about`), kutipan (`quote`),
email, WhatsApp, Instagram, dan link sosmed.
- Link sosmed yang dikosongkan `''` otomatis hilang dari web.
- `whatsapp` formatnya `6281234567890` (tanpa `+` dan tanpa `0` di depan).
- `bookingOpen: false` kalau mau menyembunyikan label "Terbuka untuk tawaran manggung".
- `nameMeaning`: isi kalau mau menampilkan arti nama band.

### 2. Lagu — `src/data/songs.js`
Tambah lagu = tambah satu blok `{ ... }`. Isi:
- `title`, `year`, `note`, `cover`
- `links`: URL Spotify / YouTube / Apple Music (kosongkan yang nggak ada)
- `embed`: biar lagu bisa **diputar langsung** di web
  - Spotify: URL `https://open.spotify.com/track/ABC123` → `{ type: 'spotify', id: 'ABC123' }`
  - YouTube: URL `https://youtu.be/XYZ789` → `{ type: 'youtube', id: 'XYZ789' }`

### 3. Personel — `src/data/members.js`
Nama, peran, kutipan, dan foto. Foto portrait rasio 4:5 (contoh 800x1000 px).

### 4. Story — `src/data/story.js`
3–6 titik perjalanan band, urut dari yang paling lama.

### 5. Galeri — `src/data/gallery.js`
Foto latihan / studio / nongkrong. Ukuran foto boleh beda-beda.

### Mengganti gambar
1. Taruh file foto di folder yang sesuai di `public/images/...`
2. Ubah path-nya di file data. Contoh: `photo: '/images/members/dimas.jpg'`
3. Pakai **JPG/WEBP**, kompres dulu (idealnya di bawah 300 KB per foto) biar web cepat.

Gambar `.svg` di folder `images/` itu **placeholder**. Hapus kalau udah diganti foto asli.

## Mengubah tampilan

- **Warna**: `tailwind.config.js` bagian `colors` (`gold`, `ink`, `ivory`, ...)
- **Font**: ganti link Google Fonts di `index.html` + `fontFamily` di `tailwind.config.js`
- **Urutan / hapus section**: `src/App.jsx` (hapus baris section-nya), lalu hapus juga item-nya di
  `src/components/Navbar.jsx` dan `Footer.jsx` supaya menu nggak mengarah ke section kosong
- **Teks pita berjalan**: `marquee` di `src/data/band.js`
- **Matikan efek grain**: hapus `<Grain />` di `src/App.jsx`

Pengguna yang mengaktifkan "reduce motion" di perangkatnya otomatis dapat versi
tanpa animasi.

## Sebelum dipublikasikan (CHECKLIST)

- [ ] Semua teks `GANTI` di `src/data/*` sudah diisi data asli
- [ ] Foto placeholder (`.svg`) sudah diganti foto asli
- [ ] Email, WhatsApp, dan link sosmed sudah benar
- [ ] Ganti `https://the-kacrut.vercel.app` dengan **alamat web kamu yang sebenarnya** di:
  - `index.html` (og:image, twitter:image, JSON-LD)
  - `public/robots.txt`
  - `public/sitemap.xml`
- [ ] Ganti `public/og-image.png` dengan desain sendiri (ukuran **1200 x 630 px**)
- [ ] Ganti `<title>` dan `<meta name="description">` di `index.html` kalau perlu
- [ ] Coba di HP, klik semua tombol dan link
- [ ] `npm run build` sukses tanpa error

## Deploy ke Vercel (gratis)

1. Upload project ke **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/the-kacrut.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com), login pakai GitHub, klik **Add New → Project**, pilih repo `the-kacrut`.
3. Vercel otomatis mengenali **Vite**. Pastikan:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Klik **Deploy**. Beberapa menit kemudian web live di `nama-project.vercel.app`.
5. Setiap kamu `git push`, web ter-update otomatis.
6. (Opsional) **Domain sendiri**: Project → Settings → Domains.

> **Catatan lisensi:** paket gratis Vercel (Hobby) hanya untuk pemakaian **personal /
> non-komersial**. Kalau web ini proyek klien yang dibayar atau dipakai jualan,
> cek ketentuan Vercel terbaru dan pertimbangkan paket Pro.

## Masalah umum

| Masalah | Solusi |
|---|---|
| Foto nggak muncul | Cek path di file data. Harus diawali `/images/...` dan nama file persis sama (huruf besar/kecil berpengaruh di Vercel) |
| Player lagu bilang "belum dipasang" | Isi `embed` (type + id) di `src/data/songs.js` |
| Preview link di WhatsApp/IG nggak berubah | Cache sosmed. Tes dulu lewat Facebook Sharing Debugger, dan pastikan `og:image` pakai alamat domain asli |
| Perubahan data nggak terlihat | Simpan file, refresh. Kalau masih sama, hentikan `npm run dev` lalu jalankan lagi |
| Layar kosong putih | Buka Console browser (F12), lihat pesan error-nya |

Selamat ngebising. 🤘
