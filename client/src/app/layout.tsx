import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "learning management",
  description: "learning management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div>
          <Navbar />
        </div>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <div className="mx-auto max-w-7xl">
          {children}
          <Toaster richColors />
        </div>
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}
