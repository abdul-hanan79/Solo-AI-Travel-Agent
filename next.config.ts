import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Enables styled-components SSR support
  },
  reactStrictMode: true
};

module.exports = nextConfig;
