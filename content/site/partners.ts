export type Partner = {
  banner: string;
  name: string;
  description: string;
  url: string;
  featured?: boolean;
};

export const partners: Partner[] = [
  {
    banner:
      "https://cdn.discordapp.com/banners/1263067254153805905/de991d9f69f74d71d872c89bcc051750.png?size=1024",
    name: "The CodeVerse Hub",
    description:
      "A community for programmers, tech enthusiasts, gamers, and curious minds. Discuss technology, showcase projects, get help and connect with people from all skill levels. All programming languages and all experience levels are welcome.",
    url: "https://thecodeversehub.tech",
    featured: true,
  },
  {
    banner: "https://www.rixel.tech/announcements/Rixel.png",
    name: "Rixel",
    description:
      "Rixel scans your AI-generated app for the security mistakes that get founders burned—exposed secrets, disabled RLS, open API routes—and the design flaws that make it feel unfinished. Every fix explained in plain English.",
    url: "https://rixel.tech/",
  },
  {
    banner: "https://avatars.githubusercontent.com/u/227573720?s=200&v=4",
    name: "Drive-for-Java",
    description:
      "A global community dedicated to promoting, expanding, and establishing the realm of Java in the very heart of the coding world. Driven by innovation and collective expertise, we empower developers to build robust, scalable architectures that shape the future of modern technology.",
    url: "https://github.com/drive-for-java",
  },
  {
    banner:
      "https://cdn.discordapp.com/banners/1465754117879103736/03786f3a4a263c8856c2ded0622786fd.png?size=1024",
    name: "404 Server not Found",
    description:
      "Welcome to 404 SERVER NOT FOUND a fun, friendly, and welcoming place for coders, gamers, and anyone who love to chill and vibe! Share projects, learn coding, find teammate for games join events, laugh at memes, or just hang out with cool people. Active chats, helpful members, and good vibes await.",
    url: "https://discord.gg/F6Z27BMBhE",
  },
];
