# DevHub Website

Welcome to the official website for the DevHub developer community! 👋

This repository contains the source code for the DevHub website, built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The website serves as a central place where developers can discover learning resources, read community guides, explore articles, and stay connected with everything happening in the DevHub community.

Whether you're a beginner exploring modern web development or someone making your first open-source contribution, this repository is a great place to learn how a modern Next.js project is organized and make your first contribution with confidence.

## About DevHub

DevHub is a developer community focused on helping programmers learn, collaborate, and grow together.

The website brings together community resources in one place, including:

- 📚 Learning guides for developers
- 🛠️ Curated tools and useful resources
- 📖 Articles and tutorials
- 🤝 Community information and onboarding guides
- 📜 Rules, FAQs, and moderation guides
- ❤️ Open-source contribution opportunities

If you're new to open source, this project is a great place to start because documentation improvements, bug fixes, and feature enhancements are all welcome.

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

| Technology | Purpose |
|------------|---------|
| Next.js | React framework used to build the website |
| TypeScript | Adds static typing to JavaScript |
| Tailwind CSS | Utility-first CSS framework for styling |
| GSAP & Framer Motion | Animation libraries |
| React Bits | UI component library |
| Lucide | Icon library |
| Vercel | Deployment platform |

## Getting Started

Follow the steps below to run the project on your own computer.

Don't worry if you've never worked with a Next.js project before—each step is explained.

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js 18 or later**
- A package manager such as **npm**, **bun**, **pnpm**, or **yarn**
- **Git**

> **Note:** This guide uses **npm** for all examples. If you prefer **bun**, **pnpm**, or **yarn**, you can use the equivalent commands instead.

You can verify your installation by running:

```bash
node -v
npm -v
git --version
```

### Step 1: Clone the repository

Clone the project from GitHub:

```bash
git clone https://github.com/open-devhub/website.git
```

Move into the project directory:

```bash
cd website
```

### Step 2: Install dependencies

This project depends on several external packages. Install them using:

```bash
npm install
```

This may take a few minutes the first time.

### Step 3: Start the development server

Run:

```bash
npm run dev
```

The development server will start locally.

Open your browser and visit:

```
http://localhost:3000
```

Whenever you save changes to the code, the browser automatically refreshes so you can instantly see your updates.

### Step 4: Verify Everything Works

Once the development server is running, open your browser and visit:

```
http://localhost:3000
```

You should see the DevHub homepage. Try navigating to a few pages to make sure everything loads correctly.

If you've made changes, save your files and verify that the browser updates automatically.

## Project Structure

Below is an overview of the repository structure to help you locate important files and folders.

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

## Understanding the Project Structure

The project contains several folders, but you only need to know a few to get started.

| Folder | Purpose |
|---------|---------|
| `app/` | Contains the application's pages and routing. |
| `components/` | Reusable React components used throughout the website. |
| `content/` | Markdown files, guides, articles, and other website content. |
| `lib/` | Helper functions and utility code. |
| `hooks/` | Custom React hooks used across the application. |
| `.github/` | GitHub workflows such as automated linting. |

As you contribute, you'll mostly work inside the **app**, **components**, or **content** folders.

## Contributing

We welcome contributions from developers of all experience levels, including first-time contributors!

A typical contribution workflow looks like this:

1. Fork this repository to your GitHub account.
2. Clone your fork locally.
3. Create a new branch.

```bash
git checkout -b feature/my-new-feature
```

4. Make your changes.
5. Test your changes locally.
6. Run the linter:

```bash
npm run lint
```

7. Commit your changes.

```bash
git commit -m "feat: add awesome feature"
```

8. Push your branch.

```bash
git push origin feature/my-new-feature
```

9. Open a Pull Request describing what you changed and why.

If you're contributing for the first time, check out issues labelled **good first issue**.

For a more detailed contribution guide, coding standards, and pull request expectations, please see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Useful Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the local development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Runs the production build locally. |
| `npm run lint` | Checks your code for linting issues. |
| `npm run format` | Formats the project using Prettier. |

## Testing Your Changes

Before opening a Pull Request, make sure your changes work as expected.

Run the linter:

```bash
npm run lint
```

Then start the development server:

```bash
npm run dev
```

Open the website in your browser and verify that your changes appear correctly and don't introduce any issues.

If the project adds automated tests in the future, be sure to run those as well before submitting your contribution.

## Troubleshooting

### `npm install` fails

Make sure you're using **Node.js 18 or later**.

### Port 3000 is already in use

Run the development server on another port:

```bash
npm run dev -- -p 3001
```

### Module not found

Delete the `node_modules` folder and reinstall dependencies:

```bash
rm -rf node_modules
npm install
```

## Community

Want to get involved? We'd love to have you!

- **Discord:** [Join DevHub](https://devhub.vercel.app/join) – Ask questions, connect with other developers, and stay up to date with the community.
- **GitHub:** [open-devhub](https://github.com/open-devhub) – Explore our projects and contribute.
- **Email:** open-devhub@outlook.com – Reach out for general inquiries or support.

## License

Licensed under the GNU GPL v3.0 License. See the [LICENSE](./LICENSE) file for details.

## ❤️ Our Contributors

A huge thank you to everyone who has contributed to making DevHub better!

<a href="https://github.com/open-devhub/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=open-devhub/website" />
</a>