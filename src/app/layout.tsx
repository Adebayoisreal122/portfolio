import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Isrealight Tech — Smart Web Solutions For Your Business",
  description:
    "We build powerful, professional, and results-driven web solutions. Business websites, e-commerce platforms, custom web applications, and more.",
  keywords: [
    "web development Nigeria",
    "Next.js developer",
    "React developer",
    "e-commerce website",
    "business website",
    "Isrealight Tech",
  ],
  authors: [{ name: "Isrealight Tech" }],
  openGraph: {
    title: "Isrealight Tech — Smart Web Solutions For Your Business",
    description: "We build powerful, professional, and results-driven web solutions.",
    type: "website",
  },
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
