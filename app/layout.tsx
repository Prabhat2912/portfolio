import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const domain = process.env.NEXT_PUBLIC_BASE_URL || "";
const title = "Portfolio Website";
const description = "Portfolio Website by Prabhat Kumar";
export const metadata: Metadata = {
  title: title,
  description: description,
  manifest: "/manifest.json",
  metadataBase: new URL(
    "https://portfolio-prabhat-kumars-projects.vercel.app/"
  ),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: title,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: title,
    description: description,
    url: domain,
    type: "website",
    siteName: title,

    images: [
      {
        url: domain + "/opengraph-image.png",
        width: 800,
        height: 800,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: title,
      template: title,
    },
    images: [
      {
        url: domain + "/opengraph-image.png",
        alt: title,
      },
    ],
    description: description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${sora.className}  antialiased`}>
        <Toaster theme="dark" richColors position="bottom-right" />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
