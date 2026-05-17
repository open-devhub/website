import data from "./staticdata.config.ts";
const { invite, github, quillbot } = data;

export default [
  {
    sources: ["/invite", "/discord"],
    destination: invite,
    permanent: false,
  },
  {
    sources: ["/github"],
    destination: github,
    permanent: false,
  },
  {
    sources: ["/quill", "/quillbot"],
    destination: quillbot,
    permanent: false,
  },
];
