import Markdown from "markdown-to-jsx";
import { getPostBySlug, getPosts } from "@/app/blog/utils/postGetter";
import ArrowLink from "@/components/links/ArrowLink";

interface PostProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params: { slug } }: PostProps) {
  const post = getPostBySlug(slug);
  return (
    <div>
      <ArrowLink href="/blog" direction="left">
        Back to blog
      </ArrowLink>
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
