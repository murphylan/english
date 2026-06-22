import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯客户端 SPA（无 API 路由 / server action / 动态 SSR），导出为静态站点，
  // 由入口机 A 的 Nginx 直接托管，不再常驻 Node 进程。
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
