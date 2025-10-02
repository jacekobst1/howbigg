"use client";

import React, { useState } from "react";
import Comparison from "./Comparison";
import RightSidebarContent from "./RightSidebarContent";
import ProductRecommendations from "./ProductRecommendations";
import Display from "../types/Display";
import { PostMetadata } from "@/app/blog/types/Post";
import BlogColumnPostPreview from "@/components/shared/BlogColumn/BlogColumnPostPreview";
import { hasValidDisplay } from "../utils/productRecommendationHelper";
import { deserializeDisplays } from "../utils/displaySerializer";

interface PageClientProps {
  posts: PostMetadata[];
  initialDisplays: any[];
}

export default function PageClient({ posts, initialDisplays }: PageClientProps) {
  const [displays, setDisplays] = useState<Display[]>(() =>
    deserializeDisplays(initialDisplays)
  );

  return (
    <>
      <section className="layout__center-section">
        <Comparison onDisplaysChange={setDisplays} initialDisplays={displays} />
        {/* Blog posts at bottom on desktop - only when recommendations are shown in sidebar */}
        {hasValidDisplay(displays) && (
          <div className="hidden xl:block mt-16">
            <h2 className="text-2xl">Latest articles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 mt-4">
              {posts.map((post) => (
                <BlogColumnPostPreview key={post.slug} {...post} />
              ))}
            </div>
          </div>
        )}
      </section>
      <section className="layout__right-section">
        {/* On desktop (xl+): Shows either blog or recommendations with animations */}
        <div className="hidden xl:block">
          <RightSidebarContent displays={displays} posts={posts} />
        </div>
        {/* On mobile/tablet: Show recommendations if display set, then blog posts below */}
        <div className="block xl:hidden">
          {hasValidDisplay(displays) && (
            <ProductRecommendations displays={displays} />
          )}
          <div className={hasValidDisplay(displays) ? "mt-16" : ""}>
            <h2 className="text-2xl">Latest articles</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 mt-4">
              {posts.map((post) => (
                <BlogColumnPostPreview key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
