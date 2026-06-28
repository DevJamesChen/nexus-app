import type { Metadata } from "next";
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
  title: "Nexus — AI knowledge management for teams",
  description:
    "Nexus turns your scattered docs, notes, and conversations into one searchable, AI-powered knowledge base. Ask a question, get a sourced answer.",
  metadataBase: new URL("https://nexus.app"),
  openGraph: {
    title: "Nexus — AI knowledge management for teams",
    description:
      "One searchable brain for your whole team. Ask a question, get a sourced answer in seconds.",
    type: "website",
    url: "https://nexus.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus — AI knowledge management for teams",
    description:
      "One searchable brain for your whole team. Ask a question, get a sourced answer in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
