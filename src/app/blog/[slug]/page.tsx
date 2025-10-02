import "./style.css";
import {
  getAllPostsMetadata,
  getPostBySlug,
} from "@/app/blog/utils/postGetter";
import ArrowLink from "@/components/links/ArrowLink";
import TableOfContents from "@/app/blog/[slug]/components/TableOfContents";
import JsonLdScript from "@/app/blog/[slug]/components/JsonLdScript";
import { Post } from "@/app/blog/types/Post";
import sizeOf from "image-size";
import { join } from "path";
import { ImageSizes } from "@/app/blog/types/ImageSizes";
import PostContent from "@/app/blog/[slug]/components/PostContent";
import PostHeader from "@/app/blog/[slug]/components/PostHeader";
import BlogColumn from "@/components/shared/BlogColumn/BlogColumn";
import { Metadata } from "next";

interface PostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
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

async function getImageSizes(post: Post) {
  const imageSizes: ImageSizes = {};

  const iterator = post.content.matchAll(/!\[.*]\((.*)\)/g);
  let match: IteratorResult<RegExpMatchArray, any>;

  while (!(match = iterator.next()).done) {
    const [, src] = match.value;

    try {
      const { width, height } = sizeOf(join("public", src));
      imageSizes[src] = {
        width: width as number,
        height: height as number,
      };
    } catch (err) {
      console.error(`Can’t get dimensions for ${src}:`, err);
    }
  }

  return imageSizes;
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const imageSizes = await getImageSizes(post);

  return (
    <>
      <div className="layout__container layout-xl">
        <section className="layout__left-section" />

        <section
          className="layout__center-section"
          style={{ borderLeft: "none" }}
        >
          <ArrowLink href="/blog" direction="left">
            Back to blog
          </ArrowLink>
          <div className="mx-auto md:w-3/4 mt-5 md:mt-0">
            <PostHeader post={post} />
            <div className="lg:px-10">
              <div className="divider" />
              <TableOfContents slug={post.slug} headings={post.headings} />
              <div className="divider" />
              <PostContent post={post} imageSizes={imageSizes} />
            </div>
          </div>
        </section>

        <section className="layout__right-section">
          <BlogColumn limit={10} ignoredSlug={slug} />
        </section>
      </div>

      <JsonLdScript post={post} />
    </>
  );
}
