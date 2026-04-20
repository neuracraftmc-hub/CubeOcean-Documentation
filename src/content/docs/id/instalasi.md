---
title: Instalasi
description: Panduan instalasi
---

# Installation

Panduan ini memberikan penjelasan lengkap mengenai proses instalasi layanan di CubeOcean Cloud. Platform ini dirancang untuk menangani instalasi secara otomatis melalui control panel, sehingga pengguna dapat langsung menggunakan layanan hosting tanpa konfigurasi manual.

## Overview

CubeOcean Cloud menggunakan sistem instalasi otomatis yang akan melakukan provisioning dan konfigurasi environment hosting segera setelah layanan dibeli. Proses instalasi sepenuhnya dikelola oleh sistem dan disesuaikan berdasarkan kategori hosting yang dipilih.

Pengguna tidak perlu melakukan konfigurasi server yang kompleks. Semua komponen penting akan terpasang dan dioptimalkan secara otomatis.

## Requirements

Sebelum memulai, pastikan:

- Memiliki akun CubeOcean Cloud yang aktif
- Telah melakukan pembelian layanan
- Koneksi internet stabil
- Domain (opsional, tergantung kebutuhan)

## Service Purchase

Untuk memulai proses instalasi:

1. Masuk ke dashboard CubeOcean Cloud
2. Buka menu **Services**
3. Klik **Order New Service**
4. Pilih kategori hosting
5. Tentukan paket dan konfigurasi
6. Selesaikan proses checkout

Setelah pembayaran berhasil dikonfirmasi, sistem akan langsung memulai instalasi secara otomatis.

## Automatic Installation System

Setelah pembelian berhasil, sistem akan menjalankan installer otomatis.

Proses yang dilakukan meliputi:

- Membuat dan menyiapkan environment hosting
- Deploy environment yang dibutuhkan
- Menginstal paket software utama
- Mengonfigurasi web server dan database
- Menerapkan pengaturan performa dan keamanan default

Seluruh proses berjalan di background tanpa interaksi pengguna.

## Category-Based Installation

Environment yang diinstal bergantung pada kategori hosting yang dipilih.

### Web Hosting

Komponen yang umumnya terpasang:

- Web server (Apache atau Nginx)
- PHP dengan dukungan multi-versi
- Database server (MySQL atau MariaDB)
- Environment hosting yang sudah dikonfigurasi
- Akses control panel

### Auto Installer Packages

Untuk pengguna yang memilih instalasi berbasis aplikasi, sistem akan langsung menginstal dan mengonfigurasi aplikasi secara otomatis.

Contoh yang didukung:

- WordPress
- Laravel
- Aplikasi Node.js
- Aplikasi berbasis Python

Setiap aplikasi di-deploy dengan konfigurasi optimal agar langsung siap digunakan.

## Accessing the Control Panel

Setelah instalasi selesai:

1. Masuk ke dashboard CubeOcean Cloud
2. Pilih layanan yang aktif
3. Klik **Manage Service**

Panel menyediakan akses ke:

- Manajemen hosting
- Konfigurasi domain
- File manager
- Database tools
- Pengaturan aplikasi

Informasi login dan detail akses akan tersedia secara otomatis setelah instalasi selesai.

## Manual Configuration

Walaupun sistem otomatis, pengguna tetap memiliki kontrol penuh melalui panel.

Fitur yang tersedia:

- Instal atau hapus software
- Kelola domain dan DNS
- Konfigurasi database
- Upload dan manajemen file
- Aktivasi SSL
- Pengaturan environment

## Reinstallation

Jika diperlukan, layanan dapat diinstal ulang:

1. Buka layanan di dashboard
2. Pilih opsi **Reinstall**
3. Pilih konfigurasi atau paket baru
4. Konfirmasi tindakan

Reinstall akan menghapus seluruh data dan mereset environment.

## Installation Status

Status instalasi dapat dipantau secara real-time melalui panel.

Status umum:

- Pending
- Installing
- Active
- Failed

Log detail tersedia untuk kebutuhan troubleshooting.

## Troubleshooting

Jika terjadi masalah saat atau setelah instalasi:

### Installation Failed

- Periksa log instalasi
- Pastikan konfigurasi sesuai
- Coba ulang proses instalasi

### Tidak Bisa Mengakses Layanan

- Periksa kredensial login
- Pastikan layanan sudah aktif
- Cek konfigurasi jaringan dan domain

### Domain Tidak Berfungsi

- Pastikan konfigurasi DNS benar
- Tunggu proses propagasi DNS

## Support

Jika masalah belum teratasi, silakan hubungi support dengan membuka ticket.

Sertakan:

- ID layanan
- Deskripsi masalah
- Screenshot atau log terkait

Tim support akan membantu melakukan pengecekan lebih lanjut.

## Summary

CubeOcean Cloud menyediakan sistem instalasi hosting yang sepenuhnya otomatis, mempermudah proses deployment sekaligus tetap memberikan fleksibilitas melalui control panel. Pengguna dapat mengelola dan menyesuaikan layanan dengan efisien tanpa memerlukan keahlian teknis tingkat lanjut.