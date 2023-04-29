import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { generateIdFromText } from "@/app/blog/[slug]/utils/anchorGenerator";
import ReactMarkdown from "react-markdown";
import { Post } from "@/app/blog/types/Post";

interface MyReactMarkdownProps {
  post: Post;
}

export default function MyReactMarkdown({ post }: MyReactMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        h2: (props) => (
          <h2 id={generateIdFromText(props.children[0] as string)}>
            {props.children}
          </h2>
        ),
        mark: ({ children, ...props }) => (
          <mark className="highlighted" {...props}>
            {children}
          </mark>
        ),
      }}
    >
      {post.content}
    </ReactMarkdown>
  );
}
