import "./style.css";
import React from "react";
import Comparison from "./components/Comparison";
import BlogColumn from "@/components/shared/BlogColumn";

export default function CompareDisplayPage() {
  return (
    <div className="compare-layout__container layout-xl">
      <section className="compare-layout__left-section" />
      <section className="compare-layout__center-section">
        <Comparison />
      </section>
      <section className="compare-layout__right-section">
        <BlogColumn />
      </section>
    </div>
  );
}
