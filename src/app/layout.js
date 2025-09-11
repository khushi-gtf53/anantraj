import { Geist, Geist_Mono } from "next/font/google";
import HtmlSanitizer from "@/src/components/common/HtmlSanitizer";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Website",
  metadataBase: new URL("https://anantrajlimited.netlify.app/"),
  description: "Awesome website built with Next.js",
};

export default function WebsiteLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex min-h-screen flex-col">
        <HtmlSanitizer />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
