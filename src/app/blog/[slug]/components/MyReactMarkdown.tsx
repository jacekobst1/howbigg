import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { generateIdFromText } from "@/app/blog/[slug]/utils/anchorGenerator";
import ReactMarkdown from "react-markdown";
import { Post } from "@/app/blog/types/Post";
import UnderlineLink from "@/components/links/UnderlineLink";
import MyImage from "@/app/blog/[slug]/components/MyImage";
import { ImageSizes } from "@/app/blog/types/ImageSizes";

interface MyReactMarkdownProps {
  post: Post;
  imageSizes: ImageSizes;
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
        h2: (props) => {
          const childrenArray = Array.isArray(props.children)
            ? props.children
            : [props.children];
          const firstChild = childrenArray[0];
          const text = typeof firstChild === "string" ? firstChild : "";
          const isFaq = text === "FAQ";

          return (
            <>
              {isFaq && <div className="divider" />}
              <h2
                id={generateIdFromText(text)}
                style={{
                  color: isFaq ? "var(--color-primary-500)" : "",
                }}
                className="article__h2"
              >
                {props.children}
              </h2>
            </>
          );
        },
        mark: ({ children, ...props }) => (
          <mark className="article__mark" {...props}>
            {children}
          </mark>
        ),
        a: ({ children, ...props }) => (
          <UnderlineLink href={props.href ?? ""} className="article__a">
            {children}
          </UnderlineLink>
        ),
        img: ({ src, alt, ...props }) => {
          const width = imageSizes[src as string].width;
          const height = imageSizes[src as string].height;
          const staticWidth = 745;
          const staticHeight = height / (width / 745);

          return (
            <MyImage
              src={src as string}
              alt={alt as string}
              width={staticWidth}
              height={staticHeight}
              className="article__img"
            />
          );
        },
      }}
    >
      {post.content}
    </ReactMarkdown>
  );
}
