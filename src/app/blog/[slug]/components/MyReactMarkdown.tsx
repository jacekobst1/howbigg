import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { generateIdFromText } from "@/app/blog/[slug]/utils/anchorGenerator";
import ReactMarkdown from "react-markdown";
import { Post } from "@/app/blog/types/Post";
import UnderlineLink from "@/components/links/UnderlineLink";
import Image from "next/image";

interface MyReactMarkdownProps {
  post: Post;
  imageSizes: Record<string, { width: number; height: number }>;
}

export default function MyReactMarkdown({
  post,
  imageSizes,
}: MyReactMarkdownProps) {
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
        a: ({ children, ...props }) => (
          <UnderlineLink href={props.href ?? ""}>{children}</UnderlineLink>
        ),
        img: ({ src, alt, ...props }) => {
          if (imageSizes[src as string]) {
            const { width, height } = imageSizes[src as string];
            return (
              <Image
                src={src as string}
                alt={alt as string}
                width={width}
                height={height}
                placeholder={"blur"}
                blurDataURL={"/images/image-placeholder.png"}
              />
            );
          } else {
            return <img src={src} alt={alt} />;
          }
        },
      }}
    >
      {post.content}
    </ReactMarkdown>
  );
}
