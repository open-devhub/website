export type RepoType = Partial<{
  repo: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  tags: string[];
  contributors: { login: string; avatar: string }[];
}>;

type SearchedItem = {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
};

type Contributor = {
  login: string;
  avatar_url: string;
};

// fallback repo list of fetching from github fails for some reason
const fallbackRepos: RepoType[] = [
  {
    repo: "quillbot",
    description:
      "Advanced Discord developer assistant for coding, debugging, AI help, documentation lookup, and developer utilities",
    stars: 16,
    forks: 3,
    language: "TypeScript",
    tags: [
      "bot",
      "compile",
      "compiler",
      "devhub",
      "discord",
      "discord-bot",
      "discored-js",
      "djs",
      "dvh",
      "javascript",
      "js",
      "math",
      "nodejs",
      "quill",
    ],
    contributors: [
      {
        login: "calebephrem",
        avatar: "https://avatars.githubusercontent.com/u/211212128?s=64&v=4",
      },
      {
        login: "joshdegr8",
        avatar: "https://avatars.githubusercontent.com/u/237527158?s=64&v=4",
      },
      {
        login: "louiszn",
        avatar: "https://avatars.githubusercontent.com/u/159800966?s=64&v=4",
      },
      {
        login: "SkullVension",
        avatar: "https://avatars.githubusercontent.com/u/251445068?s=64&v=4",
      },
      {
        login: "gitcommit90",
        avatar: "https://avatars.githubusercontent.com/u/294273268?s=64&v=4",
      },
    ],
  },
  {
    repo: "pandabot",
    description:
      "General purpose Discord bot powering the DevHub Discord community",
    stars: 7,
    forks: 7,
    language: "JavaScript",
    tags: [
      "automod",
      "bot",
      "devhub",
      "discord",
      "discord-bot",
      "discord-js",
      "discordjs",
      "djs",
      "dvh",
      "javascript",
      "moderation",
      "nodejs",
      "panda",
      "panda-bot",
      "pandabot",
      "utility",
      "utility-bot",
    ],
    contributors: [
      {
        login: "calebephrem",
        avatar: "https://avatars.githubusercontent.com/u/211212128?s=64&v=4",
      },
      {
        login: "SkullVension",
        avatar: "https://avatars.githubusercontent.com/u/251445068?s=64&v=4",
      },
      {
        login: "joshdegr8",
        avatar: "https://avatars.githubusercontent.com/u/237527158?s=64&v=4",
      },
      {
        login: "goldstac",
        avatar: "https://avatars.githubusercontent.com/u/172457372?s=64&v=4",
      },
      {
        login: "Jah-yee",
        avatar: "https://avatars.githubusercontent.com/u/166608075?s=64&v=4",
      },
      {
        login: "anshumanjadiya1102",
        avatar: "https://avatars.githubusercontent.com/u/225169841?s=64&v=4",
      },
    ],
  },
  {
    repo: "chorddb",
    description:
      "A lightweight, simple Database like MongoDB which uses Discord as storage.",
    stars: 6,
    forks: 1,
    language: "TypeScript",
    tags: [
      "chord",
      "chorddb",
      "database",
      "db",
      "devhub",
      "discord",
      "discord-database",
      "discord-js",
      "discordjs",
      "djs",
      "dvh",
      "javascript",
      "mongodb",
      "nodejs",
      "non-relational-database",
      "sql",
      "typescript",
    ],
    contributors: [
      {
        login: "imiakk",
        avatar: "https://avatars.githubusercontent.com/u/174766256?s=64&v=4",
      },
      {
        login: "calebephrem",
        avatar: "https://avatars.githubusercontent.com/u/211212128?s=64&v=4",
      },
      {
        login: "louiszn",
        avatar: "https://avatars.githubusercontent.com/u/159800966?s=64&v=4",
      },
      {
        login: "joshdegr8",
        avatar: "https://avatars.githubusercontent.com/u/237527158?s=64&v=4",
      },
    ],
  },
  {
    repo: "devhub-bot",
    description: "GitHub App for DevHub Organization",
    stars: 6,
    forks: 3,
    language: "TypeScript",
    tags: [
      "app",
      "bot",
      "dev",
      "devhub",
      "devhub-bot",
      "dvh",
      "github",
      "github-app",
      "github-bot",
      "workflows",
    ],
    contributors: [
      {
        login: "calebephrem",
        avatar: "https://avatars.githubusercontent.com/u/211212128?s=64&v=4",
      },
      {
        login: "joshdegr8",
        avatar: "https://avatars.githubusercontent.com/u/237527158?s=64&v=4",
      },
      {
        login: "FerasMo7ammad",
        avatar: "https://avatars.githubusercontent.com/u/153855515?s=64&v=4",
      },
    ],
  },
  {
    repo: "hangmanbot",
    description: "Play the classic hangman game in DevHub!",
    stars: 6,
    forks: 0,
    language: "JavaScript",
    tags: [
      "bot",
      "devhub",
      "discord",
      "discord-bot",
      "discord-js",
      "djs",
      "dvh",
      "game",
      "hangman",
      "javascript",
      "nodejs",
    ],
    contributors: [
      {
        login: "calebephrem",
        avatar: "https://avatars.githubusercontent.com/u/211212128?s=64&v=4",
      },
    ],
  },
  {
    repo: "website",
    description: "The official website for the DevHub developer community",
    stars: 5,
    forks: 8,
    language: "TypeScript",
    tags: [
      "devhub",
      "discord",
      "docs",
      "dvh",
      "dvx",
      "nextjs",
      "nodejs",
      "react",
      "references",
      "site",
      "tailwind",
      "typescript",
      "ui",
      "website",
    ],
    contributors: [
      {
        login: "calebephrem",
        avatar: "https://avatars.githubusercontent.com/u/211212128?s=64&v=4",
      },
      {
        login: "AdityaKodez",
        avatar: "https://avatars.githubusercontent.com/u/91722397?s=64&v=4",
      },
      {
        login: "Tanvi-Kuwar",
        avatar: "https://avatars.githubusercontent.com/u/167565054?s=64&v=4",
      },
      {
        login: "Shamanth-Kumar-K",
        avatar: "https://avatars.githubusercontent.com/u/149099070?s=64&v=4",
      },
      {
        login: "aniKet0753",
        avatar: "https://avatars.githubusercontent.com/u/176029161?s=64&v=4",
      },
      {
        login: "SkullVension",
        avatar: "https://avatars.githubusercontent.com/u/251445068?s=64&v=4",
      },
      {
        login: "Lochana02",
        avatar: "https://avatars.githubusercontent.com/u/214314339?s=64&v=4",
      },
      {
        login: "pollychen-lab",
        avatar: "https://avatars.githubusercontent.com/u/265131177?s=64&v=4",
      },
    ],
  },
];

export async function getRepos(): Promise<RepoType[]> {
  // return fallbackRepos;
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "DevHub-Website",
    };

    const res = await fetch(
      `https://api.github.com/search/repositories?q=org:open-devhub&sort=stars&order=desc&per_page=6`,
      // cache it for 259200 secs (3 days) in vercel's cdn cache (.next/dev/cache/fetch-cache if local)
      { headers, cache: "force-cache", next: { revalidate: 259200 } },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch repos: ${res.statusText}`);
    }

    const searchData: { items?: SearchedItem[] } = await res.json();
    const rawItems = searchData.items ?? [];

    if (!rawItems.length) {
      return fallbackRepos;
    }

    const data: RepoType[] = await Promise.all(
      rawItems.map(async (item) => {
        let contributors: { login: string; avatar: string }[] = [];

        try {
          const contribRes = await fetch(
            `https://api.github.com/repos/open-devhub/${item.name}/contributors?per_page=10`,
            // same caching here as before
            { headers, cache: "force-cache", next: { revalidate: 259200 } },
          );

          if (contribRes.ok) {
            const contribData: Contributor[] = await contribRes.json();
            contributors = contribData
              // filter out apps/bot accounts
              .filter(
                (c) => !c.login.endsWith("[bot]") && !["v0"].includes(c.login),
              )
              .map((c) => ({
                login: c.login,
                avatar: c.avatar_url,
              }));
          } else {
            // if fetch is a fail, try to find the contributors list in `fallbackRepos`
            const found = fallbackRepos.find((repo) => repo.repo === item.name);

            if (found && found.contributors) {
              contributors = found.contributors.map((c) => ({
                login: c.login,
                avatar: c.avatar,
              }));
            }
          }
        } catch {
          contributors = [];
        }

        return {
          repo: item.name,
          description: item.description ?? undefined,
          stars: item.stargazers_count,
          forks: item.forks_count,
          language: item.language ?? undefined,
          tags: item.topics,
          contributors,
        };
      }),
    );

    return data || fallbackRepos;
  } catch (err) {
    console.error(err);
    return fallbackRepos;
  }
}
