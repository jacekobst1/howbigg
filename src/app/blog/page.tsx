import { getAllPostsMetadata } from "./utils/postGetter";
import PostPreview from "./components/PostPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    url: "/blog",
  },
  twitter: {
    title: "Blog",
  },
};

export default function BlogPage() {
  const posts = getAllPostsMetadata();
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
