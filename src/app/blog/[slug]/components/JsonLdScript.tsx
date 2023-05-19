import { Article, WithContext } from "schema-dts";
import { Post } from "@/app/blog/types/Post";
import { blog } from "@/router/routes";
import config from "@/config";

interface JsonLdScriptProps {
  post: Post;
}

export default function jsonLdScript({ post }: JsonLdScriptProps) {
  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${config.fullUrl}${blog.href}/${post.slug}`,
    },
    headline: post.title,
    description: post.subtitle,
    image: "",
    creator: {
      "@type": "Person",
      name: "Jacek Obst",
    },
    author: {
      "@type": "Person",
      name: "Jacek Obst",
    },
    publisher: {
      "@type": "Organization",
      name: "Howbigg",
      logo: {
        "@type": "ImageObject",
        url: `${config.fullUrl}/images/logo.png`,
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
