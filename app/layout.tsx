import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";

const fontHeading = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["700","100", "500", "400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hexbyete - The place where your ideas get into, reality.",
  description: "Transform ideas into scalable, secure, and intelligent solutions",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
