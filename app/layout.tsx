import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="bg-[#050508] text-[#f0f0f0]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
