import MyReactMarkdown from "@/app/blog/[slug]/components/MyReactMarkdown";
import { Post } from "@/app/blog/types/Post";
import { ImageSizes } from "@/app/blog/types/ImageSizes";

interface PostContentProps {
  post: Post;
  imageSizes: ImageSizes;
}

export default function PostContent({ post, imageSizes }: PostContentProps) {
  return (
    <div className="bg-base-100 mx-auto py-10 rounded-lg md:w-3/4 px-5 md:px-10 mt-5">
      <article className="prose mx-auto max-w-full">
        <MyReactMarkdown post={post} imageSizes={imageSizes} />
      </article>
    </div>
  );
}
