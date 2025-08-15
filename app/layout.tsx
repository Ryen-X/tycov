import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TYCOV | Blink Studios",
  description: "Real Eyes Realize Real Lies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex, nofollow" />
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <main className="px-4 md:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
