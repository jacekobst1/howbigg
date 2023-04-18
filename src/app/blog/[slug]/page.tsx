import "./style.css";
import {
  getAllPostsMetadata,
  getPostBySlug,
} from "@/app/blog/utils/postGetter";
import ArrowLink from "@/components/links/ArrowLink";
import { Article, WithContext } from "schema-dts";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

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

  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://howbigg.com/blog/${slug}`,
    },
    headline: post.title,
    description: post.subtitle,
    image: "",
    author: {
      "@type": "Person",
      name: "Jacek Obst",
    },
    publisher: {
      "@type": "Organization",
      name: "Howbigg",
      logo: {
        "@type": "ImageObject",
        url: "https://howbigg.com/images/logo.png",
      },
    },
    datePublished: post.date,
  };

  return (
    <>
      <div>
        <ArrowLink href="/blog" direction="left">
          Back to blog
        </ArrowLink>
        <div className="my-12 text-center md:w-3/4 mx-auto">
          <h1 className="text-primary-500 ">{post.title}</h1>
          <p className="text-slate-400 mt-2">{post.date}</p>
        </div>
        <div className="bg-base-100 mx-auto py-10 rounded-lg md:w-3/4 px-5 md:px-20">
          <nav>
            <ul>
              {post.headings.map((heading) => (
                <li key={heading}>
                  <Link
                    href={{
                      pathname: `/blog/${post.slug}`,
                      hash: generateAnchorId(heading),
                    }}
                  >
                    {heading}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <article className="prose mx-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              components={{
                h2: (props) => (
                  <h2 id={generateAnchorId(props.children[0] as string)}>
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
            )
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

function generateAnchorId(str: string) {
  return str
    .toLowerCase()
    .replace(/^\s+|\s+$/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
