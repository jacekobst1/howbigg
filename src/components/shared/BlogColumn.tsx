import { getAllPostsMetadata } from "@/app/blog/utils/postGetter";
import BlogColumnPostPreview from "@/components/shared/BlogColumnPostPreview";

interface BlogColumnProps {
  limit?: number;
}

export default function BlogColumn({ limit }: BlogColumnProps) {
  const posts = getAllPostsMetadata(limit);
  const postPreviews = posts.map((post) => (
    <BlogColumnPostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <h2 className="text-2xl">Latest articles</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 mt-4">
        {postPreviews}
      </div>
    </>
  );
}
