import React from "react";
import PageClient from "./components/PageClient";
import QuickComparisons from "@/app/compare/display/components/QuickComparisons";
import { getAllPostsMetadata } from "@/app/blog/utils/postGetter";
import {
  generateDisplays,
  generateDisplaysWithoutPossibleResolutions,
} from "@/app/compare/display/utils/displayGenerator";
import { decodeDisplays } from "@/app/compare/display/utils/urlEncoder";
import { mapWithPrototype, mergeDeep } from "@/utils/objects";
import Display from "@/app/compare/display/types/Display";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";
import { serializeDisplays } from "@/app/compare/display/utils/displaySerializer";

interface PageProps {
  searchParams: { displays?: string };
}

export default function CompareDisplayPage({ searchParams }: PageProps) {
  // Fetch blog posts on server side
  const posts = getAllPostsMetadata(6);

  // Decode displays server-side for SEO
  let initialDisplays: Display[] = generateDisplays(2);

  if (searchParams.displays) {
    try {
      const encoded = JSON.parse(decodeURIComponent(searchParams.displays));
      const decoded = decodeDisplays(encoded);
      const defaults = generateDisplaysWithoutPossibleResolutions(
        decoded.length,
      );
      const merged = mapWithPrototype(
        defaults,
        (display, index) => mergeDeep(display, decoded[index]) as Display,
      );
      initialDisplays = getDetailedDisplays(merged);
    } catch (e) {
      // Keep defaults on parse error
      console.error("Failed to decode displays from URL:", e);
    }
  }

  return (
    <div className="layout__container layout-xl">
      <section className="layout__left-section">
        <QuickComparisons />
      </section>
      <PageClient
        posts={posts}
        initialDisplays={serializeDisplays(initialDisplays)}
      />
    </div>
  );
}
