import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "技术英语记忆训练器",
  description: "基于 1000 个技术英语词条的主题化学习与复习应用",
  icons: {
    icon: "/favicon.svg",
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
