import React from "react";
import PageClient from "./components/PageClient";
import QuickComparisons from "@/app/compare/display/components/QuickComparisons";
import { getAllPostsMetadata } from "@/app/blog/utils/postGetter";

export default function CompareDisplayPage() {
  // Fetch blog posts on server side
  const posts = getAllPostsMetadata(6);

  return (
    <div className="layout__container layout-xl">
      <section className="layout__left-section">
        <QuickComparisons />
      </section>
      <PageClient posts={posts} />
    </div>
  );
}
