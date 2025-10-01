"use client";

import React from "react";
import Display from "@/app/compare/display/types/Display";
import {
  hasValidDisplay,
  filterRelevantProducts,
  groupSectionsByType,
} from "@/app/compare/display/utils/productRecommendationHelper";
import { ProductSection } from "@/data/productRecommendations";
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
    <div className="mt-16 bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          💡 Recommended Products
        </h2>
        <p className="text-sm text-gray-700 font-medium">
          Curated selections based on your display preferences
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </div>

      {monitors.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/20">
            <span className="text-3xl">🖥️</span>
            <h3 className="text-2xl font-bold text-gray-800">Monitors</h3>
          </div>
          {monitors.map((section) => (
            <ProductSectionComponent key={section.title} section={section} />
          ))}
        </div>
      )}

      {tvs.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-secondary/20">
            <span className="text-3xl">📺</span>
            <h3 className="text-2xl font-bold text-gray-800">TVs</h3>
          </div>
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
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-4 capitalize text-gray-700 pl-2 border-l-4 border-primary">
        {section.title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.products.map((product, index) => (
          <a
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group relative card bg-white hover:bg-base-50 transition-all duration-300 p-5 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 border border-gray-200 hover:border-primary/50"
          >
            {product.rating >= 4.7 && (
              <div className="absolute top-3 right-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </div>
            )}
            <div className="card-body p-0">
              <div className="mb-3 bg-yellow-50 rounded-lg p-2 inline-block w-fit">
                <StarRating rating={product.rating} />
              </div>
              <h5 className="font-semibold text-base mb-3 text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h5>
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
