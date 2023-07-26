interface Config {
  fullUrl: string;
  shortUrl: string;
  gtag: string;
}

const config: Config = {
  fullUrl: process.env.FULL_URL || "https://howbigg.com",
  shortUrl: process.env.SHORT_URL || "howbigg.com",
  gtag: process.env.GTAG || "",
};

export default config;
