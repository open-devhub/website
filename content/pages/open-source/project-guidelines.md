---
slug: project-guidelines
title: Project Guidelines
section: Open Source
description: Standards for DevHub open source projects.
lastUpdated: May 17, 2026
readingTime: 5 min read
---

These guidelines apply to all projects under the [DevHub GitHub org](/github). They're not bureaucracy, they're the things that make a project maintainable by multiple people over time.

## Required Files

- README.md, What the project is, how to run it locally, and how to contribute. Keep it current.
- LICENSE, [MIT](https://opensource.org/license/mit) preferred. If you have a reason for a different license, document it.
- CONTRIBUTING.md, How to contribute. Link to this guide.

## Code Standards

- [Prettier](https://prettier.io) for formatting. No debates about style, just run it.
- [ESLint](https://eslint.org) (JS/TS) or the equivalent linter for your language.
- Tests for core functionality. Not 100% coverage, test the things that matter.
- [JSDoc](https://jsdoc.app/about-getting-started) or equivalent for public APIs. If someone has to read source to understand how to use it, the docs aren't done.

## Commit Messages

We use Conventional Commits: "type(scope): description". Common types are feat, fix, docs, chore, refactor, test (full documentation at [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)). The commit history is documentation, write it like someone will read it.

```
feat(auth): add OAuth login support
fix(bot): handle empty /ask queries gracefully
docs(readme): update setup instructions for Node 22
```

## Branching Strategy

main is always deployable. develop is active work. `feature/*` branches are individual features or fixes. Open PRs from your feature branch into main.

> [!info] Always test your code locally before opening a PR. A PR that doesn't run or fails linting creates extra work for reviewers and slows down the process for everyone.

## Reviewing PRs

Be constructive and specific in reviews. 'This is wrong' isn't a review, 'this will break when X because Y, consider Z instead' is. Approve when you're genuinely satisfied, not just to move things along.
