import "@/styles/globals.css";
import React, { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VercelAnalytics from "@/components/VercelAnalytics";
import ToastContainerWrapper from "@/components/ToastContainerWrapper";
import { Metadata } from "next";
import config from "@/config";
import { HogProvider, HogPageView } from "@/components/PostHogProviders";
import GoogleAdsense from "@/components/GoogleAdsense";

const title = {
  default: "Howbigg",
  template: "%s | Howbigg",
};
const description =
  "A tool to compare TVs and monitors of different sizes and aspect ratios! Calculate dimensions, PPI, optimal distance and see the differences live.";

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(config.fullUrl),
  alternates: {
    canonical: "/",
  },
  creator: "Jacek Obst",
  authors: [{ name: "Jacek Obst" }],
  publisher: "Howbigg",
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
      <body data-theme="mytheme" className="flex flex-col min-h-screen">
        <Header />
        <HogProvider>
          <main className="w-11/12 mx-auto grow">{children}</main>
        </HogProvider>
        <Footer />

        <VercelAnalytics />
        <GoogleAdsense />
        <Suspense>
          <HogPageView />
        </Suspense>

        <ToastContainerWrapper />
      </body>
    </html>
  );
}
