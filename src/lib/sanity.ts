type SanityArticle = {
  _id: string;
  article: string;
  slug?: string;
  date?: string;
  readingTime?: number;
  imageUrl?: string;
  authorName?: string;
  authorBio?: string;
  categoryName?: string;
  content?: SanityBlock[];
};

type SanityAuthor = {
  _id: string;
  name: string;
  slug?: string;
  bio?: string;
  imageUrl?: string;
};

type SanityBlock = {
  _key: string;
  _type: string;
  style?: string;
  children?: Array<{
    _key: string;
    _type: string;
    text?: string;
  }>;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "mxxqb8kk";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-06-04";

async function fetchSanity<T>(query: string, fallback: T): Promise<T> {
  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!response.ok) {
    return fallback;
  }

  const payload = (await response.json()) as { result?: T };

  return payload.result ?? fallback;
}

export async function getArticles(page = 1, limit = 6): Promise<SanityArticle[]> {
  const safeLimit = Math.max(1, Math.min(Math.floor(limit), 12));
  const safePage = Math.max(1, Math.floor(page));
  const offset = (safePage - 1) * safeLimit;

  const query = `*[_type == "article"] | order(date desc)[${offset}...${offset + safeLimit}] {
    _id,
    article,
    "slug": slug.current,
    date,
    readingTime,
    "imageUrl": image.asset->url,
    "authorName": author->name,
    "authorBio": author->bio,
    "categoryName": category->category,
    content[]{
      _key,
      _type,
      style,
      children[]{
        _key,
        _type,
        text
      }
    }
  }`;

  return fetchSanity<SanityArticle[]>(query, []);
}

export async function getTotalArticles(): Promise<number> {
  const query = `count(*[_type == "article"])`;
  return fetchSanity<number>(query, 0);
}

export async function getArticleBySlug(slug: string): Promise<SanityArticle | null> {
  const safeSlug = slug.replace(/"/g, '\\"');

  const query = `*[_type == "article" && slug.current == "${safeSlug}"] | order(date desc)[0] {
    _id,
    article,
    "slug": slug.current,
    date,
    readingTime,
    "imageUrl": image.asset->url,
    "authorName": author->name,
    "authorBio": author->bio,
    "categoryName": category->category,
    content[]{
      _key,
      _type,
      style,
      children[]{
        _key,
        _type,
        text
      }
    }
  }`;

  return fetchSanity<SanityArticle | null>(query, null);
}

export async function getAuthors(limit = 9): Promise<SanityAuthor[]> {
  const safeLimit = Math.max(1, Math.min(Math.floor(limit), 24));

  const query = `*[_type == "author"] | order(name asc)[0...${safeLimit}] {
    _id,
    name,
    "slug": slug.current,
    bio,
    "imageUrl": image.asset->url
  }`;

  return fetchSanity<SanityAuthor[]>(query, []);
}

export type { SanityArticle, SanityAuthor };