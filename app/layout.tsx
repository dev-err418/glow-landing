import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const uncutSans = localFont({
  src: "../public/fonts/uncut-sans.ttf",
  variable: "--font-uncut-sans",
});

export const metadata: Metadata = {
  title: "Glow - Your pocket companion",
  description: "Daily warmth when everything feels cold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${uncutSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
