import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tobias Lins - Product Engineer",
  description:
    "Hi there! I'm Tobias Lins, a product engineer from Vienna, Austria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen" lang="en">
      <body className={clsx("h-screen")}>{children}</body>
    </html>
  );
}
