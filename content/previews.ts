import type { PreviewData } from "@/components/LinkPreviewCard";
import { articles, getArticle } from "@/content/articles-loader";
import { getPage, pages } from "@/content/pages-loader";
import { rules } from "@/content/rules";
import data from "@/lib/staticdata.config";

const { members } = data;

const COMMON_IMAGES = {
  devhub:
    "https://raw.githubusercontent.com/open-devhub/.github/refs/heads/main/assets/icon_darker.png",
  github: "https://avatars.githubusercontent.com/u/258732051?s=280&v=4",
  wikipedia: "https://en.wikipedia.org/static/favicon/wikipedia.ico",
  stackOverflow:
    "https://stackoverflow.com/Content/Sites/stackoverflow/Img/favicon.ico?v=562fb39d93c8",
};

const HARDCODED_PREVIEWS: Record<string, PreviewData> = {
  // General
  "/join": {
    title: "Join DevHub",
    description: `Join ${members}+ developers who build together, learn together, and ship together.`,
    image: COMMON_IMAGES.devhub,
  },
  "/discord": {
    title: "Join DevHub",
    description: `Join ${members}+ developers who build together, learn together, and ship together.`,
    image: COMMON_IMAGES.devhub,
  },
  "/github": {
    title: "Open DevHub",
    description:
      "A hub for developers and creators to build projects, share feedback, and grow together.",
    image: COMMON_IMAGES.github,
  },
  "/quill": {
    title: "Quill Bot",
    description:
      "Advanced Discord developer assistant for coding, debugging, AI help, documentation lookup, and developer utilities",
    image:
      "https://raw.githubusercontent.com/open-devhub/quillbot/refs/heads/main/assets/icon.png",
  },
  "https://discord.com": {
    title: "Discord",
    description:
      "Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.",
    image:
      "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/665643dd8c7ac752237b5cef_Discord-OG-1200x630.jpg",
  },
  "https://appeal.gg/s/1429026875946172459": {
    title: "Appeal",
    description:
      "Submit an application to appeal your punishments in the DevHub Discord server.",
    image: "https://appeal.gg/assets/branding/logo.svg?t=1783699979512",
  },
  "https://theprogrammershangout.com": {
    title: "The Programmers Hangout",
    description:
      "The Programmer's Hangout (TPH) is a discord community geared towards programming. The use of the word \"geared\" here is important because more accurately it's a discord for programmers of all kinds. If you're a green noob with 5 lines of code under your belt, or if you're a veteran with 15 years of industry experience, TPH has a place for you.",
    image:
      "https://theprogrammershangout.com/favicon-32x32.png?v=24d4e15abfd3bdcb306d3cb2d344aa67",
  },
  "https://thecodeversehub.tech": {
    title: "The CodeVerse Hub",
    description:
      "The Codeverse Hub is a developer community and open-source organization. We build real projects, review each other's code, and help developers grow — from first commit to production maintainer.",
    image:
      "https://cdn.discordapp.com/icons/1263067254153805905/be135eaf9deb55ef9a4c0b52648de511.webp?size=96&quality=lossless",
  },

  // GitHub
  "/r/website": {
    title: "Website",
    description: "The official website for the DevHub developer community",
    image: COMMON_IMAGES.github,
  },
  "/r/chorddb": {
    title: "ChordDB",
    description:
      "A lightweight, simple Database like MongoDB which uses Discord as storage.",
    image: COMMON_IMAGES.github,
  },
  "https://www.conventionalcommits.org/en/v1.0.0/": {
    title: "Conventional Commits",
    description: "Commit message convention and the tools to enforce it.",
    image: "https://avatars.githubusercontent.com/u/42154238?s=200&v=4",
  },

  // Wikipedia
  "https://en.wikipedia.org/wiki/Syntax_highlighting": {
    title: "Syntax Highlighting",
    description:
      "Syntax highlighting is a feature of text editors that is used for programming, scripting, or markup languages, such as HTML. The feature displays text, especially source code, in different colours and fonts according to the category of terms.",
    image: COMMON_IMAGES.wikipedia,
  },
  "https://en.wikipedia.org/wiki/Stack_trace": {
    title: "Stack Trace",
    description:
      "Programmers commonly use stack tracing during interactive and post-mortem debugging. End-users may see a stack trace displayed as part of an error message, which the user can then report to a programmer.",
    image: COMMON_IMAGES.wikipedia,
  },

  // Stack Overflow
  "https://stackoverflow.com/help/minimal-reproducible-example": {
    title: "MCVE",
    description:
      "When asking a debugging question, people will be better able to provide help if you provide code as text in your question that prospective answerers can easily understand and use to reproduce the problem.",
    image: COMMON_IMAGES.stackOverflow,
  },
};

const DEFAULT_PAGE_IMAGE =
  "https://raw.githubusercontent.com/open-devhub/.github/refs/heads/main/assets/icon.png";

function buildPagePreviews(): Record<string, PreviewData> {
  const entries: Record<string, PreviewData> = {};

  for (const page of pages) {
    const resolvedPage = getPage(page.slug);
    const url = `/pages/${page.slug}`;
    entries[url] = {
      title: resolvedPage?.title ?? page.title,
      description: resolvedPage?.description ?? page.description ?? null,
      image: DEFAULT_PAGE_IMAGE,
    };
  }

  for (const article of articles) {
    const resolvedArticle = getArticle(article.slug);
    const url = `/articles/${article.slug}`;
    entries[url] = {
      title: resolvedArticle?.title ?? article.title,
      description: resolvedArticle?.description ?? article.description ?? null,
      image: DEFAULT_PAGE_IMAGE,
    };
  }

  for (const rule of rules) {
    const url = `/rules#${rule.number}`;
    entries[url] = {
      title: rule.title,
      description: rule.description,
      image: DEFAULT_PAGE_IMAGE,
    };
  }

  return entries;
}

export const PREVIEWS: Record<string, PreviewData> = {
  ...buildPagePreviews(),
  ...HARDCODED_PREVIEWS,
};
