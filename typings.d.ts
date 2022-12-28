type Article = {
  author: string | null;
  category: string;
  countries: string;
  description: string;
  image: string;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Category =
  | "business"
  | "general"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
