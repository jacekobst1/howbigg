import React from "react";
import { Metadata } from "next";
import PageClient from "./components/PageClient";
import QuickComparisons from "@/app/compare/display/components/QuickComparisons";
import { getAllPostsMetadata } from "@/app/blog/utils/postGetter";
import { generateDisplays, generateDisplaysWithoutPossibleResolutions } from "@/app/compare/display/utils/displayGenerator";
import { decodeDisplays } from "@/app/compare/display/utils/urlEncoder";
import { mapWithPrototype, mergeDeep } from "@/utils/objects";
import Display from "@/app/compare/display/types/Display";
import { getDetailedDisplays } from "@/app/compare/display/utils/displayDetailsFacade";
import { serializeDisplays } from "@/app/compare/display/utils/displaySerializer";
import config from "@/config";

interface PageProps {
  searchParams: { displays?: string };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const baseTitle = "Display Size Comparison Tool";
  const baseDescription = "Compare display sizes visually. See exact dimensions, PPI, and optimal viewing distances for monitors, TVs, and smartphones.";

  if (searchParams.displays) {
    try {
      const encoded = JSON.parse(decodeURIComponent(searchParams.displays));
      const decoded = decodeDisplays(encoded);
      const defaults = generateDisplaysWithoutPossibleResolutions(decoded.length);
      const merged = mapWithPrototype(
        defaults,
        (display, index) => mergeDeep(display, decoded[index]) as Display
      );
      const displays = getDetailedDisplays(merged);

      const displayDescriptions = displays
        .filter(d => d.diagonal.length > 0)
        .map(d => `${d.diagonal.length}" ${d.name || 'display'}`)
        .join(" vs ");

      if (displayDescriptions) {
        const title = `${displayDescriptions} - Display Comparison | ${config.shortUrl}`;
        const description = `Compare ${displayDescriptions}. See size differences, PPI calculations, optimal viewing distances, and physical dimensions side-by-side.`;

        return {
          title,
          description,
          openGraph: {
            title,
            description,
            url: `${config.fullUrl}/compare/display`,
            siteName: config.shortUrl,
            type: "website",
          },
          twitter: {
            card: "summary_large_image",
            title,
            description,
          },
        };
      }
    } catch (e) {
      // Use default metadata on error
    }
  }

  return {
    title: baseTitle,
    description: baseDescription,
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `${config.fullUrl}/compare/display`,
      siteName: config.shortUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
    },
  };
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
      const defaults = generateDisplaysWithoutPossibleResolutions(decoded.length);
      const merged = mapWithPrototype(
        defaults,
        (display, index) => mergeDeep(display, decoded[index]) as Display
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
      <PageClient posts={posts} initialDisplays={serializeDisplays(initialDisplays)} />
    </div>
  );
}
