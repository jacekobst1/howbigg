import "@/styles/globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import ToastContainerWrapper from "@/components/ToastContainerWrapper";
import { Metadata } from "next";

const title = {
  default: "Howbigg",
  template: "%s | Howbigg",
};
const description =
  "Are you looking for a new monitor? Or perhaps a television set? Compare their sizes first to see which one will suit you better!";

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL("https://howbigg.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: title,
    description: description,
    url: "/",
    siteName: title.default,
    locale: "en-US",
    type: "website",
    // TODO: add images
    // images: [
    //   {
    //     url: "https://nextjs.org/og.png",
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
  twitter: {
    title: title,
    description: description,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
      url: "/favicon/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      url: "/favicon/safari-pinned-tab.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico",
      url: "/favicon/favicon.ico",
    },
  ],
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="myTheme">
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
