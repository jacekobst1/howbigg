export interface Post extends PostMetadata {
  content: string;
  headings: string[];
}

export interface PostMetadata {
  createdAt: string;
  title: string;
  subtitle: string;
  slug: string;
}
