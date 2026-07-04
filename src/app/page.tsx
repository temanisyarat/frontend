import Image from "next/image";

import desktopHero from "../../assets/web/images/desktop-final.png";
import mobileHero from "../../assets/web/images/Beranda-final.png";
import illustrationMedium from "../../assets/illustrations/illustration-medium.svg";
import cheersPlaceholder from "../../assets/placeholders/cheers.jpg";
import fotoWili from "../../assets/members/1.png";
import fotoPakHeri from "../../assets/members/10.png";
import {
  ActionButton,
  InlineImage,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from "@/components/page-chrome";
import { TeamCard } from "@/components/team-card";

const featureCards = [
  {
    title: "Terjemah Secara Langsung",
    body:
      "Fitur live translation dari TemanIsyarat memungkinkan Anda menerjemahkan gerakan bahasa isyarat menjadi teks atau suara secara real-time. Arahkan kamera Anda dan nikmati komunikasi dua arah yang jauh lebih cepat, responsif, dan tanpa hambatan.",
  },
  {
    title: "Belajar Bahasa Isyarat",
    body:
      "TemanIsyarat menyediakan berbagai modul belajar yang dirancang secara terstruktur untuk membantu siapa saja memahami dan mempraktikkan kosakata dasar bahasa isyarat dengan mudah.",
  },
  {
    title: "Privasi Terjaga",
    body:
      "Keamanan dan privasi Anda adalah prioritas utama kami. TemanIsyarat menerapkan kebijakan strict no log policy, yang berarti kami tidak akan pernah merekam, menyimpan, atau melacak data percakapan maupun aktivitas penerjemahan Anda di dalam aplikasi.",
  },
] as const;

const objectiveItems = [
  "Pengembangan Prototipe Real-Time dengan akurasi ≥ 80% pada perangkat smartphone",
  "Penyusunan Dataset terstandarisasi berisi 500 rekaman untuk 20 kelas gestur BISINDO Solo.",
  "Pengembangan MVP (minimum viable product) aplikasi mobile untuk penangkapan gestur secara langsung lewat kamera.",
] as const;

const processCards = [
  {
    title: "Ekstraksi Fitur (MediaPipe)",
    body: "Sistem melacak 522 titik gerak dari wajah, tangan, dan postur tubuh secara presisi melalui kamera ponsel.",
  },
  {
    title: "Pemrosesan AI (GRU)",
    body: "Pola gerakan dianalisis oleh AI berbasis Gated Recurrent Unit (GRU), yang cerdas namun ringan untuk perangkat kecil.",
  },
  {
    title: "Deployment (TFLite)",
    body: "Model dikompresi menjadi format TensorFlow Lite agar bisa menerjemahkan bahasa isyarat secara langsung di smartphone tanpa perlu terhubung ke cloud.",
  },
] as const;

const teamCards = [
  {
    title: "Heri Prasetyo, S.Kom., M.Sc.Eng., Ph.D.",
    role: "Dosen Pembimbing",
    image: fotoPakHeri,
    imagePosition: "center top",
  },
  {
    title: "Dunhill William",
    role: "Ketua Tim",
    image: fotoWili,
    imagePosition: "center right",
  },
] as const;

export default function Home() {
  return (
    <div id="beranda" className="flex min-h-screen flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        <section className="overflow-hidden bg-[#e5e8fa]" aria-label="Hero">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center 
          px-6 pt-10 sm:px-10 lg:px-32 lg:pt-16 lg:gap-4 md:gap-2.5 gap-1.5">

            <div className="mt-6 flex max-w-3xl flex-col items-center gap-6 text-center lg:mt-8">
              <h1 className="text-balance text-[clamp(2.15rem,4vw,2.5rem)] font-bold leading-[1.3] tracking-tight text-[#111111]">
                Mobile App Penerjemah Bahasa Isyarat Real-Time
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <ActionButton href="https://github.com/temanisyarat/android/releases" tone="dark" arrow>
                  Unduh Sekarang
                </ActionButton>
                <ActionButton href="https://github.com/temanisyarat/manager" tone="blue" arrow>
                  Dokumentasi
                </ActionButton>
                <ActionButton href="https://github.com/temanisyarat/dataset" tone="light" arrow>
                  Dataset
                </ActionButton>
              </div>
            </div>

            <div className="mt-6 flex w-4/5 justify-center md:mt-8 lg:mt-12 relative bottom-0">
              <div className="hidden w-full max-w-6xl md:block">
                <InlineImage
                  src={desktopHero}
                  alt="Pratinjau aplikasi TemanIsyarat"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="block w-full mb-12 max-w-sm md:hidden">
                <InlineImage
                  src={mobileHero}
                  alt="Pratinjau aplikasi TemanIsyarat di ponsel"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="
          min-h-screen mx-auto max-w-[1440px] flex items-center">
          <div className=" px-6 py-16 sm:px-10 lg:px-32 lg:py-20">
            <SectionTitle>Apa itu TemanIsyarat?</SectionTitle>

            <div className="mt-10 grid items-center gap-10 text-center lg:text-left lg:grid-cols-[305px_minmax(0,1fr)]">
              <div className="flex justify-center">
                <div className="flex w-full max-w-[305px] items-center justify-center rounded-[32px] bg-[#eaeaea] p-3">
                  <InlineImage
                    src={illustrationMedium}
                    alt="Ilustrasi TemanIsyarat"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 lg:items-start">
                <p className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] text-[#111111]">
                  TemanIsyarat adalah aplikasi penerjemah bahasa isyarat berbasis kecerdasan buatan yang dirancang
                  untuk menjembatani komunikasi menjadi lebih inklusif dengan teknologi.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <ActionButton href="/tentang" tone="blue" arrow>
                    Baca Lebih Lanjut
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] 
        min-h-screen flex flex-col align-middle justify-center">
          <div className="px-6 pb-16 sm:px-10 lg:px-32 lg:pb-20">
            <SectionTitle>Fitur-fitur Utama</SectionTitle>
            <div className="grid gap-6 lg:grid-cols-3 mt-10">
              {featureCards.map((card) => (
                <article key={card.title} className="rounded-[24px] bg-[#e5e8fa] p-10 text-left">
                  <div className="flex h-full min-h-60 md:min-h-52 lg:min-h-80 flex-col justify-between sm:gap-3 lg:gap-8">
                    <h3 className="text-[clamp(1.6rem,2vw,2rem)] font-semibold leading-none text-[#111111]">
                      {card.title}
                    </h3>
                    <p className="text-[16px] md:text-lg leading-[1.5] text-[#111111]">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e5e8fa] py-16 lg:py-24
          min-h-screen flex flex-col justify-center">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-32">
            <p className="mx-auto max-w-5xl text-center text-[clamp(1.25rem,3vw,2rem)] leading-[1.5] text-[#111111]">
              <span className="text-[#0000cc]">
                Teknologi penerjemah bahasa isyarat saat ini sering kali &quot;buta dialek&quot; karena hanya dilatih
                menggunakan varietas kota besar tertentu.
              </span>{" "}
              Proyek ini hadir untuk membangun infrastruktur teknologi yang menghormati ragam bahasa BISINDO
              Solo, yang selama ini belum memiliki dataset publik untuk pembelajaran mesin.
            </p>
          </div>
        </section>

        <section id="tujuan" className="mx-auto max-w-[1440px] 
          px-6 py-16 sm:px-10 lg:px-32 lg:py-20
          min-h-screen flex flex-col justify-center">
          <SectionTitle>Tujuan Spesifik</SectionTitle>

          <div className="mt-10 space-y-6">
            {objectiveItems.map((item) => (
              <article key={item} className="rounded-[32px] bg-[#e5e8fa] px-8 py-8 lg:px-12 text-center lg:text-left">
                <p className="text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.5] text-[#111111]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proses" className="mx-auto max-w-[1440px] 
          px-6 py-16 sm:px-10 lg:px-32 lg:py-20
          min-h-screen flex flex-col justify-center">
          <SectionTitle>Proses Pengembangan</SectionTitle>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processCards.map((card) => (
              <article key={card.title} className="rounded-[24px] bg-[#e5e8fa] p-10 text-left">
                <div className="flex h-full min-h-60 md:min-h-44 lg:min-h-80 flex-col justify-between sm:gap-3 lg:gap-8">
                  <h3 className="text-[clamp(1.6rem,2vw,2rem)] font-semibold leading-none text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="text-[16px] md:text-lg leading-[1.5] text-[#111111]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:justify-end">
            <ActionButton href="/proses-pengembangan" tone="blue" arrow>
              Baca Lebih Lanjut
            </ActionButton>
          </div>
        </section>

        <section id="dataset" className="mx-auto max-w-[1440px] 
          px-6 py-16 sm:px-10 lg:px-32 lg:py-20
          min-h-screen flex flex-col justify-center">
          <SectionTitle accent={false}>Dataset</SectionTitle>

          <div className="mt-10 rounded-[24px] bg-[#e5e8fa] px-6 py-8 lg:px-16 lg:py-16">
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <p className="max-w-4xl flex-1 text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] text-[#111111]">
                <span className="text-[#0000cc]">Dapatkan akses ke dataset TemanIsyarat</span>
                {" yang terdiri dari 500 gestur yang telah dilabeli."}
              </p>

              <ActionButton href="https://github.com/temanisyarat/dataset" tone="dark" arrow large>
                Ke Dataset
              </ActionButton>
            </div>
          </div>
        </section>

        <section id="tim" className="mx-auto max-w-[1440px]
          px-6 py-16 sm:px-10 lg:px-32 lg:py-20
          min-h-screen flex flex-col justify-center">
          <SectionTitle accent={false}>Profil Tim Pengembang</SectionTitle>

          <div className="mt-10 rounded-[64px] bg-[#e5e8fa] px-6 py-8 lg:px-16 lg:py-16">
            <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center w-full md:items-middle gap-20 md:gap-6">
              {/* container buat card dipisah dari button biar bisa distyling sendiri2 */}
              <div className="flex gap-6 sm:flex-row flex-col items-center w-full lg:max-w-3/5">
                {teamCards.map((card) => (
                  <TeamCard
                  key={`${card.title}`}
                  name={card.title}
                  role={card.role}
                  imageUrl={card.image}
                  />
                  
                ))}
              </div>

              <div className="sm:mt-4 lg:justify-left">
                <ActionButton href="/tentang" tone="dark" arrow large>
                  Lihat Semua
                </ActionButton>
              </div>
            </div>
          </div>
        </section>

        <section id="gerkatin" className="mx-auto max-w-[1440px] 
          px-6 py-16 sm:px-10 lg:px-32 lg:py-20
          min-h-screen flex flex-col justify-center">
          <SectionTitle>Tentang GERKATIN</SectionTitle>

          <div className="mt-10 grid items-center gap-10 text-center lg:text-left lg:grid-cols-[305px_minmax(0,1fr)]">
            <div className="flex justify-center">
              <div className="relative h-[354px] w-full max-w-[305px] overflow-hidden rounded-[32px] bg-[#eaeaea]">
                <Image
                  src={cheersPlaceholder}
                  alt="Tentang GERKATIN"
                  fill
                  className="object-cover"
                  sizes="305px"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 lg:items-start">
              <p className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] text-[#111111]">
                <span className="text-[#0000cc]">Gerakan untuk Kesejahteraan Tunarungu Indonesia</span>{" "}
                <span className="text-[#0000cc]">Kota Surakarta</span> adalah sebuah organisasi advokasi dan
                pemberdayaan tingkat lokal yang didedikasikan untuk mendukung hak-hak dan kesejahteraan
                komunitas Tuli di Surakarta (Solo).
              </p>

              <div className="flex justify-center lg:justify-start">
                <ActionButton href="/artikel/tentang-gerkatin" tone="blue" arrow>
                  Baca Lebih Lanjut
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
