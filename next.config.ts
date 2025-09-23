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
  // 마크다운 및 MDX 파일을 포함하도록 `pageExtensions`를 구성합니다
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
  assetPrefix: isProd ? "." : "", // 반드시 끝에 슬래시
};

export default withMDX(nextConfig);
