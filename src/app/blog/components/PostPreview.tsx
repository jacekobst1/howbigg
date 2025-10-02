import { PostMetadata } from "@/app/blog/types/Post";
import Link from "next/link";
import { formatPrettyTextDate } from "@/utils/date";
import MyImage from "@/app/blog/[slug]/components/MyImage";

const PostPreview = (post: PostMetadata) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="post-preview bg-white hover:bg-base-50 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 border border-gray-200 hover:border-primary/50 flex h-[130px] lg:h-[200px] rounded"
    >
      <MyImage
        src={post.image.sources[2]}
        alt={post.image.alt}
        width={200}
        height={200}
        className="h-[130px] lg:h-[200px] my-auto rounded-l"
      />
      <div className="flex flex-col py-2 lg:py-3 px-5">
        <h2 className="post-preview__title text-sm lg:text-lg">{post.title}</h2>
        <p className="post-preview__subtitle text-xs lg:text-sm text-gray-500 mt-0.5 lg:mt-2">
          {post.subtitle}
        </p>
        <div className="grow" />
        <div className="text-xs">
          {/*<span>{formatPrettyTextDate(post.createdAt)}</span>*/}
          {/*<span className="mx-1">&#x2022;</span>*/}
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
