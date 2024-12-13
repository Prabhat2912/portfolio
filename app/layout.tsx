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
  metadataBase: new URL(
    "https://portfolio-prabhat-kumars-projects.vercel.app/"
  ),
  openGraph: {
    title: title,
    description: description,
    url: domain,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${sora.className}  antialiased`}>
        <Toaster richColors position="bottom-right" />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
