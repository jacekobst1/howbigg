import { Post } from "@/app/blog/types/Post";

interface PostTitleProps {
  post: Post;
}
export default function PostTitle({ post }: PostTitleProps) {
  return (
    <div className="my-12 text-center md:w-3/4 mx-auto">
      <h1 className="text-primary-500 ">{post.title}</h1>
      <p className="text-slate-400 mt-2">{post.createdAt}</p>
    </div>
  );
}
