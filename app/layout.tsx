import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

import localFont from "next/font/local";
import { ReactNode } from "react";
import { auth } from "@/auth";

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

const RootLayout = async ( {children} : {children: ReactNode;}) => {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}

          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;
