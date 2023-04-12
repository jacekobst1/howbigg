import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPosts from "@/app/blog/utils/postGetter";

interface PostProps {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  const file = `posts/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  return matter(content);
};

export const generateStaticParams = async () => {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params: { slug } }: PostProps) {
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
