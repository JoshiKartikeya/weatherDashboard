import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY || "",
  },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["openweathermap.org"],
  },
};

export default nextConfig;
