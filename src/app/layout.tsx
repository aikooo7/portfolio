import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github } from "lucide-react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio",
  description: "This is where I will post and show my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-stone-700 text-white">
        <div className="h-screen">
          <nav>
            <div className="font-bold mx-2 absolute top-4">
              <Link
                href="/"
                className="float-left text-center py-2 px-4 text-xl"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="float-left text-center py-2 px-4 text-xl"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="float-left text-center py-2 px-4 text-xl"
              >
                Contact
              </Link>
            </div>
          </nav>
          {children}
          <SpeedInsights />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-3">
            <p className="flex items-center self-end flex-1 gap-2">
              Done by aikooo7
              <a href="https://github.com/aikooo7" target="_blank">
                <Github />
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
