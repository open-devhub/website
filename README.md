# DevHub

The official website for the DevHub developer community. Built with Next.js, TypeScript, and Tailwind CSS.

## What's in here

- Community docs and guides
  - rules
  - getting started
  - how-to's
- Resource library, curated tools and learning materials
- Documentations:
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

## Tech Stack

- **Framework** - Next.js
- **Language** - TypeScript
- **Styling** - Tailwind CSS
- **Animation Libriary** - GSAP and Framer Motion
- **Icons** - Lucide
- **Deployment** - Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repo
git clone https://github.com/open-devhub/website
cd devhub-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're in.

## Project Structure

```
website/
├── 📁 app
│   ├── 📄 globals.css
│   ├── 📄 layout.tsx
│   ├── 📄 page.tsx
│   ├── 📁 pages
│   │   ├── 📄 [slug]
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 resources
│   │   └── 📄 page.tsx
│   └── 📁 rules
│       └── 📄 page.tsx
├── 📄 components.json
├── 📁 components
│   ├── 📄 AnimatedText.tsx
│   ├── 📄 Badge.tsx
│   ├── 📄 Footer.tsx
│   ├── 📄 GlowButton.tsx
│   ├── 📄 Navbar.tsx
│   ├── 📄 Section.tsx
│   ├── 📁 home
│   │   ├── 📄 BelongSection.tsx
│   │   ├── 📄 CTASection.tsx
│   │   ├── 📄 FeaturesSection.tsx
│   │   ├── 📄 HeroSection.tsx
│   │   ├── 📄 ShowcaseSection.tsx
│   │   └── 📄 StatsSection.tsx
│   └── 📁 ui
│       ├── 📄 accordion.tsx
│       ├── 📄 alert-dialog.tsx
│       ├── 📄 alert.tsx
│       ├── 📄 aspect-ratio.tsx
│       ├── 📄 avatar.tsx
│       ...
├── 📁 hooks
│   └── 📄 use-toast.ts
├── 📁 lib
│   ├── 📄 animations.ts
│   ├── 📄 pages.config.ts
│   ├── 📄 staticdata.config.ts
│   └── 📄 utils.ts
├── 📄 .eslintrc.json
├── 📄 .gitignore
├── 📄 next.config.js
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.ts
└── 📄 tsconfig.json
```

## Contributing

We welcome contributions of all kinds: bug fixes, new features, documentation improvements, and design feedback.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide. The short version:

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-cool-feature`)
3. Make your changes
4. Run `npm run lint`
5. Open a PR with a clear description

First time contributing to open source? Look for issues tagged [`good first issue`](https://github.com/devhub-community/devhub-website/issues?q=is%3Aopen+label%3A%22good+first+issue%22).

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

## Community

- **Discord** - [devhub.vercel.app/invite](https://devhub.vercel.app/invite)
- **GitHub Org** - [github.com/open-devhub](https://github.com/open-devhub)
- **Email** - open-devhub@outlook.com

## License

Licensed under the GNU GPL v3.0 License. See the [LICENSE](./LICENSE) file for details.
