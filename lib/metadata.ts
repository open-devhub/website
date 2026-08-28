import type { Metadata } from "next";

// website metadata (SEO and OG)
export const metadata: Metadata = {
  // metadata
  metadataBase: new URL("https://devhub.vercel.app"),
  title: {
    default: "DevHub | Code. Create. Collaborate.",
    template: "%s | DevHub",
  },
  description:
    "A collaborative Discord community for developers and creators. Build projects, get help, share feedback, and find your people.",
  keywords: [
    "developer community",
    "coding discord",
    "open source",
    "developer collaboration",
    "code feedback",
    "pair programming",
  ],
  authors: [{ name: "Open DevHub Team" }],
  creator: "Open DevHub",
  publisher: "Open DevHub",

  // icons/logos
  icons: {
    icon: "https://raw.githubusercontent.com/open-devhub/.github/refs/heads/main/assets/icon_darker.png",
    shortcut:
      "https://raw.githubusercontent.com/open-devhub/.github/refs/heads/main/assets/icon_darker.png",
    apple:
      "https://raw.githubusercontent.com/open-devhub/.github/refs/heads/main/assets/icon_darker.png",
  },

  // open graph  (discord, facebook, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devhub.vercel.app",
    siteName: "DevHub",
    title: "DevHub | Code. Create. Collaborate.",
    description:
      "A collaborative Discord community for developers and creators. Build projects, get help, share feedback, and find your people.",
    images: [
      {
        url: "https://raw.githubusercontent.com/open-devhub/.github/main/assets/banner.png",
        width: 1200,
        height: 630,
        alt: "DevHub Community Banner",
      },
      {
        url: "https://raw.githubusercontent.com/open-devhub/.github/main/assets/org_icon.png",
        width: 500,
        height: 500,
        alt: "DevHub Organization Logo",
      },
    ],
  },

  // twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "DevHub | Code. Create. Collaborate.",
    description:
      "A collaborative Discord community for developers and creators. Build projects, get help, share feedback, and find your people.",
    images: [
      "https://raw.githubusercontent.com/open-devhub/.github/main/assets/banner.png",
    ],
  },

  // crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
