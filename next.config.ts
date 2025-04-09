import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["openweathermap.org"],
  },
  env: {
    OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY,
    OPENWEATHERMAP_BASE_URL: process.env.OPENWEATHERMAP_BASE_URL
  }
};

export default nextConfig;
