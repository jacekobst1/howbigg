"use client";

import React from "react";
import Display from "@/app/compare/display/types/Display";
import {
  hasValidDisplay,
  filterRelevantProducts,
  groupSectionsByType,
} from "@/app/compare/display/utils/productRecommendationHelper";
import { ProductSection } from "@/data/productRecommendations";

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
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>

      {monitors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Monitors</h3>
          {monitors.map((section) => (
            <ProductSectionComponent key={section.title} section={section} />
          ))}
        </div>
      )}

      {tvs.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">TVs</h3>
          {tvs.map((section) => (
            <ProductSectionComponent key={section.title} section={section} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductSectionComponent({ section }: { section: ProductSection }) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-3 capitalize">{section.title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {section.products.map((product, index) => (
          <a
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="card bg-base-200 hover:bg-base-300 transition-colors duration-200 p-4"
          >
            <div className="card-body p-0">
              <h5 className="font-medium text-sm mb-2">{product.name}</h5>
              <div className="text-xs opacity-70">
                <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Size: {product.size}" | Resolution: {product.resolution}
                </p>
              </div>
              <div className="mt-2 text-primary text-xs font-semibold">
                View Product →
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
