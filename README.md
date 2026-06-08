# 🌐 Projek Portfolio Digital Personal

Projek ini merupakan sebuah sistem **Laman Web Portfolio Digital** responsif yang dibangunkan menggunakan standard **HTML5**, **CSS3**, dan **JavaScript (DOM Manipulation)**. Laman web ini direka khusus untuk mempamerkan profil peribadi, latar belakang akademik, kemahiran teknikal, dan menyediakan borang interaktif untuk tujuan simulasi perhubungan industri.

---

## 🚀 Ciri-Ciri Utama Laman Web
* **Struktur Bersih & Semantik:** Menggunakan tag semantik HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) untuk struktur kod yang mesra SEO dan mudah diselenggara.
* **Layout Responsif (Desktop First):** Menggunakan teknik CSS Flexbox, Grid, dan Media Queries untuk memastikan paparan kekal kemas sama ada dibuka di komputer makmal mahupun telefon pintar.
* **Gambar Profil Dinamik:** Menggunakan teknik kontras sempadan bulat (*circular border*) berukuran responsif yang tidak pecah rupa bentuknya apabila saiz tetingkap diubah.
* **Interaktiviti JavaScript (DOM):** * Fungsi pop-up ucapan selamat datang pada halaman utama.
  * Kawalan borang hubungi menggunakan `event.preventDefault()` untuk simulasi penghantaran mesej tanpa ralat penyegaran halaman (*page refresh*).
* **Garis Masa Akademik (Timeline):** Paparan kronologi pendidikan yang dihiasi dengan elemen grafik bulatan penanda masa berasaskan CSS pseudo-elements (`::before`).

---

## 📂 Struktur Fail Projek
```text
├── index.html          # Halaman Utama (Pengenalan, Foto Profil & Statistik)
├── about.html          # Halaman Mengenai Saya (Kad Kemahiran & Garis Masa Pendidikan)
├── contact.html        # Halaman Hubungi (Borang Interaktif Kemasukan Data)
├── style.css           # Fail Gaya Induk (Reka Bentuk UI, Animasi & Media Queries)
├── script.js           # Fail Logik JavaScript (Manipulasi DOM & Validasi Acara)
└── README.md           # Fail Dokumentasi Projek (Fail Ini)
