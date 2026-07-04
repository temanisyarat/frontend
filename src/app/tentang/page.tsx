import type { Metadata } from "next";

import { TeamCard } from "@/components/team-card";
import { SectionTitle, SiteFooter, SiteHeader } from "@/components/page-chrome";
import { getAuthors } from "@/lib/sanity";
import img1 from "../../../assets/members/1.png";
import img2 from "../../../assets/members/2.png";
import img3 from "../../../assets/members/3.png";
import img4 from "../../../assets/members/4.png";
import img5 from "../../../assets/members/5.png";
import img6 from "../../../assets/members/6.png";
import img7 from "../../../assets/members/7.png";
import img8 from "../../../assets/members/8.png";
import img9 from "../../../assets/members/9.png";
import fotoPakHeri from "../../../assets/members/10.png";

const fotoProfil: Record<string, any> = {
  "dunhill william putra": img1,
  "farras arkan wardana": img2,
  "muhammad febrian jamaludin": img3,
  "fredy ramadhan": img4,
  "hany wachidatul aisyah": img5,
  "ivan wahyu nugroho": img6,
  "kevin marcelino porobaten": img7,
  "mutia rahman": img8,
  "usrotun saidah": img9,
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

type TeamMember = {
  name: string;
  role: string;
  imageUrl?: any;
};

const fallbackTeam: TeamMember[] = Array.from({ length: 9 }, () => ({
  name: "Card Subtitle",
  role: "Card Subtitle",
}));

export default async function AboutPage() {
  const authors = await getAuthors(9);

  const teamMembers: TeamMember[] =
    authors.length > 0
      ? authors.map((author) => ({
          name: author.name,
          role: author.bio || "Anggota Tim",
          imageUrl: fotoProfil[author.name.toLowerCase()] || img1,
        }))
      : fallbackTeam.map((member, i) => ({
          ...member,
          imageUrl: Object.values(fotoProfil)[i] || img1,
        }));

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[120px] lg:py-16">
          <SectionTitle>Dosen Pembimbing</SectionTitle>

          <div className=" mt-8 mb-8 rounded-[64px] bg-[#e5e8fa] p-4 sm:p-8 lg:p-16">
            <div className="align-middle flex justify-center">
                <TeamCard
                  key={"pak heri"}
                  name={"Heri Prasetyo, S.Kom., M.Sc.Eng., Ph.D."}
                  role={"Dosen Informatika UNS"}
                  imageUrl={fotoPakHeri}
                />
            </div>
          </div>

          <SectionTitle>Profil Tim Pengembang</SectionTitle>

          <div className="mt-8 rounded-[64px] bg-[#e5e8fa] p-4 sm:p-8 lg:p-16">
            <div className="grid justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={`${member.name}-${index}`}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
