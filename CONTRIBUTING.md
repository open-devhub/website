# Contributing to DevHub Website

Thanks for wanting to contribute. This document covers everything you need to get from zero to open pull request.

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Getting Set Up](#getting-set-up)
- [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code Standards](#code-standards)
- [Commit Messages](#commit-messages)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Any Questions?](#questions)

## Ways to Contribute

Not everything requires writing code:

- **Fix a bug** - Check the [issues list](https://github.com/open-devhub/website/issues) for open bugs
- **Add a feature** - From open issues, or add your own
- **Improve the docs** - If a page is confusing, out of date, or missing something, fix it
- **Add a resource** - Know a great learning resource we don't have? Add it to the library
- **Review PRs** - Constructive reviews on open PRs are incredibly helpful
- **Report a bug** - A well-written [bug report](https://github.com/open-devhub/website/issues) is a real contribution
- **Suggest improvements** - Open an [issue](https://github.com/open-devhub/website/issues) with your idea

## Getting Set Up

### Prerequisites

- **Node.js 18 or later / Bun v1 or later**
- A package manager such as **npm**, **bun**, **pnpm**, or **yarn**
- **Git**

> [!NOTE]
> This guide uses **bun** for all examples. If you prefer **npm**, **pnpm**, or **yarn**, you can use the equivalent commands instead.

### Fork and Clone

```bash
# Fork the repo on GitHub first, then:
git clone https://github.com/<your username>/website
cd website

# Add the upstream remote
git remote add upstream https://github.com/open-devhub/website
```

### Install and Run

```bash
bun install
bun run dev
```

The site will be at [http://localhost:3000](http://localhost:3000).

## Development Workflow

### 1. Sync with upstream before starting

```bash
git checkout main
git pull upstream main
```

### 2. Create a branch

Branch names should be descriptive and use the `feature/`, `fix/`, or `docs/` prefix:

```bash
git checkout -b feature/add-dark-mode-toggle
git checkout -b fix/mobile-nav-overflow
git checkout -b docs/update-getting-started
```

### 3. Make your changes

Keep changes focused. One feature or fix per branch makes review faster and keeps the git history readable.

### 4. Test your changes

```bash
bun run dev       # Verify that your changes are working with no errors
bun run lint      # Find and fix any linting errors before opening a PR
bun run format    # Format your code with prettier
```

### 5. Commit with a clear message

See [Commit Messages](#commit-messages) below.

### 6. Push and open a PR

```bash
git push origin feature/your-branch-name
```

Then open a pull request on GitHub against the `main` branch.

## Pull Request Guidelines

A good PR makes it easy for a reviewer to understand what you changed and why.

### Before Opening

- [ ] `bun run format` passes/formats files with no errors
- [ ] `bun run lint` passs with no errors
- [ ] `bun run build` succeeds locally
- [ ] You've tested your changes in the browser, not just in code

### PR Description

Fill out the PR template.

### Review Process

- All PRs need at least **one approval** from a maintainer before merging
- Address review comments with either a code change or a clear explanation of why you disagree
- Once approved, a maintainer will merge it.

### Draft PRs

If your work is in progress but you want early feedback, open a draft PR. Just mark it as ready for review when it's done.

## Code Standards

### Linting

We use Eslint with the project's config. Run `bun run lint` before committing.

### Formatting

We use Prettier with the project's config. Run `bun run format` before committing.

Or set up your editor to format on save - the `.vscode`/`.zed` in the repo will be picked up automatically if you're using vscode/zed.

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org). The format:

```
type(optional-scope): short description

Optional longer description if needed.
```

**Types:**

| Type       | When to use                                     |
| ---------- | ----------------------------------------------- |
| `feat`     | A new feature                                   |
| `fix`      | A bug fix                                       |
| `docs`     | Documentation changes only                      |
| `style`    | Formatting, whitespace — no logic changes       |
| `refactor` | Code restructure with no behaviour change       |
| `test`     | Adding or updating tests                        |
| `chore`    | Dependency updates, config changes, build stuff |

**Examples:**

```bash
feat(resources): add Rust learning resources section
fix(nav): correct active state on nested doc pages
docs(contributing): add environment variable table
chore: update Next.js to v15.2
```

Keep the subject line under 72 characters. If you need more context, put it in the body.

## Reporting Bugs

Before filing a bug report, check if it's already been reported in [open issues](https://github.com/open-devhub/website/issues).

A good bug report includes:

- **What happened** - What did you see?
- **What you expected** - What did you expect to see?
- **Steps to reproduce** - Exact steps, starting from a fresh page load
- **Environment** - Browser, OS, screen size if it's a visual bug
- **Screenshots or recording** - If applicable

## Suggesting Features

Open an issue and describe:

- What you want to be able to do
- Why it would be useful (not just to you, to the community broadly)
- Any ideas on how it might work

## Questions?

Ask in `#dev-chat` on the [DevHub Discord Server](https://devhub.vercel.app/join), or just open an issue on Github.
