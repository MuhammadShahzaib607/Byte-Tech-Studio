import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byte Tech Studio | MERN Stack & AI Creative Services",
  description: "Professional MERN Stack Web Development, AI-Powered Applications, and Creative AI Services including AI Video Generation, AI Powered business chatbot, and Image Creation by Byte Digital Studio.",
  icons: {
    icon: [
      {
        url: "./logo.png"
      }
    ]
  },
  verification: {
    google: "9RKSte9mI5nLHZti7NKj-dT2zJz6G5Q5rPb4gmg-PSY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
