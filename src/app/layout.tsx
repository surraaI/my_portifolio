// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

const title = "Sura Itana | Full-Stack Engineer and CTO";
const description =
  "Sura Itana is a software engineer and CTO at Yeneb who owns products end to end: FastAPI and Node.js backends on PostgreSQL and PostGIS, Next.js web apps, and Flutter mobile apps.";

export const metadata: Metadata = {
  // Makes Open Graph image URLs absolute; override with NEXT_PUBLIC_SITE_URL if the domain changes
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portifolio-six-blush.vercel.app"
  ),
  title: {
    default: title,
    template: "%s | Sura Itana",
  },
  description,
  authors: [{ name: "Sura Itana" }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Sura Itana",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAECF0" },
    { media: "(prefers-color-scheme: dark)", color: "#070D11" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Header />
          <main id="main" className="w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
