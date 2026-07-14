import { partner as partnerColors } from "@/lib/colors";

export type Partner = {
  inviteCode: string;
  tags?: string[];
  websiteUrl?: string;
  githubUrl?: string;

  // Optional fallback if Discord has no banner
  banner?: string;
};

export const partners: Partner[] = [
  {
    inviteCode: "3xKFvKhuGR",
    tags: ["Coding", "Programming", "Developer", "Python", "Community"],
    websiteUrl: "https://thecodeversehub.tech",
    githubUrl: "https://github.com/TheCodeVerseHub",
  },
  {
    inviteCode: "F6Z27BMBhE",
    tags: [
      "Coding",
      "Programming",
      "Developing",
      "Games and fun",
      "Server Not Found",
    ],
  },
  {
    inviteCode: "BGrCXccWDa",
    banner: partnerColors.bannerBrown,
    tags: ["Javaceans", "Coding", "DEV Support"],
    githubUrl: "https://github.com/drive-for-java",
  },
];
