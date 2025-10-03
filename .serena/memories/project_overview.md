# Project Overview

## Purpose

Howbigg is a Next.js 13 application for comparing display sizes (monitors, TVs, phones, tablets, etc.) with visual side-by-side comparisons and detailed technical calculations. The app also includes an educational blog about display technology.

## Key Features

1. **Display Comparison Tool**: Visual comparison of up to 6 displays simultaneously with real-time calculations for PPI, optimal viewing distance, and physical dimensions
2. **URL-Based State**: All display configurations are URL-encoded for easy sharing
3. **Blog System**: Markdown-based educational content about display technology
4. **Custom Aspect Ratios**: Support for standard and custom aspect ratios
5. **Responsive Design**: Three-column layout with mobile support

## Tech Stack

- **Framework**: Next.js 13 with App Router (not Pages Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS + DaisyUI component library
- **State Management**: React hooks + custom `useQueryState` hook for URL synchronization
- **Blog**: Markdown files with gray-matter frontmatter parsing
- **Analytics**: PostHog + Vercel Analytics
- **Package Manager**: npm (package.json present)

## Target Audience

Users comparing displays before purchase, tech enthusiasts, and people interested in display technology education.
