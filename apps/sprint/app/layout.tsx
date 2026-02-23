import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sprint.sheriax.com'),
  title: {
    default: 'Sprint Studio — AI Automation Sprints',
    template: '%s | Sprint Studio'
  },
  description: 'Fixed-scope AI automation sprints. Automate your agency workflows in 2 weeks.',
  openGraph: {
    url: 'https://sprint.sheriax.com',
    siteName: 'Sheriax Sprint Studio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased grain`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
