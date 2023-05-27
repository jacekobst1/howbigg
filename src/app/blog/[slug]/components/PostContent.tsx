import MyReactMarkdown from "@/app/blog/[slug]/components/MyReactMarkdown";
import { Post } from "@/app/blog/types/Post";
import { ImageSizes } from "@/app/blog/types/ImageSizes";

interface PostContentProps {
  post: Post;
  imageSizes: ImageSizes;
}

export default function PostContent({ post, imageSizes }: PostContentProps) {
  return (
    <article className="prose mx-auto max-w-full">
      <MyReactMarkdown post={post} imageSizes={imageSizes} />
    </article>
  );
}
