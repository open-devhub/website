import data from "./staticdata";
const { invite, github } = data;

type RedirectType = { sources: string[]; destination: string };

const redirectConfig: RedirectType[] = [
  // site
  {
    sources: ["/blog"],
    destination: "/articles",
  },
  {
    sources: ["/blog/:path*"],
    destination: "/articles/:path*",
  },

  // Discord
  {
    sources: ["/join", "/invite", "/discord", "/chat"],
    destination: invite,
  },

  // GitHub
  {
    sources: ["/github", "/org", "/gh"],
    destination: github,
  },
  {
    sources: ["/repos", "/repositories"],
    destination: "https://github.com/orgs/open-devhub/repositories",
  },
  {
    sources: ["/repo/:repo", "/r/:repo"],
    destination: "https://github.com/open-devhub/:repo*",
  },
  {
    sources: ["/discussions"],
    destination: "https://github.com/orgs/open-devhub/discussions",
  },
];

export default redirectConfig;
