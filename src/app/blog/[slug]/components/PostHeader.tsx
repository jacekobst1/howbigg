import { Post } from "@/app/blog/types/Post";

interface PostTitleProps {
  post: Post;
}
export default function PostHeader({ post }: PostTitleProps) {
  return (
    <div
      className="aspect-video rounded-lg flex flex-col font-bold"
      style={{
        backgroundImage: `url("${post.mainImages[0]}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-xs md:max-w-lg bg-base-100 rounded-br-lg rounded-tl-lg p-2">
        <h1 className="text-xl md:text-4xl text-primary-500 font-serif">
          {post.title}
        </h1>
      </div>
      <div className="grow flex items-end">
        <div>
          <div className="bg-base-100 rounded-bl-lg rounded-tr-lg p-2">
            <p>
              <span>By: </span>
              <span className="text-primary-500">Jacek Obst</span>
            </p>
            <p>
              <span>Last updated: </span>
              <span className="text-primary-500">
                {new Date().toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="grow" />

        <div>
          <div className="bg-base-100 rounded-br-lg rounded-tl-lg p-2">
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
