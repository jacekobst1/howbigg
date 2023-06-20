import React from "react";
import Comparison from "./components/Comparison";
import BlogColumn from "@/components/shared/BlogColumn/BlogColumn";
import QuickComparisons from "@/app/compare/display/components/QuickComparisons";

export default function CompareDisplayPage() {
  return (
    <div className="layout__container layout-xl">
      <section className="layout__left-section">
        <QuickComparisons />
      </section>
      <section className="layout__center-section">
        <Comparison />
      </section>
      <section className="layout__right-section">
        <BlogColumn limit={6} />
      </section>
    </div>
  );
}
