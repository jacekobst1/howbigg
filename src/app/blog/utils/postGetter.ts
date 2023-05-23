import fs from "fs";
import matter from "gray-matter";
import { Post, PostMetadata } from "@/app/blog/types/Post";
import { notFound } from "next/navigation";

function getAllPostsMetadata(): PostMetadata[] {
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
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
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
  };
}

export { getAllPostsMetadata, getPostBySlug };
