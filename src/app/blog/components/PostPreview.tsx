import { PostData } from "@/app/blog/types/PostData";
import PrimaryLink from "@/components/links/PrimaryLink";

const PostPreview = (props: PostData) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <PrimaryLink href={`/blog/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </PrimaryLink>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
