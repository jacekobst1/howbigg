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
    <div className="bg-base-100 py-5 rounded-lg px-5 md:px-10 mt-5">
      <h3 className="text-lg mb-2">Table of contents</h3>
      <nav>
        <ul>
          {headings.map((heading) => (
            <li key={heading} className="py-0.5">
              <UnstyledLink
                href={`/blog/${slug}#${generateIdFromText(heading)}`}
                className="hover:text-primary-500 text-sm md:text-base"
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
