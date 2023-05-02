import UnstyledLink from "@/components/links/UnstyledLink";
import { generateIdFromText } from "@/app/blog/[slug]/utils/anchorGenerator";

interface TableOfContentsProps {
  slug: string;
  headings: string[];
}

export default function TableOfContents({
  slug,
  headings,
}: TableOfContentsProps) {
  return (
    <div className="bg-base-100 mx-auto py-5 rounded-lg md:w-3/4 px-5 md:px-10">
      <nav>
        <ul>
          {headings.map((heading) => (
            <li key={heading} className="font-bold">
              <UnstyledLink
                href={`/blog/${slug}#${generateIdFromText(heading)}`}
                className="hover:text-primary-500"
              >
                {heading}
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
