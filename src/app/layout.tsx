import { METADATA } from "@/constants";
import type { Metadata } from "next";
import { Source_Sans_3, Geist } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.className} ${geistSans.variable} antialiased flex flex-col`}
      >
        <div className="w-full max-w-3xl mx-auto px-4 pt-[10vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
