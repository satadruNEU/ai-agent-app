import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Beautiful Designs | Aura",
  description: "Generate beautiful designs in seconds using AI. Create web designs, mobile UI, animations and export to HTML or Figma.",
  keywords: "design generator, AI design, web design, HTML generator, Figma export",
  authors: [{ name: "Aura" }],
  openGraph: {
    type: "website",
    title: "Create Beautiful Designs | Aura",
    description: "Generate beautiful designs in seconds using AI. Create web designs, mobile UI, animations and export to HTML or Figma.",
    url: "https://www.aura.build/",
    images: [
      {
        url: "https://www.aura.build/screenshot02.jpg",
        width: 800,
        height: 600,
        alt: "Create Beautiful Designs | Aura preview",
      },
    ],
    siteName: "Aura",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mengto",
    title: "Create Beautiful Designs | Aura",
    description: "Generate beautiful designs in seconds using AI. Create web designs, mobile UI, animations and export to HTML or Figma.",
    images: ["https://www.aura.build/screenshot02.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#000000",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Aura",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ "--syntax-bg": "rgb(23, 23, 23)", "--syntax-color": "rgb(245, 245, 245)" } as React.CSSProperties}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-aura.svg" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}