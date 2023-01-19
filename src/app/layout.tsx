import "@/styles/globals.css";
import React from "react";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="myTheme">
      <head />
      <body data-theme="mytheme" className="bg-neutral">
        <Header />
        <main className="layout">{children}</main>
      </body>
    </html>
  );
}
