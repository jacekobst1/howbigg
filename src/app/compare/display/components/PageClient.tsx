"use client";

import React, { useState } from "react";
import Comparison from "./Comparison";
import RightSidebarContent from "./RightSidebarContent";
import Display from "../types/Display";
import { PostMetadata } from "@/app/blog/types/Post";
import BlogColumnPostPreview from "@/components/shared/BlogColumn/BlogColumnPostPreview";

interface PageClientProps {
  posts: PostMetadata[];
}

export default function PageClient({ posts }: PageClientProps) {
  const [displays, setDisplays] = useState<Display[]>([]);

  return (
    <>
      <section className="layout__center-section">
        <Comparison onDisplaysChange={setDisplays} />
        {/* Blog posts at bottom on desktop, hidden on mobile (shown in right section on mobile) */}
        <div className="hidden xl:block mt-16">
          <h2 className="text-2xl">Latest articles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 mt-4">
            {posts.map((post) => (
              <BlogColumnPostPreview key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
      <section className="layout__right-section">
        {/* On desktop (xl+): Shows either blog or recommendations with animations */}
        <div className="hidden xl:block">
          <RightSidebarContent displays={displays} posts={posts} />
        </div>
        {/* On mobile/tablet: Always show blog at bottom */}
        <div className="block xl:hidden">
          <h2 className="text-2xl">Latest articles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 mt-4">
            {posts.map((post) => (
              <BlogColumnPostPreview key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
