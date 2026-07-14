# DevHub

The official website for the DevHub developer community. Built with Next.js, TypeScript, and Tailwind CSS.

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

## Getting Started

### Prerequisites

- Node.js 18+
- bun, npm, yarn, or pnpm

### Setup

```bash
# Clone the repo
git clone https://github.com/open-devhub/website
cd website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're in.

## Project Structure

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

We welcome contributions of all kinds: bug fixes, new features, documentation improvements, and design feedback.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide. The short version:

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-cool-feature`)
3. Make your changes
4. Run `npm run lint`
5. Open a PR with a clear description

First time contributing to open source? Look for issues tagged [`good first issue`](https://github.com/open-devhub/website/issues?q=is%3Aopen+label%3A%22good+first+issue%22).

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
