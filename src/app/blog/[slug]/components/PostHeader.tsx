import "./PostHeader.css";
import { Post } from "@/app/blog/types/Post";
import Image from "next/image";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";

interface PostTitleProps {
  post: Post;
}
export default function PostHeader({ post }: PostTitleProps) {
  return (
    <>
      <h1 className="text-4xl md:text-6xl mt-5 mb-8">{post.title}</h1>
      <figure>
        <Image
          src={post.image.sources[0]}
          alt={post.image.alt}
          width={820}
          height={420}
          className="header-image"
        />
        <figcaption className="header-image-caption">
          {post.image.author}
        </figcaption>
      </figure>
      <div className="flex mt-2">
        <div>
          <p className="text-xs italic text-slate-500 mb-0.5">Written by</p>
          <p className="text-sm font-bold">Jacek Obst</p>
        </div>
        <div className="ml-8">
          <p className="text-xs italic text-slate-500 mb-0.5">
            {post.updatedAt ? "Updated at" : "Published on"}
          </p>
          <p className="text-sm font-bold">
            {new Date(post.updatedAt || post.createdAt).toLocaleDateString(
              "en-us",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )}
          </p>
        </div>
        <div className="grow" />
        <div className="flex text-sm items-center font-semibold">
          <AiOutlineClockCircle className="mr-2" />
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </>
  );
}
