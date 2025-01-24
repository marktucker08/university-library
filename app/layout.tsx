import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont( {
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: '/fonts/IBMPlexSans-Medium.ttf', weight: "500", style: 'normal' },
    { path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: "600", style: 'normal' },
    { path: '/fonts/IBMPlexSans-Bold.ttf', weight: "700", style: 'normal' },
  ],
});

const bebasNeue = localFont( {
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a book borrowing system",
};

const RootLayout = ( {children} : {children: ReactNode;}) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
