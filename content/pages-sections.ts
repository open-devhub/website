/**
 * Static page section metadata for client components.
 *
 * This file contains only the sidebar navigation structure (section names
 * and page slugs/titles) without any file system access. It is safe to
 * import from client components.
 *
 * The actual page content is loaded server-side via `content/pages-loader.ts`.
 */

import type { PageSection } from "@/content/pages-loader";

export const pageSections: PageSection[] = [
  {
    title: "Community",
    pages: [
      { slug: "getting-started", title: "Getting Started" },
      { slug: "join-guide", title: "Join Guide" },
      { slug: "server-info", title: "Server Info" },
      { slug: "how-to-ask", title: "How to Ask" },
      { slug: "how-to-help", title: "How to Help" },
      { slug: "code-of-conduct", title: "Code of Conduct" },
      { slug: "moderation-guide", title: "Moderation Guide" },
      { slug: "staff-roles", title: "Staff Roles" },
      { slug: "faq", title: "FAQ" },
      { slug: "acknowledgements", title: "Acknowledgements" },
    ],
  },
  {
    title: "Bots",
    pages: [
      { slug: "bots", title: "Overview" },
      { slug: "adding-a-bot", title: "Adding a Bot" },
    ],
  },
  {
    title: "Open Source",
    pages: [
      { slug: "github-org", title: "GitHub Organization" },
      { slug: "contributing", title: "Contributing" },
      { slug: "project-guidelines", title: "Project Guidelines" },
      { slug: "submit-project", title: "Submitting a Project" },
    ],
  },
  {
    title: "Legal",
    pages: [
      { slug: "privacy-policy", title: "Privacy Policy" },
      { slug: "security-notice", title: "Security Notice" },
    ],
  },
];
