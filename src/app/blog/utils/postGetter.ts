import fs from "fs";
import matter from "gray-matter";
import { PostData } from "@/app/blog/types/PostData";

const getPosts = (): PostData[] => {
  const files = fs.readdirSync("posts/");

  return files
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);

      return {
        date: matterResult.data.date,
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export default getPosts;
