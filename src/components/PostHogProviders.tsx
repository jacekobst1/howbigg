// app/providers.tsx
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Config from "@/config";

if (typeof window !== "undefined") {
  posthog.init(Config.nextPublicPosthogKey, {
    api_host: Config.nextPublicPosthogHost,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function HogPageView(): React.ReactElement {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return <></>;
}

export function HogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
