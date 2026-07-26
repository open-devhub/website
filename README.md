# DevHub

DevHub is a developer community focused on helping people learn, build, and connect with other developers. This repository holds the source for [devhub.vercel.app](https://devhub.vercel.app) — the community's website, including the landing page, guides, and resource library.

New to the project? This README walks you through what's here, how to run it locally, and how the code is organized, so you can start contributing without needing to already know the codebase.

Built with Next.js, TypeScript, and Tailwind CSS.

## What's in here

- Landing page
- Community guides
- Resource library, curated tools and learning materials
- Partners page
- DevHub Pages:
  - Getting Started
  - Join Guide
  - Server Info
  - How to Ask
  - How to Help
  - Code of Conduct
  - Contributing
  - Moderation Guide
  - Staff Roles
  - FAQ
  - and many many more

## Tech Stack

- **Framework** - Next.js
- **Language** - TypeScript
- **Styling** - Tailwind CSS
- **Animation Libriary** - GSAP and Framer Motion
- **Component Libriary** - React Bits
- **Icons** - Lucide
- **Deployment** - Vercel

If you're new to any of these, you don't need to be an expert to contribute — most changes only touch a small part of the stack at a time.

## Getting Started

Follow these steps to get the site running on your own machine.

### 1. Check your prerequisites

You'll need:

- **Node.js 18+** — [download here](https://nodejs.org/) if you don't have it. Run `node -v` to check your current version.
- A package manager: **bun**, **npm**, **yarn**, or **pnpm** (npm comes bundled with Node.js, so that's the easiest option if you're not sure which to pick)

### 2. Get the code

If you plan to contribute, fork this repository first (click **Fork** at the top of the GitHub page), then clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/website
cd website
```

(If you're just running the site locally without contributing, you can clone this repo directly instead.)

### 3. Install dependencies

```bash
npm install
```

This downloads all the packages the project needs. It may take a minute the first time.

### 4. Start the dev server

```bash
npm run dev
```

### 5. Open it in your browser

Go to [http://localhost:3000](http://localhost:3000). The page will automatically reload as you edit files.

## Project Structure

Here's a quick orientation to the main folders, in the order you're most likely to touch them:

- **`app/`** — The pages of the site, using Next.js's App Router. Each folder under `app/` generally maps to a URL path.
- **`components/`** — Reusable React components, split into `home/` (landing page sections), `site/` (shared layout pieces like the navbar and footer), `ui/` (generic building blocks like buttons and dialogs), and `bits/` (visual/animation effects).
- **`content/`** — Site copy and structured data (page listings, resources, community rules) kept separate from the components that render them.
- **`lib/`** — Shared utility code: animations, color helpers, config, and the markdown parser.
- **`hooks/`** — Custom React hooks.

Full tree, for reference:

```
├── 📁 .github
│   └── 📁 workflows
│       └── 📄 linter.yaml
├── 📁 .vscode
│   └── 📄 settings.json
├── 📁 app
│   ├── 📁 api
│   │   └── 📁 preview
│   │       └── 📄 route.ts
│   ├── 📁 pages
│   │   ├── 📁 [slug]
│   │   │   ├── 📁 [subslug]
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📄 PageClient.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 articles
│   │   ├── 📁 [slug]
│   │   │   ├── 📄 ArticleClient.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📄 ArticlesListingClient.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 partners
│   │   └── 📄 page.tsx
│   ├── 📁 resources
│   │   └── 📄 page.tsx
│   ├── 📁 rules
│   │   └── 📄 page.tsx
│   ├── 📄 globals.css
│   ├── 📄 layout.tsx
│   ├── 📄 not-found.tsx
│   └── 📄 page.tsx
├── 📁 components
│   ├── 📁 bits
│   │   ├── 📄 BorderGlow.tsx
│   │   ├── 📄 FuzzyText.tsx
│   │   ├── 📄 ShinyText.tsx
│   │   ├── 📄 SoftAurora.tsx
│   │   └── 📄 TargetCursor.tsx
│   ├── 📁 home
│   │   ├── 📄 BelongSection.tsx
│   │   ├── 📄 CTASection.tsx
│   │   ├── 📄 FeaturesSection.tsx
│   │   ├── 📄 HeroSection.tsx
│   │   ├── 📄 ShowcaseSection.tsx
│   │   └── 📄 StatsSection.tsx
│   ├── 📁 site
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 Navbar.tsx
│   │   └── 📄 Section.tsx
│   ├── 📁 ui
│   │   ├── 📄 accordion.tsx
│   │   ├── 📄 alert-dialog.tsx
│   │   ├── 📄 alert.tsx
│   │   ├── 📄 aspect-ratio.tsx
│   │   ├── 📄 avatar.tsx
│   │   ├── 📄 badge.tsx
│   │   └── ... (40 more UI components)
│   ├── 📄 AnimatedText.tsx
│   ├── 📄 Badge.tsx
│   ├── 📄 BorderGlowButton.tsx
│   ├── 📄 GlowButton.tsx
│   └── 📄 LinkPreviewCard.tsx
├── 📁 content
│   ├── 📁 pages
│   │   └── ...
│   ├── 📁 articles
│   │   └── ...
│   ├── 📄 pages-loader.ts
│   ├── 📄 pages-sections.ts
│   ├── 📄 resources.ts
│   └── 📄 rules.ts
├── 📁 hooks
│   └── 📄 use-toast.ts
├── 📁 lib
│   ├── 📁 markdown
│   │   └── 📄 parser.ts
│   ├── 📄 animations.ts
│   ├── 📄 colors.ts
│   ├── 📄 redirects.config.ts
│   ├── 📄 staticdata.config.ts
│   └── 📄 utils.ts
├── 📄 .eslintrc.json
├── 📄 .gitignore
├── 📄 bun.lock
├── 📄 components.json
├── 📄 CONTRIBUTING.md
├── 📄 LICENSE
├── 📄 next.config.js
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 README.md
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
├── 📄 vercel.json
```

## Contributing

We welcome contributions of all kinds: bug fixes, new features, documentation improvements, and design feedback — you don't need to be an expert in the stack to help out.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide, including branch naming, commit message conventions, and the PR process. The short version:

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-cool-feature`)
3. Make your changes
4. Run `npm run lint`
5. Open a PR with a clear description

First time contributing to open source? Look for issues tagged [`good first issue`](https://github.com/open-devhub/website/issues?q=is%3Aopen+label%3A%22good+first+issue%22) — they're scoped to be approachable even if you've never opened a PR before.

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

## Community

- **Discord** - [devhub.vercel.app/join](https://devhub.vercel.app/join)
- **GitHub Org** - [github.com/open-devhub](https://github.com/open-devhub)
- **Email** - open-devhub@outlook.com

## License

Licensed under the GNU GPL v3.0 License. See the [LICENSE](./LICENSE) file for details.

## Contributors

<a href="https://github.com/open-devhub/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=open-devhub/website" />
</a>
