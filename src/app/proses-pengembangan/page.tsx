import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";

import documentationCafe from "../../../assets/placeholders/documentation-cafe.jpeg";
import documentationFatisda from "../../../assets/placeholders/documentation-fatisda.jpeg";
import {
  ActionButton,
  SiteFooter,
  SiteHeader,
} from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Proses Pengembangan Aplikasi",
  description:
    "Proses pengembangan aplikasi TemanIsyarat, dari riset hingga deployment.",
};

const SPLIT_INDEX = 6;

const bodyContent: ReactNode[] = [
  <p
    key="step-1"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>1. Persiapan &amp; Setup.</strong> Tahap ini diawali dengan diskusi
    tim untuk memahami karakteristik linguistik BISINDO sebagai bahasa alami
    komunitas Tuli di Indonesia. Tim akan mempersiapkan lingkungan pengembangan
    berbasis Python dan kerangka kerja MediaPipe, yang terbukti efektif untuk
    pelacakan landmark tubuh secara real-time (Samaan et al., 2022). Studi
    kelayakan juga dilakukan untuk memastikan infrastruktur komputasi memadai
    guna menangani pemrosesan video yang intensif (Putra &amp; Rakun, 2025).
  </p>,
  <p
    key="step-2"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>2. Pengumpulan Data.</strong> Perekaman data akan melibatkan lima
    peraga berbeda untuk menciptakan variasi gestur yang{" "}
    <em>signer-independent</em>, sebuah pendekatan yang penting untuk
    generalisasi model (Myagila et al., 2025). Setiap peraga akan merekam 20
    kelas kata BISINDO sebanyak lima kali dalam format video HD 720p pada 30
    fps untuk menjaga kualitas visual gerakan (Putra &amp; Rakun, 2025). Proses
    ini dilakukan di berbagai kondisi pencahayaan dan latar belakang guna
    memastikan ketahanan sistem terhadap gangguan visual (Aljabar &amp;
    Suharjito, 2020).
  </p>,
  <p
    key="step-3"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>3. Pra-pemrosesan Data.</strong> Video yang direkam akan
    disegmentasi menjadi urutan <em>frame</em>, di mana hanya <em>frame</em>{" "}
    genap yang diambil dan ukurannya dinormalisasi untuk efisiensi komputasi
    (Sutjiadi, 2023). Teknik augmentasi data, seperti{" "}
    <em>horizontal flip</em>, diterapkan untuk mengakomodasi variasi pengguna
    kidal dan meningkatkan keragaman data latih (Myagila et al., 2025). Selain
    itu, penyesuaian kecerahan dan rotasi acak dilakukan untuk memperkaya
    variasi visual dataset (Sutjiadi, 2023).
  </p>,
  <p
    key="step-4"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>4. Ekstraksi Fitur.</strong> Sistem akan menggunakan MediaPipe
    Holistic untuk mendeteksi titik-titik referensi tubuh dari setiap{" "}
    <em>frame</em> gambar RGB. Proses ini menghasilkan total 522 titik fitur
    yang mencakup 21 titik tangan, 468 titik wajah, dan 33 titik pose tubuh
    untuk merepresentasikan gerakan isyarat secara detail (Samaan et al., 2022).
    Fitur-fitur ini kemudian disimpan sebagai data sekuensial yang siap
    dimasukkan ke dalam model <em>machine learning</em>.
  </p>,
  <p
    key="step-5"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>5. Perancangan Model.</strong> Arsitektur model dibangun
    menggunakan dua lapisan Gated Recurrent Unit (GRU) dengan 128 unit, yang
    dipilih karena efisiensi komputasinya dibandingkan LSTM (Myagila et al.,
    2025). Penggunaan fungsi aktivasi ELU (Exponential Linear Unit) diterapkan
    untuk mempercepat konvergensi pelatihan dan menangani masalah{" "}
    <em>vanishing gradient</em> (Myagila et al., 2025).
  </p>,
  <p
    key="step-6"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>6. Pelatihan Model.</strong> Dataset dibagi dengan rasio 70:15:15
    untuk data latih, validasi, dan uji guna mencegah overfitting dan
    memastikan evaluasi yang objektif (Sutjiadi, 2023).     Pelatihan menggunakan{" "}
    <em>optimizer</em> Adam dan fungsi kerugian{" "}
    <em>categorical cross-entropy</em> yang efektif untuk klasifikasi multi-kelas
    (Myagila et al., 2025). Model akan dilatih selama 50&ndash;200{" "}
    <em>epoch</em> dengan pemantauan <em>learning rate</em> 0,001 untuk mencapai
    performa optimal.
  </p>,
  <p
    key="step-7"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>7. Evaluasi Model.</strong> Kinerja model dievaluasi menggunakan
    metrik akurasi, presisi, <em>recall</em>, dan F1-<em>score</em> untuk
    memastikan keandalan prediksi di setiap kelas kata (Myagila et al., 2025).
    Target akurasi ditetapkan sebesar 80%, dan analisis{" "}
    <em>confusion matrix</em> digunakan untuk mengidentifikasi kesalahan
    klasifikasi antar gestur yang mirip (Myagila et al., 2025). Hasil evaluasi
    ini menjadi dasar untuk penyetelan ulang hyperparameter jika target belum
    tercapai.
  </p>,
  <p
    key="step-8"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>8. Optimization &amp; Deployment.</strong> Model yang telah dilatih
    dikonversi ke format TFLite melalui teknik kuantisasi untuk mengurangi
    ukuran file agar ringan dijalankan pada perangkat seluler Android (Sutjiadi,
    2023). Aplikasi dikembangkan dengan kemampuan tangkapan kamera{" "}
    <em>real-time</em> yang terintegrasi dengan fitur{" "}
    <em>Text-to-Speech</em> (TTS) untuk komunikasi dua arah. Pengujian teknis
    dilakukan untuk memastikan latensi rendah dan kestabilan FPS saat aplikasi
    digunakan secara langsung.
  </p>,
  <p
    key="step-9"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>9. Field Testing &amp; User Study.</strong> Pengujian lapangan
    melibatkan partisipasi langsung pengguna dari komunitas Tuli untuk
    memvalidasi kegunaan sistem dalam skenario dunia nyata (Putra &amp; Rakun,
    2025). Metode System Usability Scale (SUS) dan wawancara digunakan untuk
    mengumpulkan umpan balik kualitatif mengenai antarmuka dan akurasi
    penerjemahan. Hasil pengujian ini digunakan untuk iterasi perbaikan fitur
    agar lebih inklusif dan mudah diakses.
  </p>,
  <p
    key="step-10"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>10. Dokumentasi.</strong> Dokumentasi teknis lengkap disusun
    mencakup arsitektur sistem dan panduan pengguna, serta{" "}
    <em>source code</em> disimpan secara terstruktur untuk transparansi
    pengembangan. Publikasi ini bertujuan untuk berkontribusi pada literatur
    teknologi bantu bagi penyandang disabilitas.
  </p>,
  <p
    key="luaran"
    className="p-1 text-justify text-[16px] leading-[1.5] text-black"
  >
    <strong>Luaran Kegiatan.</strong> Luaran dari kegiatan ini mencakup: (1)
    Dataset BISINDO terstandarisasi berupa kumpulan 500 rekaman video untuk 20
    kelas gestur BISINDO Solo, dilengkapi anotasi koordinat landmark dalam
    format JSON; (2) Model GRU dalam bentuk bobot terlatih, laporan evaluasi
    kuantitatif, serta kode inferensi yang terdokumentasi; (3){" "}
    <em>Mobile</em> MVP aplikasi sebagai prototipe Android dengan{" "}
    <em>deployment</em> model GRU dalam format TFLite; (4) Dokumentasi teknis
    mencakup desain sistem, dokumentasi API, panduan pengguna, serta panduan{" "}
    <em>deployment</em>; (5) Laporan <em>field testing</em> dan temuan{" "}
    <em>user study</em> yang merangkum hasil uji coba sistem di lapangan
    bersama komunitas.
  </p>,
];

export default function ProsesPengembanganPage() {
  const today = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="mx-auto w-full lg:max-w-6xl flex-1 px-6 py-8 sm:px-10">
        <article className="lg:space-y-12 space-y-6">
          {/* Hero */}
          <div className="relative h-[272px] overflow-hidden rounded-[32px] bg-[#0000cc]">
            <Image
              src={documentationCafe}
              alt="Dokumentasi pengembangan"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 680px"
              priority
            />
          </div>

          {/* Header */}
          <header className="space-y-3 flex flex-col gap-4">
            <div className="space-y-6">
              <p className="text-lg leading-none text-[#7c7c7c] px-2">
                Artikel
              </p>
              <h1 className="px-1 text-5xl font-bold leading-none tracking-tight text-[#111111]">
                Proses Pengembangan Aplikasi
              </h1>
            </div>
            <div className="flex gap-2 px-1 flex-col align-top">
              <p className="font-bold text-[#0000cc] text-lg">TemanIsyarat Team</p>
              <p className="flex items-center gap-2 text-md leading-none">
                <span>6 Mei 2026</span>
                <span>•</span>
                <span className="text-[#0000cc]">10 min read</span>
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="space-y-4">
            {bodyContent.slice(0, SPLIT_INDEX)}

            {/* Inline image */}
            <div className="relative h-[281px] w-full overflow-hidden rounded-[16px]">
              <Image
                src={documentationFatisda}
                alt="Proses pengembangan aplikasi"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 680px"
              />
            </div>

            {bodyContent.slice(SPLIT_INDEX)}
          </div>
        </article>

        <div className="mt-8 flex justify-end p-2.5">
          <ActionButton href="/" tone="dark" arrow>
            Kembali ke Beranda
          </ActionButton>
        </div>
      </main>

      {/* <ArticleDetailFooter /> */}
      <SiteFooter />
    </div>
  );
}
