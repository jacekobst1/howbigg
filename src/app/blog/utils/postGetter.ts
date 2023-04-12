import fs from "fs";
import matter from "gray-matter";
import { PostData } from "@/app/blog/types/PostData";

const getPosts = (): PostData[] => {
  const files = fs.readdirSync("posts/");
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  return markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      date: matterResult.data.date,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
};

export default getPosts;
