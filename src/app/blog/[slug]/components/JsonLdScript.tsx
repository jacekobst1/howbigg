import { Article, WithContext } from "schema-dts";
import { Post } from "@/app/blog/types/Post";

interface JsonLdScriptProps {
  post: Post;
}

export default function jsonLdScript({ post }: JsonLdScriptProps) {
  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://howbigg.com/blog/${post.slug}`,
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
    datePublished: post.createdAt,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
