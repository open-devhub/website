import { partner as partnerColors } from "@/lib/colors";

export type Partner = {
  code: string;
  tags?: string[];
  websiteUrl?: string;
  githubUrl?: string;

  // Optional fallback if Discord has no banner
  banner?: string;
};

export const partners: Partner[] = [
  {
    code: "3xKFvKhuGR",
    websiteUrl: "https://thecodeversehub.tech",
    githubUrl: "https://github.com/TheCodeVerseHub",
  },
  {
    code: "F6Z27BMBhE",
  },
  {
    code: "BGrCXccWDa",
    banner: partnerColors.bannerBrown,
    githubUrl: "https://github.com/drive-for-java",
  },
];
