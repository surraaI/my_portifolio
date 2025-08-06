// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sura Itana | Full-Stack Developer",
  description: "Personal portfolio of Sura Itana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 overflow-x-hidden`}>
        <ThemeProvider>
          <Header />
          <main className="w-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}