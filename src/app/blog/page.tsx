import { getPosts } from "./utils/postGetter";
import PostPreview from "./components/PostPreview";

export default function BlogPage() {
  const posts = getPosts();
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
