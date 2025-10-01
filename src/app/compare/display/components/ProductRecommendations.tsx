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
  variant?: "full" | "compact";
}

export default function ProductRecommendations({
  displays,
  variant = "full",
}: ProductRecommendationsProps) {
  if (!hasValidDisplay(displays)) {
    return null;
  }

  const relevantSections = filterRelevantProducts(displays);

  if (relevantSections.length === 0) {
    return null;
  }

  const { monitors, tvs } = groupSectionsByType(relevantSections);
  const isCompact = variant === "compact";

  return (
    <div className={isCompact ? "space-y-4" : "mt-16 bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-6 md:p-8 shadow-lg"}>
      <div className={isCompact ? "mb-4" : "text-center mb-8"}>
        <h2 className={isCompact ? "text-xl font-bold text-gray-900" : "text-3xl md:text-4xl font-bold mb-2 text-gray-900"}>
          Recommended Products
        </h2>
        {isCompact && (
          <p className="text-[10px] text-gray-500 mb-2">
            Affiliate links — your support helps keep this site running
          </p>
        )}
        {!isCompact && (
          <>
            <p className="text-sm text-gray-700 font-medium">
              Curated selections based on your display preferences
            </p>
            <p className="text-xs text-gray-400 italic font-light mt-2">
              These are affiliate links — they help keep this site running
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          </>
        )}
      </div>

      {monitors.length > 0 && (
        <div className={isCompact ? "mb-6" : "mb-10"}>
          {!isCompact && (
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/20">
              <span className="text-3xl">🖥️</span>
              <h3 className="text-2xl font-bold text-gray-800">Monitors</h3>
            </div>
          )}
          {monitors.map((section) => (
            <ProductSectionComponent key={section.title} section={section} isCompact={isCompact} />
          ))}
        </div>
      )}

      {tvs.length > 0 && (
        <div className={isCompact ? "mb-4" : "mb-6"}>
          {!isCompact && (
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-secondary/20">
              <span className="text-3xl">📺</span>
              <h3 className="text-2xl font-bold text-gray-800">TVs</h3>
            </div>
          )}
          {tvs.map((section) => (
            <ProductSectionComponent key={section.title} section={section} isCompact={isCompact} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductSectionComponent({ section, isCompact = false }: { section: EnrichedProductSection; isCompact?: boolean }) {
  const productsToShow = section.products;

  // Get primary display color for styling
  const primaryDisplay = section.matchingDisplays[0];
  const borderColor = primaryDisplay?.color.background || "#570df8"; // fallback to primary

  return (
    <div className={isCompact ? "mb-10" : "mb-8"}>
      {/* Header with display associations */}
      <div className={isCompact ? "mb-3" : "mb-4"}>
        {/* Display indicators */}
        {section.matchingDisplays.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {section.matchingDisplays.map((display) => (
              <div
                key={display.id}
                className={isCompact
                  ? "px-3 py-1.5 rounded font-medium text-xs"
                  : "px-3 py-1.5 rounded font-medium text-sm"
                }
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
          className={isCompact
            ? "text-base font-bold capitalize text-gray-900 pl-2 border-l-4"
            : "text-lg font-semibold capitalize text-gray-700 pl-2 border-l-4"
          }
          style={{ borderColor }}
        >
          {section.title}
        </h4>
      </div>
      <div className={isCompact ? "space-y-3" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
        {productsToShow.map((product, index) => (
          <a
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={isCompact
              ? "block card bg-white hover:bg-base-50 transition-all duration-300 p-3 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200 hover:border-primary/50"
              : "group relative card bg-white hover:bg-base-50 transition-all duration-300 p-5 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 border border-gray-200 hover:border-primary/50"
            }
          >
            {!isCompact && product.rating >= 4.7 && (
              <div className="absolute top-3 right-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </div>
            )}
            <div className="card-body p-0">
              <div className={isCompact ? "mb-1" : "mb-3 bg-yellow-50 rounded-lg p-2 inline-block w-fit"}>
                <StarRating rating={product.rating} size={isCompact ? "sm" : "md"} />
              </div>
              <h5 className={isCompact
                ? "font-semibold text-xs mb-1 text-gray-800 line-clamp-2"
                : "font-semibold text-base mb-3 text-gray-800 group-hover:text-primary transition-colors line-clamp-2"
              }>
                {product.name}
              </h5>
              {isCompact ? (
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
              ) : (
                <>
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2 mb-3">
                    <p>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Size: {product.size}" | Resolution: {product.resolution}
                    </p>
                  </div>
                  <div className="mt-auto pt-2 border-t border-gray-200">
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      View Product
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
