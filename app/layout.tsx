import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandPalette } from "@/components/command-palette";
import { ShortcutsManager } from "@/components/shortcuts-manager";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { SITE } from "@/Data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", weight: ["500", "600"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Full Stack Web Developer`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — Full Stack Web Developer`,
    description: SITE.description,
    url: SITE.url,
    type: "website",
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Full Stack Web Developer`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} ${hand.variable} font-sans antialiased`}>
        <Providers>
          <Toaster theme="system" richColors position="bottom-right" />
          <div id="top" />
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileBottomNav />
          <CommandPalette />
          <ShortcutsManager />
        </Providers>
      </body>
    </html>
  );
}
