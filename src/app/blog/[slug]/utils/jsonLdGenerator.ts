import { Article, WithContext } from "schema-dts";
import { Post } from "@/app/blog/types/Post";

function generateJsonLd(post: Post) {
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

  return jsonLd;
}

export { generateJsonLd };
