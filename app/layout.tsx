import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "IT英语",
  title: "IT英语记忆训练器",
  description: "基于 1000 个技术英语词条的主题化学习与复习应用",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icons/app-icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        url: "/icons/app-icon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "IT英语",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
