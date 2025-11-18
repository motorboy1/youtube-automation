import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "25+ Tool Studio - YouTube Automation",
  description: "YouTube automation platform with 25+ tools built on Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
