export interface Post extends PostMetadata {
  content: string;
}

export interface PostMetadata {
  date: string;
  title: string;
  subtitle: string;
  slug: string;
}
