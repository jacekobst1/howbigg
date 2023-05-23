export interface Post extends PostMetadata {
  content: string;
  headings: string[];
}

export interface PostMetadata {
  createdAt: string;
  updatedAt: string | null;
  title: string;
  subtitle: string;
  readingTime: number;
  image: {
    alt: string;
    author: string;
    sources: string[];
  };
  slug: string;
}
