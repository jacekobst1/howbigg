import "./style.css";
import Markdown from "markdown-to-jsx";
import {
  getAllPostsMetadata,
  getPostBySlug,
} from "@/app/blog/utils/postGetter";
import ArrowLink from "@/components/links/ArrowLink";
import { Article, WithContext } from "schema-dts";

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
        <div className="my-12 text-center">
          <h1 className="text-primary-500 ">{post.title}</h1>
          <p className="text-slate-400 mt-2">{post.date}</p>
        </div>
        <div className="bg-base-100 mx-auto py-10 rounded-lg md:w-3/4 px-5 md:px-20">
          <article className="prose mx-auto">
            <Markdown>{post.content}</Markdown>
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
