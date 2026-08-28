import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import { Theme } from "@/components/site/Theme";
import { Analytics } from "@vercel/analytics/next";
import ReactLenis from "lenis/react";
import { Bricolage_Grotesque, Fira_Code, Inter } from "next/font/google";
import "./globals.css";
export { metadata } from "@/lib/metadata";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${fira.variable}`}
    >
      <body className="antialiased">
        <ReactLenis root options={{ autoRaf: true }}>
          <Theme />
          <Header />
          {/*<main className="pt-8 min-h-screen">Test page</main>*/}
          <main className="pt-8 min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </ReactLenis>
      </body>
    </html>
  );
}
