import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? "." : "", // 반드시 끝에 슬래시
};

export default withMDX(nextConfig);
