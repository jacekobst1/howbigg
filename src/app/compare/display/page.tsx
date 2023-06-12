import "./style.css";
import React from "react";
import Comparison from "./components/Comparison";

export default function CompareDisplayPage() {
  return (
    <div className="compare-layout__container layout-xl">
      <section className="compare-layout__section compare-layout__left-section" />
      <section className="compare-layout__section compare-layout__center-section">
        <Comparison />
      </section>
      <section className="compare-layout__section compare-layout__right-section"></section>
    </div>
  );
}
