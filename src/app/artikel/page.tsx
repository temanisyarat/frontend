import type { Metadata } from "next";

import { ArticleCard } from "@/components/article-card";
import { Pagination } from "@/components/pagination";
import { SectionTitle, SiteFooter, SiteHeader } from "@/components/page-chrome";
import { excerptFromArticle } from "@/lib/articles";
import { getArticles, getTotalArticles } from "@/lib/sanity";
import placeholderImg from "../../../assets/placeholders/placeholder.jpg";
import cheersImg from "../../../assets/placeholders/cheers.jpg";
import work1Img from "../../../assets/placeholders/work1.jpg";
import work2Img from "../../../assets/placeholders/work2.jpg";
import happy1Img from "../../../assets/placeholders/happy1.jpg";
import meetingImg from "../../../assets/placeholders/meeting.jpg";

const placeholders = [
  placeholderImg,
  cheersImg,
  work1Img,
  work2Img,
  happy1Img,
  meetingImg,
];

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Artikel",
};

const fallbackExcerpt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";

type ArticleListItem = {
  title: string;
  excerpt: string;
  readTime: number;
  href: string;
  highlighted: boolean;
  imageUrl?: any;
  date?: string;
};

const fallbackCards: ArticleListItem[] = Array.from({ length: 6 }, (_, index) => ({
  title: "Headline",
  excerpt: fallbackExcerpt,
  readTime: 3,
  href: "/artikel/tentang-gerkatin",
  highlighted: index === 0,
}));

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageStr } = await searchParams;
  const currentPage = Math.max(1, Number(pageStr) || 1);
  const limit = 6;

  const articles = await getArticles(currentPage, limit);
  const totalArticles = await getTotalArticles();
  const totalPages = Math.max(1, Math.ceil(totalArticles / limit));

  const cards: ArticleListItem[] =
    articles.length > 0
      ? articles.map((article, index) => ({
          title: article.article || "Headline",
          excerpt: excerptFromArticle(article, fallbackExcerpt),
          readTime: article.readingTime ?? 3,
          href: `/artikel/${article.slug ?? "tentang-gerkatin"}`,
          highlighted: index === 0,
          imageUrl: article.imageUrl,
          date: article.date,
        }))
      : fallbackCards.map((card, index) => ({
          ...card,
          imageUrl: placeholders[index % placeholders.length],
        }));

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-[1440px] px-6 pb-8 pt-16 sm:px-10 lg:px-[120px] lg:pt-16">
          <SectionTitle>Artikel</SectionTitle>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => (
              <ArticleCard
                key={`${card.href}-${card.highlighted ? "featured" : "default"}-${index}`}
                title={card.title}
                excerpt={card.excerpt}
                href={card.href}
                highlighted={false}
                imageUrl={card.imageUrl}
                date={card.date}
                readingTime={card.readTime}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
