"use client";

import React from "react";
import Display from "@/app/compare/display/types/Display";
import {
  hasValidDisplay,
  filterRelevantProducts,
  groupSectionsByType,
  EnrichedProductSection,
} from "@/app/compare/display/utils/productRecommendationHelper";
import StarRating from "./Recommendations/StarRating";

interface ProductRecommendationsProps {
  displays: Display[];
}

export default function ProductRecommendations({
  displays,
}: ProductRecommendationsProps) {
  if (!hasValidDisplay(displays)) {
    return null;
  }

  const relevantSections = filterRelevantProducts(displays);

  if (relevantSections.length === 0) {
    return null;
  }

  const { monitors, tvs } = groupSectionsByType(relevantSections);

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-2xl">
          Recommended Products
        </h2>
        <p className="text-[10px] text-gray-500 mb-2">
          Affiliate links — they helps keep this site running
        </p>
      </div>

      {monitors.length > 0 && (
        <div className="mb-6">
          {monitors.map((section) => (
            <ProductSectionComponent key={section.title} section={section} />
          ))}
        </div>
      )}

      {tvs.length > 0 && (
        <div className="mb-4">
          {tvs.map((section) => (
            <ProductSectionComponent key={section.title} section={section} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductSectionComponent({ section }: { section: EnrichedProductSection }) {
  const productsToShow = section.products;

  // Get primary display color for styling
  const primaryDisplay = section.matchingDisplays[0];
  const borderColor = primaryDisplay?.color.background || "#570df8"; // fallback to primary

  return (
    <div className="mb-10">
      {/* Header with display associations */}
      <div className="mb-3">
        {/* Display indicators */}
        {section.matchingDisplays.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {section.matchingDisplays.map((display) => (
              <div
                key={display.id}
                className="px-3 py-1.5 rounded font-medium text-xs"
                style={{
                  backgroundColor: display.color.background,
                  color: display.color.text
                }}
              >
                {display.name}
              </div>
            ))}
          </div>
        )}

        {/* Section title */}
        <h4
          className="text-base font-bold capitalize text-gray-900 pl-2 border-l-4"
          style={{ borderColor }}
        >
          {section.title}
        </h4>
      </div>
      <div className="space-y-3">
        {productsToShow.map((product, index) => (
          <a
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block card bg-white hover:bg-base-50 transition-all duration-300 p-3 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200 hover:border-primary/50"
          >
            <div className="card-body p-0">
              <div className="mb-1">
                <StarRating rating={product.rating} size="sm" />
              </div>
              <h5 className="font-semibold text-xs mb-1 text-gray-800 line-clamp-2">
                {product.name}
              </h5>
              <div className="flex items-center justify-between mb-1">
                <div className="text-lg font-bold text-gray-900">
                  {product.price}
                </div>
                <span className="inline-flex items-center gap-1 text-gray-500 text-xs font-medium">
                  View Product
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
