# React Ghibli

React Ghibli adalah aplikasi berbasis React dan Vite yang menampilkan informasi terkait film-film dari Studio Ghibli.

## Fitur

1. Menampilkan daftar film Studio Ghibli

2. Detail film lengkap dengan deskripsi dan informasi terkait

3. Antarmuka responsif dan ringan

## Installation

Pastikan Anda memiliki Node.js dan npm atau yarn yang sudah terinstal.

Clone repositori: https://github.com/Iqbal2139/GhibliWiki.git

Install dependensi:

```bash
npm install
# or
yarn install
```

## Running the Project

Development Mode

To start the project in development mode:
```bash
npm run dev
# or
yarn dev
```

## Production Build

To build and start the project in production mode:

Please make sure to update tests as appropriate.
```bash
npm run build
npm start
# or
yarn build
yarn start
```
## Struktur Folder Proyek React-Ghibli

## 📂 **node_modules/**
Berisi dependensi atau library yang diinstal melalui `npm` atau `yarn`. Tidak perlu dimodifikasi secara langsung.

## 📂 **public/**
Berisi aset statis yang bisa diakses langsung di browser, seperti:
- `index.html` → File HTML utama.
- Ikon atau gambar statis yang tidak diproses oleh Webpack/Vite.

## 📂 **src/**
Berisi kode sumber utama aplikasi React.

### 📂 **assets/**
Menyimpan file gambar, ikon, atau aset lainnya yang digunakan dalam aplikasi.

### 📂 **components/**
Berisi komponen UI yang dapat digunakan kembali di berbagai halaman.
- `Navbar.tsx` → Komponen navigasi.
- `Footer.tsx` → Komponen footer.
- `PeopleGrid.tsx`, `FilmList.tsx`, dll. → Komponen untuk menampilkan daftar data dalam bentuk grid atau list.

### 📂 **pages/**
Berisi halaman utama dalam aplikasi.
- `People.tsx` → Menampilkan daftar karakter Studio Ghibli.
- `Home.tsx` → Halaman utama.
- `Login.tsx` → Halaman login pengguna.
- `Species.tsx`, `Vehicles.tsx`, `Location.tsx`, dll. → Halaman yang menampilkan berbagai kategori data dari API Studio Ghibli.

### 📂 **services/**
Berisi layanan atau fungsi untuk berkomunikasi dengan API.
- `apiService.ts` → Berisi fungsi untuk mengambil data dari API Studio Ghibli.

### 📂 **styles/**
Folder untuk file CSS atau module CSS.
- `FilmList.module.css` → Gaya khusus untuk komponen `FilmList`.

### 📄 **App.tsx**
File utama yang mengatur routing dan layout utama aplikasi.

### 📄 **index.tsx**
Entry point utama React yang merender `App.tsx`.

### 📄 **main.tsx**
Menginisialisasi aplikasi dengan Vite.

### 📄 **routes.tsx**
Mengatur rute navigasi dalam aplikasi.

---

## ⚙️ **Konfigurasi & Lainnya**
- `.eslintrc.cjs`, `eslint.config.js` → Konfigurasi ESLint untuk memastikan kode sesuai standar.
- `tsconfig.json` → Konfigurasi TypeScript.
- `vite-env.d.ts` → Konfigurasi lingkungan untuk Vite.
- `package.json` → Berisi informasi proyek dan dependensi yang digunakan.

---
## ⚙️ **User Login Dummy**
- Untuk login digunakan data dummy dan token di proses secara localstorage, berikut username dan password yang dibutuhkan
- Username : admin
- Password : password123