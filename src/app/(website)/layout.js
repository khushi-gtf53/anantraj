import { Geist, Geist_Mono } from "next/font/google";
import HtmlSanitizer from "@/src/website/components/common/HtmlSanitizer";
import Header from "@/src/website/components/common/Header";
import Footer from "@/src/website/components/common/Footer";

import "../globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page metadata (can override in individual pages too)
export const metadata = {
  title: "My Website",
  description: "Awesome website built with Next.js",
};

export default function WebsiteLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
    >
      {/* Optional: sanitizer for injected HTML */}
      <HtmlSanitizer />

      {/* Global header */}
      <Header />

      {/* Main content grows to fill space */}
      <main className="flex-1">{children}</main>

      {/* Global footer */}
      <Footer />
    </div>
  );
}
