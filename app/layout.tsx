import type { Metadata } from "next";
import Navbar from '../components/navbar'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wht",
  description: "What da Hell is That",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-[28rem] my-[8rem]">
          <Navbar/>
          {children}
          </div></body>
    </html>
  );
}
