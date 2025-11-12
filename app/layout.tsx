import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REZON - Engineering That Scales. Code That Performs.",
  description: "We architect real-time, fault-tolerant systems using Elixir. Also delivering MERN/MEAN, Laravel, and React Native solutions.",
  keywords: ["Elixir", "Phoenix", "MERN", "MEAN", "Laravel", "React Native", "Software Development"],
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
