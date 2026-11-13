/*
  DAFTAR APLIKASI DAN SITUS APPORA
  ---------------------------------
  Edit file ini saja untuk menambah atau mengubah aplikasi. Tidak perlu menyentuh index.html.

  Setiap aplikasi ditulis satu blok { ... } dan dipisah koma.
  Isi penting:
    slug     : nama pendek untuk alamat halaman (huruf kecil, tanpa spasi), misalnya "aod"
    name     : nama yang tampil
    kind     : "apk" untuk aplikasi Android, "situs" untuk situs web
    cat      : kategori: Personalisasi, Alat, Game, Produktivitas, Sosial, Hiburan, atau Lainnya
    short    : keterangan singkat satu baris
    desc     : deskripsi lengkap
    version  : nomor versi, misalnya "1.0". NAIKKAN setiap rilis baru: pengguna yang sudah mengunduh
               versi lama akan melihat tombol "Perbarui" dan daftar "Pembaruan tersedia" di profil.
    size     : ukuran tampil, misalnya "12 MB"
    updated  : tanggal rilis, misalnya "13 Nov 2026"
    url      : tautan unduhan APK (misalnya tautan rilis GitHub), atau alamat situs untuk kind "situs".
               Selama url masih kosong, aplikasi tampil dengan tombol "Segera".
    logo     : (boleh kosong) alamat gambar logo, misalnya "logo/aod.png" kalau kamu unggah file gambarnya
*/
window.APPORA_APPS = [
  { slug: "dynamic-island", name: "Dynamic Island", kind: "apk", cat: "Personalisasi", short: "Pil notifikasi melayang di atas layar", desc: "Pil notifikasi yang melayang di atas layar, bergaya Dynamic Island, untuk Android.", version: "", size: "", updated: "", url: "" },
  { slug: "aod", name: "AOD", kind: "apk", cat: "Personalisasi", short: "Layar siaga dengan jam dan notifikasi", desc: "Always-on Display: layar siaga dengan jam dan notifikasi yang tetap terlihat.", version: "", size: "", updated: "", url: "" },
  { slug: "kirnaiai", name: "kirnaiAI", kind: "apk", cat: "Alat", short: "Chatbot umum buatan sendiri", desc: "Chatbot umum buatan sendiri yang berjalan sebagai aplikasi Android.", version: "", size: "", updated: "", url: "" }
];
