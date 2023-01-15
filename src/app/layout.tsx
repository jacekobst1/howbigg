import "./globals.css";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="myTheme">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
