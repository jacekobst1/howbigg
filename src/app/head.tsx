import React from "react";

export default function Head() {
  const meta = {
    title: "How big is your display",
    siteName: "Howbigg",
    description: "Compare size of displays",
    url: "https://howbigg.com",
    type: "website",
    robots: "follow, index",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.type} />

      {/* Twitter */}
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<"link">> = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  { rel: "manifest", href: "/favicon/site.webmanifest" },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#6366f1",
  },
  { rel: "shortcut icon", href: "/favicon/favicon.ico" },
];
