import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devhub.vercel.app"),
  title: "DevHub | Code. Create. Collaborate.",
  description:
    "A collaborative Discord community for developers and creators. Build projects, get help, share feedback, and find your people.",
  openGraph: {
    title: "DevHub | Code. Create. Collaborate.",
    description:
      "A collaborative Discord community for developers and creators.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${pixelifySans.variable}`}
    >
      <body className="bg-[#030305] text-[#c4c4cc]" cz-shortcut-listen="true">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
