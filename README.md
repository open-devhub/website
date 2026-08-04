# DevHub

The official website for DevHub, a developer community focused on helping people learn, build, and connect with other developers. This repository contains the source code for the website, including the landing page, community rules, guides, resource library, articles, and partners page.

If you're new here, welcome! This README is designed to guide you from cloning the repository to making your first contribution, even if you've never worked with this codebase before.

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

- Landing page: introduction to DevHub and what the community offers
- Pages: guides like Getting Started, How to Ask, How to Help, Code of Conduct, Contributing, Moderation Guide, Staff Roles, FAQ, and more
- Resource library: curated tools and learning materials
- Articles: write-ups from the community
- Rules: the server and community rules in one place
- Partners: communities and projects DevHub partners with

## Tech Stack

| Technology           | Purpose                                   |
| -------------------- | ----------------------------------------- |
| Next.js              | React framework used to build the website |
| TypeScript           | Adds static typing to JavaScript          |
| Tailwind CSS         | Utility-first CSS framework for styling   |
| GSAP & Framer Motion | Animation libraries                       |
| React Bits           | UI component library                      |
| Lucide               | Icon library                              |
| Vercel               | Deployment platform                       |

You don't need to know all of these before contributing. Most changes only touch one or two of them at a time.

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
├── app/                  → Pages of the site (Next.js App Router)
│   ├── api/              → API routes (e.g. link previews)
│   ├── pages/            → Renders the guide pages (Getting Started, FAQ, etc.)
│   ├── articles/         → Article listing + individual article pages
│   ├── partners/         → Partners page
│   ├── resources/        → Resource library page
│   └── rules/            → Community rules page
├── components/           → Reusable React components
│   ├── home/             → Landing page sections (Hero, Features, Stats, etc.)
│   ├── site/             → Shared layout pieces (Navbar, Footer, Section)
│   ├── ui/               → Generic building blocks (buttons, dialogs, badges…)
│   └── bits/             → Visual/animation effects (glow, fuzzy text, cursor)
├── content/              → Site copy and structured data
│   ├── pages/            → Content for the guide pages
│   ├── articles/         → Article content
│   ├── resources.ts      → Resource library data
│   └── rules.ts          → Community rules data
├── lib/                  → Shared utility code
│   ├── markdown/         → Markdown parser used for articles/pages
│   ├── animations.ts     → Shared animation configs
│   ├── colors.ts         → Color system used across the site
│   └── utils.ts          → General helper functions
└── hooks/                → Custom React hooks
```

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

New to open source? Look for issues tagged [`good first issue`](https://github.com/open-devhub/website/issues?q=is%3Aopen+label%3A%22good+first+issue%22). These are picked specifically to be approachable for first-time contributors.

For a more detailed contribution guide, coding standards, and pull request expectations, please see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Useful Scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Starts the local development server.   |
| `npm run build`     | Creates an optimized production build. |
| `npm run start`     | Runs the production build locally.     |
| `npm run lint`      | Checks your code for linting issues.   |
| `npm run typecheck` | Check for type errors.                 |
| `npm run format`    | Formats the project using Prettier.    |

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

- **Website:** [devhub.vercel.app](https://devhub.vercel.app)
- **Discord:** [Join DevHub](https://devhub.vercel.app/join) – Ask questions, connect with other developers, and stay up to date with the community.
- **GitHub:** [open-devhub](https://github.com/open-devhub) – Explore our projects and contribute.
- **Email:** open-devhub@outlook.com – Reach out for general inquiries or support.

## License

Licensed under the GNU GPL v3.0 License. See the [LICENSE](./LICENSE) file for details.

## Contributors

Thanks to everyone who has contributed to this repository!

<a href="https://github.com/open-devhub/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=open-devhub/website" />
</a>
