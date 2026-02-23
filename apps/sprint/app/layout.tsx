import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Sheriax Sprint Studio — AI Automation Sprints for Agencies',
    template: '%s | Sprint Studio'
  },
  description: 'Fixed-scope AI automation sprints. Automate your agency workflows in 2 weeks. Starting at ₹1,50,000.',
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
