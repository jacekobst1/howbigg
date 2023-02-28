import "@/styles/globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import ToastContainerWrapper from "@/components/ToastContainerWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="myTheme">
      <head />
      <body
        data-theme="mytheme"
        className="flex flex-col min-h-screen bg-neutral"
      >
        <Header />
        <main className="layout grow">{children}</main>
        <Footer />
        <AnalyticsWrapper />
        <ToastContainerWrapper />
      </body>
    </html>
  );
}
