import type { Metadata } from "next";
import { Zen_Maru_Gothic, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/content";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/components/modals/ModalProvider";

// ディスプレイ(見出し)用: 丸ゴシックでやわらかい印象
const display = Zen_Maru_Gothic({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// 本文用
const body = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${display.variable} ${body.variable}`}>
      <body className="grain min-h-screen">
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
