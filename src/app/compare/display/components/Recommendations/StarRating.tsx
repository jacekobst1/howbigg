import React, { useId } from "react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
}

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const gradientId = useId();
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className={`${starSize} fill-current text-yellow-500`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className={`${starSize} text-yellow-500`} viewBox="0 0 20 20">
          <defs>
            <linearGradient id={gradientId}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#${gradientId})`}
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className={`${starSize} fill-current text-gray-400`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className={`ml-1 ${textSize} font-medium`}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
