import { PostMetadata } from "@/app/blog/types/Post";
import Link from "next/link";
import { formatPrettyTextDate } from "@/utils/date";
import MyImage from "@/app/blog/[slug]/components/MyImage";

export default function BlogColumnPostPreview(post: PostMetadata) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="shadow bg-white max-w-[320px] rounded flex flex-col mx-auto"
    >
      <MyImage
        src={post.image.sources[0]}
        alt={post.image.alt}
        width={320}
        height={180}
        className="rounded-l"
      />
      <div className="flex flex-col h-full mt-2 px-2 mb-2 lg:mb-0">
        <h2 className="text-sm lg:text-sm">{post.title}</h2>
        <div className="flex-grow" />
        <div className="hidden md:block text-xs text-right mt-2 mb-2">
          <span>{formatPrettyTextDate(post.createdAt)}</span>
          <span className="mx-1">&#x2022;</span>
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
