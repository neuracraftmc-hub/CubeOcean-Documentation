---

title: "Memulai"
description: "Panduan lengkap untuk melakukan deployment dan mengelola project pertama Anda di CubeOcean Cloud."
----

# Getting Started

Panduan ini menjelaskan secara menyeluruh proses deployment project pertama Anda di CubeOcean Cloud, mulai dari pembuatan akun hingga aplikasi berjalan di lingkungan produksi.

---

## Table of Contents

* [1. Membuat Akun](#1-membuat-akun)
* [2. Memilih Kategori Project](#2-memilih-kategori-project)
* [3. Menyesuaikan Resource](#3-menyesuaikan-resource)
* [4. Melakukan Pembayaran](#4-melakukan-pembayaran)
* [5. Mengakses Dashboard](#5-mengakses-dashboard)
* [6. Memilih Panel](#6-memilih-panel)
* [7. Deploy Project](#7-deploy-project)

---

## 1. Membuat Akun

Untuk mulai menggunakan CubeOcean Cloud, Anda harus terlebih dahulu membuat akun.

### Langkah-langkah:

1. Buka halaman pendaftaran CubeOcean Cloud.
2. Masukkan email yang valid, username, dan password yang aman.
3. Lakukan verifikasi email melalui tautan yang dikirimkan ke inbox Anda.

### Catatan:

* Verifikasi email wajib dilakukan sebelum dapat menggunakan layanan.
* Gunakan password yang kuat untuk menjaga keamanan akun.
* Disarankan mengaktifkan fitur keamanan tambahan jika tersedia (misalnya autentikasi dua faktor).

---

## 2. Memilih Kategori Project

Setelah akun aktif, pilih kategori project sesuai kebutuhan. Kategori ini menentukan lingkungan dasar, konfigurasi awal, serta optimasi sistem.

### Kategori yang Tersedia:

* **Game Server**
  Dioptimalkan untuk server game dengan kebutuhan latency rendah dan koneksi real-time.

* **Bot**
  Cocok untuk automation service, chatbot, dan worker berbasis background process.

* **Website**
  Digunakan untuk aplikasi web, baik statis maupun dinamis.

* **Database**
  Lingkungan khusus untuk menjalankan layanan database.

* **Generic Runtime (Environment Bahasa Pemrograman)**
  Lingkungan fleksibel untuk menjalankan aplikasi custom menggunakan bahasa seperti Node.js, Python, dan lainnya.

### Rekomendasi:

Pilih kategori yang paling sesuai agar mendapatkan konfigurasi awal yang optimal.

---

## 3. Menyesuaikan Resource

Konfigurasikan resource server sesuai kebutuhan aplikasi Anda.

### Parameter yang Dapat Diatur:

* **CPU**
  Menentukan jumlah core prosesor yang tersedia.

* **RAM (Memory)**
  Menentukan kapasitas memori untuk menjalankan aplikasi.

* **Storage**
  Menentukan kapasitas penyimpanan untuk file dan data.

* **Region (jika tersedia)**
  Pilih lokasi server yang paling dekat dengan pengguna untuk mengurangi latency.

### Best Practice:

* Gunakan resource secukupnya di awal, lalu lakukan scaling jika diperlukan.
* Pantau penggunaan resource untuk optimasi biaya dan performa.
* Hindari over-provisioning tanpa kebutuhan yang jelas.

---

## 4. Melakukan Pembayaran

Setelah konfigurasi selesai, lakukan pembayaran untuk mengaktifkan layanan.

### Langkah-langkah:

1. Periksa kembali konfigurasi dan biaya.
2. Pilih metode pembayaran yang tersedia.
3. Selesaikan transaksi.

### Catatan:

* Layanan hanya akan aktif setelah pembayaran berhasil.
* Sistem billing dapat berupa langganan atau berbasis penggunaan.

---

## 5. Mengakses Dashboard

Setelah layanan aktif, Anda dapat mengelola project melalui dashboard.

### Fitur Dashboard:

* Melihat layanan aktif
* Monitoring penggunaan resource
* Mengelola deployment
* Akses ke pengaturan akun dan billing

---

## 6. Memilih Panel

Setiap layanan memiliki panel kontrol untuk pengelolaan operasional.

### Fitur Panel:

* **File Manager**
  Mengelola file project (upload, edit, hapus).

* **Console / Terminal**
  Menjalankan perintah langsung di environment server.

* **Database Manager**
  Mengelola database dan query.

* **Settings**
  Mengatur environment variables, konfigurasi runtime, dan lainnya.

### Rekomendasi:

Pelajari fungsi panel sebelum deployment untuk mempercepat workflow.

---

## 7. Deploy Project

Tahap terakhir adalah melakukan deployment project.

### Metode Deployment:

* **Upload File**
  Upload langsung file project ke server.

* **Integrasi Repository**
  Hubungkan dengan repository (Git) untuk deployment otomatis.

### Langkah Deployment:

1. Upload atau hubungkan source code.
2. Atur environment variables.
3. Tentukan command untuk menjalankan aplikasi.
4. Jalankan service.

### Setelah Deployment:

* Periksa log untuk memastikan aplikasi berjalan dengan baik.
* Lakukan testing untuk validasi.
* Atur scaling jika diperlukan.

---

## Kesimpulan

Anda telah menyelesaikan proses dasar penggunaan CubeOcean Cloud. Project Anda kini sudah berjalan dan dapat dikelola melalui dashboard serta panel kontrol.

Untuk pengembangan lebih lanjut, Anda dapat mengeksplorasi fitur scaling, otomatisasi deployment, dan monitoring lanjutan.
