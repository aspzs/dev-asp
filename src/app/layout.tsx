import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable : "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio - DEV",
  description: "Portfolio para desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-50 min-h-screen font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  );
}
