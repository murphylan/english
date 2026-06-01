import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IT英语记忆训练器",
    short_name: "IT英语",
    description: "基于 1000 个技术英语词条的主题化学习与复习应用",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ddf7cf",
    theme_color: "#14532d",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
