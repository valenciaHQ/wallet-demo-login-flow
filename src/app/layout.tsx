/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Wallet",
  description: "Nova Wallet | A simple wallet for your crypto needs",
  keywords: "Nova Wallet, crypto wallet, cryptocurrency, blockchain, web3",
  openGraph: {
    title: "Nova Wallet",
    description: "Nova Wallet | A simple wallet for your crypto needs",
    url: "https://wallet-demo-login-flow.vercel.app/", // Replace with your domain
    type: "website",
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
        <Toaster richColors />
        <main>{children}</main>
      </body>
    </html>
  );
}
