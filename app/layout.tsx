import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devlixir - AI Software Engineering & Automation Studio",
  description:
    "Devlixir designs, builds, and maintains AI-powered software: practical AI integration, workflow automation, and modern web/mobile systems across Elixir/Phoenix, Go, MERN/MEAN, PHP/Laravel, React Native, and Python/Flask.",
  keywords: [
    "Devlixir",
    "AI Integration",
    "AI Automation",
    "Elixir",
    "Phoenix",
    "Go",
    "MERN",
    "MEAN",
    "Laravel",
    "React Native",
    "Software Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
