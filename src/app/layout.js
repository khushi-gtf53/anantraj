// src/app/layout.js
import "./globals.css";


export const metadata = {
  title: "Annat Raj",
  description: "Annat Raj",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
