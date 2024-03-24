"use client";

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function GoogleAdsense() {
  return <Script
    async
    strategy="lazyOnload"
    crossOrigin="anonymous"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372955055190705"
  />
}
