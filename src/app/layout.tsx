import { METADATA } from "@/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cascadiaCode = localFont({
  src: "../../public/assets/fonts/CascadiaCodeNF.woff2",
  variable: "--font-cascadia-code",
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
        className={`${geistSans.variable} ${geistMono.variable} ${cascadiaCode.className} antialiased flex flex-col`}
      >
        <div className="w-full max-w-3xl mx-auto px-4 pt-[10vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
