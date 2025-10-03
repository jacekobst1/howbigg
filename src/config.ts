interface Config {
  fullUrl: string;
  shortUrl: string;
  nextPublicPosthogKey: string;
  nextPublicPosthogHost: string;
}

const config: Config = {
  fullUrl: process.env.FULL_URL || "https://howbigg.com",
  shortUrl: process.env.SHORT_URL || "howbigg.com",
  nextPublicPosthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY || "",
  nextPublicPosthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || "",
};

export default config;
