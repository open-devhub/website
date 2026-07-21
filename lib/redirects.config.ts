import data from "./staticdata.config.ts";
const { invite, github, quillbot } = data;

const redirectConfig = [
  {
    sources: ["/join", "/invite", "/discord", "/chat"],
    destination: invite,
    permanent: false,
  },
  {
    sources: ["/github", "/org", "/gh"],
    destination: github,
    permanent: false,
  },
  {
    sources: ["/quill", "/quillbot"],
    destination: quillbot,
    permanent: false,
  },
  {
    sources: ["/repos", "/repositories"],
    destination: "https://github.com/orgs/open-devhub/repositories*",
    permanent: false,
  },

  {
    sources: ["/discussions"],
    destination: "https://github.com/orgs/open-devhub/discussions",
    permanent: false,
  },
  {
    sources: ["/repo/:repo", "/r/:repo"],
    destination: "https://github.com/open-devhub/:repo*",
    permanent: false,
  },
  {
    sources: ["/discussions/:discussion", "/d/:discussion"],
    destination: "https://github.com/orgs/open-devhub/discussions/:discussion*",

    permanent: false,
  },
];

export default redirectConfig;
