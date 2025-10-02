"use client";

import React from "react";
import Display from "@/app/compare/display/types/Display";
import { hasValidDisplay } from "@/app/compare/display/utils/productRecommendationHelper";
import ProductRecommendations from "@/app/compare/display/components/ProductRecommendations";
import { PostMetadata } from "@/app/blog/types/Post";
import BlogColumnPostPreview from "@/components/shared/BlogColumn/BlogColumnPostPreview";

interface RightSidebarContentProps {
  displays: Display[];
  posts: PostMetadata[];
}

export default function RightSidebarContent({ displays, posts }: RightSidebarContentProps) {
  const showRecommendations = hasValidDisplay(displays);

  return (
    <div className="relative">
      <div
        style={{
          transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          opacity: showRecommendations ? 0 : 1,
          transform: showRecommendations ? "translateY(-20px)" : "translateY(0)",
          pointerEvents: showRecommendations ? "none" : "auto",
          position: showRecommendations ? "absolute" : "relative",
        }}
      >
        <h2 className="text-2xl">Latest articles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 mt-4">
          {posts.map((post) => (
            <BlogColumnPostPreview key={post.slug} {...post} />
          ))}
        </div>
      </div>

      <div
        style={{
          transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          opacity: showRecommendations ? 1 : 0,
          transform: showRecommendations ? "translateY(0)" : "translateY(-20px)",
          pointerEvents: showRecommendations ? "auto" : "none",
          position: showRecommendations ? "relative" : "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <ProductRecommendations displays={displays} />
      </div>
    </div>
  );
}
