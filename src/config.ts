interface Config {
  fullUrl: string;
  shortUrl: string;
}

const config: Config = {
  fullUrl: process.env.FULL_URL || "https://howbigg.com",
  shortUrl: process.env.SHORT_URL || "howbigg.com",
};

export default config;
