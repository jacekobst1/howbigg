import fs from "fs";
import matter from "gray-matter";
import { Post, PostMetadata } from "@/app/blog/types/Post";
import { notFound } from "next/navigation";

const POPULARITY_ORDER: Record<string, number> = {
  "tv-size-guide": 1,
  "ultrawide-vs-dual-monitors": 2,
  "dolby-vision-vs-hdr10": 3,
  "qled-vs-oled": 4,
  "oled-vs-led": 5,
  "what-is-4k-resolution": 6,
  "what-is-dolby-atmos": 7,
  "what-is-hdr": 8,
};

function getAllPostsMetadata(limit?: number): PostMetadata[] {
  const files = fs.readdirSync("posts/");

  return files
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const fileContent = fs.readFileSync(`posts/${filename}`, "utf8");
      const matterResult = matter(fileContent);

      return {
        ...getCommonData(matterResult),
        slug: filename.replace(".md", ""),
      };
    })
    .map((post) => ({
      ...post,
      popularity: POPULARITY_ORDER[post.slug] || 9999,
    }))
    .sort((a, b) => {
      if (a.popularity !== b.popularity) {
        return a.popularity - b.popularity;
      }
      return a.createdAt < b.createdAt ? 1 : -1;
    })
    .splice(0, limit || files.length);
}

function getPostBySlug(slug: string): Post {
  const filename = `posts/${slug}.md`;
  let fileContent;

  try {
    fileContent = fs.readFileSync(filename, "utf8");
  } catch (e) {
    notFound();
  }

  const matterResult = matter(fileContent);

  const content = matterResult.content;
  const headings = content
    .split("\n")
    .filter((line) => /^##\s/.test(line))
    .map((line) => line.replace(/^##\s/, "").trim());

  return {
    ...getCommonData(matterResult),
    content: matterResult.content,
    slug,
    headings,
  };
}

function getCommonData(matterResult: matter.GrayMatterFile<string>) {
  return {
    createdAt: matterResult.data.createdAt,
    updatedAt: matterResult.data.updatedAt,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    readingTime: matterResult.data.readingTime,
    image: matterResult.data.image,
    author: matterResult.data.author,
  };
}

export { getAllPostsMetadata, getPostBySlug };
