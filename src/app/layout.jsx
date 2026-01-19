import { Geist, Geist_Mono } from "next/font/google";
import AppProviders from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Golden Apron",
  description: "Premium Restaurant Management System",
  icons: {
    icon: ["/favicon.svg", "/icon.svg"],
    shortcut: ["/favicon.svg", "/icon.svg"],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100 text-base-content`}
      >
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
