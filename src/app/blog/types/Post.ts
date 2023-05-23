export interface Post extends PostMetadata {
  content: string;
  headings: string[];
}

export interface PostMetadata {
  createdAt: string;
  updatedAt: string | null;
  title: string;
  subtitle: string;
  slug: string;
  image: {
    alt: string;
    author: string;
    sources: string[];
  };
  readingTime: number;
}
