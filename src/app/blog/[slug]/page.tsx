import "./style.css";
import {
  getAllPostsMetadata,
  getPostBySlug,
} from "@/app/blog/utils/postGetter";
import ArrowLink from "@/components/links/ArrowLink";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { generateIdFromText } from "@/app/blog/[slug]/utils/anchorGenerator";
import TableOfContents from "@/app/blog/[slug]/components/TableOfContents";
import { generateJsonLd } from "@/app/blog/[slug]/utils/jsonLdGenerator";

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: PostProps) {
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      url: `/blog/${slug}`,
    },
    twitter: {
      title: post.title,
      description: post.subtitle,
    },
  };
}

export const generateStaticParams = async () => {
  const postsMetadata = getAllPostsMetadata();

  return postsMetadata.map((metadata) => ({
    slug: metadata.slug,
  }));
};

export default function PostPage({ params: { slug } }: PostProps) {
  const post = getPostBySlug(slug);
  const jsonLd = generateJsonLd(post);

  return (
    <>
      <div>
        <ArrowLink href="/blog" direction="left">
          Back to blog
        </ArrowLink>

        <div className="my-12 text-center md:w-3/4 mx-auto">
          <h1 className="text-primary-500 ">{post.title}</h1>
          <p className="text-slate-400 mt-2">{post.createdAt}</p>
        </div>

        <TableOfContents slug={post.slug} headings={post.headings} />

        <div className="bg-base-100 mx-auto py-10 rounded-lg md:w-3/4 px-5 md:px-10 mt-5">
          <article className="prose mx-auto max-w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              components={{
                h2: (props) => (
                  <h2 id={generateIdFromText(props.children[0] as string)}>
                    {props.children}
                  </h2>
                ),
                mark: ({ children, ...props }) => (
                  <mark className="highlighted" {...props}>
                    {children}
                  </mark>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
