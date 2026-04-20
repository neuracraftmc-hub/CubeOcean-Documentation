---
title: Panduan & Tutorial
description: Panduan lengkap menggunakan CubeOcean Cloud dari setup awal hingga penggunaan lanjutan
---

# Panduan & Tutorial CubeOcean Cloud

## Overview

CubeOcean Cloud adalah platform hosting yang menyediakan layanan otomatis melalui panel terintegrasi. Mulai dari pembelian hingga deployment, semua proses dilakukan secara instan tanpa memerlukan konfigurasi manual yang kompleks.

Panduan ini akan membantu Anda memahami cara menggunakan CubeOcean Cloud secara efektif, mulai dari tahap awal hingga penggunaan lanjutan.

---

# 1. Memulai

## 1.1 Membuat Akun

1. Kunjungi website CubeOcean Cloud  
2. Klik **Register**  
3. Isi data yang diperlukan:
   - Email  
   - Password  
4. Lakukan verifikasi email  
5. Login ke dashboard  

---

## 1.2 Overview Dashboard

Setelah login, Anda akan melihat beberapa menu utama:

- **Services** → Mengelola layanan hosting  
- **Orders** → Riwayat pembelian  
- **Billing** → Pembayaran dan invoice  
- **Support** → Mengirim dan mengelola tiket  
- **Account Settings** → Pengaturan akun  

---

# 2. Membeli Hosting

## 2.1 Memilih Paket

1. Masuk ke halaman produk  
2. Pilih kategori hosting  
3. Pilih paket sesuai kebutuhan:
   - Storage  
   - Bandwidth  
   - Fitur tambahan  

---

## 2.2 Konfigurasi Layanan

Saat checkout:

- Pilih opsi domain:
  - Daftarkan domain baru  
  - Gunakan domain yang sudah ada  
- Pilih siklus billing  
- Tambahkan add-ons jika tersedia  

---

## 2.3 Pembayaran

1. Pilih metode pembayaran  
2. Selesaikan transaksi  
3. Tunggu proses otomatis  

---

## 2.4 Aktivasi Otomatis

Setelah pembayaran berhasil:

- Hosting akan aktif secara otomatis  
- Akses panel akan dibuat  
- Detail login dikirim melalui email  

---

# 3. Menggunakan Panel Hosting

## 3.1 Akses Panel

Gunakan informasi yang dikirim melalui email:

- URL panel  
- Username  
- Password  

---

## 3.2 Fitur Utama

### File Manager
- Upload file website  
- Edit file langsung dari browser  

### Database
- Membuat database MySQL  
- Mengelola melalui phpMyAdmin  

### Domain
- Menambahkan domain atau subdomain  
- Mengatur redirect  

### Email
- Membuat email berbasis domain  
- Mengatur forwarding  

---

# 4. Deploy Website

## 4.1 Upload Manual

1. Masuk ke File Manager  
2. Buka folder:
```

public_html

```
3. Upload file website  
4. Extract jika file berbentuk `.zip`  

---

## 4.2 Menggunakan Auto Installer

Jika tersedia:

1. Buka menu **Auto Installer**  
2. Pilih aplikasi (misalnya WordPress)  
3. Klik **Install**  
4. Isi konfigurasi:
- Nama website  
- Username admin  
- Password admin  

---

## 4.3 Menghubungkan Domain

1. Arahkan nameserver domain ke CubeOcean Cloud  
2. Tunggu propagasi DNS (1–24 jam)  
3. Domain akan aktif  

---

# 5. Manajemen Hosting

## 5.1 Maintenance & Kontrol

Tergantung panel, Anda dapat:

- Restart service  
- Membersihkan cache  
- Mengaktifkan maintenance mode  

---

## 5.2 Monitoring

Pantau penggunaan resource:

- CPU  
- RAM  
- Disk  

---

## 5.3 Backup

Disarankan melakukan backup secara rutin:

- Backup manual  
- Backup otomatis (jika tersedia)  

---

# 6. Troubleshooting

## 6.1 Website Tidak Bisa Diakses

Periksa:

- Konfigurasi DNS / nameserver  
- File di dalam `public_html`  
- Status layanan hosting  

---

## 6.2 Error Database

- Pastikan database sudah dibuat  
- Periksa konfigurasi pada file:
```

config.php / .env

```

---

## 6.3 Tidak Bisa Login Panel

- Reset password  
- Periksa data login  
- Hubungi support jika diperlukan  

---

# 7. Support

Jika mengalami kendala:

1. Masuk ke menu **Support**  
2. Klik **Open Ticket**  
3. Jelaskan masalah secara detail:
 - Pesan error  
 - Screenshot (jika ada)  
 - Domain terkait  

---

# 8. Best Practices

- Gunakan password yang kuat  
- Lakukan backup secara rutin  
- Hindari upload file berbahaya  
- Selalu update aplikasi  

---

# 9. Penggunaan Lanjutan

## 9.1 Multi Domain

- Tambahkan domain tambahan  
- Gunakan fitur addon domain  

---

## 9.2 Subdomain

Contoh:
```

blog.domainanda.com
api.domainanda.com

```

---

## 9.3 Cron Jobs

Gunakan cron job untuk otomatisasi:

- Backup terjadwal  
- Menjalankan script  
- Task maintenance  

---

# 10. Penutup

CubeOcean Cloud dirancang untuk memberikan pengalaman hosting yang cepat, otomatis, dan mudah digunakan. Dengan sistem yang terintegrasi, pengguna dapat menjalankan dan mengelola website tanpa konfigurasi yang kompleks.
```
