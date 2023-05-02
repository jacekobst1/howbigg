import "./style.css";
import {
  getAllPostsMetadata,
  getPostBySlug,
} from "@/app/blog/utils/postGetter";
import ArrowLink from "@/components/links/ArrowLink";
import TableOfContents from "@/app/blog/[slug]/components/TableOfContents";
import MyReactMarkdown from "@/app/blog/[slug]/components/MyReactMarkdown";
import PostTitle from "@/app/blog/[slug]/components/PostTitle";
import JsonLdScript from "@/app/blog/[slug]/components/JsonLdScript";

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

  return (
    <>
      <div>
        <ArrowLink href="/blog" direction="left">
          Back to blog
        </ArrowLink>

        <PostTitle post={post} />
        <TableOfContents slug={post.slug} headings={post.headings} />

        <div className="bg-base-100 mx-auto py-10 rounded-lg md:w-3/4 px-5 md:px-10 mt-5">
          <article className="prose mx-auto max-w-full">
            <MyReactMarkdown post={post} />
          </article>
        </div>
      </div>

      <JsonLdScript post={post} />
    </>
  );
}
