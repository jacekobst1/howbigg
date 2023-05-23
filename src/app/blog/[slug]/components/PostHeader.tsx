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
      <Image
        src={post.mainImages[0]}
        alt="TODO"
        width={820}
        height={420}
        className="header-image"
      />
      <div className="flex mt-5">
        <div className="mr-8">
          <p className="text-xs italic text-slate-500 mb-0.5">Written by</p>
          <p className="text-sm font-bold">Jacek Obst</p>
        </div>
        <div>
          <p className="text-xs italic text-slate-500 mb-0.5">Published on</p>
          <p className="text-sm font-bold">
            {new Date(post.createdAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="grow" />
        <div className="flex text-sm items-center font-bold">
          <AiOutlineClockCircle className="mr-2" />
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </>
  );
}
