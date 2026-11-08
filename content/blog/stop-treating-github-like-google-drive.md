---
title: "Stop Treating GitHub Like Google Drive 💀"
description: "GitHub is more than a place to upload code. Let's talk about building better repositories, writing useful documentation, making open source welcoming, and giving your projects a life beyond your computer."
authors: [Spidey Dev]
date: November 8, 2026
tags: [github, git, open-source, developer-life, software-engineering]
---

# Stop Treating GitHub Like Google Drive 💀

Let's be honest.

Some developers treat GitHub like a cloud storage service.

Create a repository, upload some files, write a README that says "My Project", and disappear.

Three months later, the repository looks like an abandoned building.

And the README?

```md
# My Project

Made with JavaScript.
```

Beautiful. Absolutely life-changing documentation. 💀

But seriously, I think we're missing something important about GitHub.

GitHub isn't just a place where your code lives. It's where people discover your work, understand your ideas, learn from your experiments, report problems, contribute improvements, and sometimes even become part of something you started.

Your repository is a little piece of your work on the internet.

So why treat it like a random folder on Google Drive?

Let's fix that.

## 1. Your repository is someone's first impression

Imagine someone discovers your project.

Maybe they found it through Google, a GitHub search, a Reddit discussion, or a random link someone shared.

They open your repository.

And they see:

```text
my-project/
├── src/
├── public/
├── components/
├── test/
├── test2/
├── test-final/
├── test-final-real/
├── old/
├── old-new/
├── final-final/
├── package.json
└── README.md
```

Their first thought?

"What am I looking at?"

They open the README.

```md
# Project

A project made by me.
```

Congratulations. You've successfully made someone close a browser tab.

Okay, maybe that's a little dramatic. 😂

But here's the thing: people shouldn't have to investigate your repository just to understand what it does.

A good repository should answer a few simple questions:

- What is this project?
- Why does it exist?
- What can it actually do?
- How can I use it?
- How do I install it?
- Can I contribute?
- Where can I find more information?

You don't need to write an entire book. Just make the important information easy to find.

## 2. Your README deserves more than two sentences

The README is usually the first thing people encounter when opening your repository.

Think of it as the introduction to your project.

Not a marketing advertisement. Not a place to dump every technical detail.

Just a proper introduction.

For example, instead of:

```md
# Trigo.js

A JavaScript library.
```

Try something that actually explains the project:

```md
# Trigo.js

A lightweight JavaScript library for working
with trigger-based interactions.

No dependencies. Just JavaScript.

## Installation

npm install trigo

## Usage

import { Trigo } from "trigo";
```

See the difference?

Someone can understand what they're looking at without opening ten files.

### What should a good README contain?

Here's a structure you can use for most software projects:

```md
# Project Name

A short explanation of the project.

## Features

- Feature one
- Feature two
- Feature three

## Installation

Installation instructions.

## Usage

A practical example.

## Documentation

Link to documentation.

## Contributing

How people can contribute.

## License

Your project's license.
```

Of course, not every project needs every section.

A tiny experiment doesn't need enterprise-level documentation.

Don't write documentation just to make your README look bigger.

Write it because somebody might actually need it.

## 3. Folder structures matter more than you think

Let's talk about something developers either love or completely ignore.

Folder organization.

A project can have perfectly working code and still be incredibly difficult to navigate.

For example:

```text
project/
├── index.html
├── main.js
├── main2.js
├── app-final.js
├── app-final-new.js
├── style.css
├── style2.css
├── backup.css
└── random.js
```

Bro, which file is the actual application? 😭

A better structure makes responsibilities easier to understand.

For example, a small React project might look like:

```text
project/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── .gitignore
└── README.md
```

This isn't a universal structure. Different projects need different organizations.

A library, a CLI application, a static website and a backend service shouldn't necessarily look identical.

The goal isn't to follow somebody else's folder structure.

The goal is to make your own project understandable.

## 4. Your commit history tells a story

Here's something I personally find interesting about Git.

Every commit is a snapshot of changes in your project.

Over time, your commit history becomes a record of how your software evolved.

But look at these messages:

```text
update
changes
fixed
final
new update
final final
finally fixed
```

What exactly happened?

Nobody knows. Not even you after two weeks. 💀

Now compare:

```text
feat: add markdown code highlighting
fix: prevent blank page on refresh
docs: improve installation guide
refactor: simplify post loading
style: improve mobile navigation
```

Much better.

### What makes a good commit message?

A useful commit message should tell someone what changed.

Some common prefixes:

| Prefix | Purpose |
|---|---|
| `feat:` | Add a feature |
| `fix:` | Fix a bug |
| `docs:` | Update documentation |
| `style:` | Formatting or visual changes |
| `refactor:` | Improve existing code |
| `perf:` | Improve performance |
| `test:` | Add or update tests |
| `chore:` | Maintenance tasks |

For example:

```bash
git add .
git commit -m "feat: add search to posts page"
git push
```

You don't have to follow Conventional Commits for every project.

But being consistent makes your history much easier to understand.

And please, stop naming commits `update`. We deserve better. 😂

## 5. Make your project easy to try

Imagine discovering a really interesting JavaScript library.

You open the repository.

You want to test it.

But first, you need to:

1. Clone the repository.
2. Install dependencies.
3. Find the correct entry file.
4. Understand the configuration.
5. Create an environment file.
6. Guess which command starts the application.

And after all that, you still don't know what the library does.

That's unnecessary friction.

Whenever possible, give people an easy way to experience your project.

Depending on the project, this could be:

- A live website.
- A playground.
- A simple installation command.
- A working code example.
- A screenshot or GIF.
- A downloadable release.
- A demo video.

For a web application, a live deployment can make a massive difference.

For a JavaScript library, a small example is often enough.

For example:

```js
import { something } from "your-library";

const result = something("Hello!");

console.log(result);
```

People should be able to understand the basic idea before spending time setting everything up.

### A small tip

If you have a live deployment, put its link near the top of your README.

Don't hide your actual application underneath 700 lines of documentation.

Let people see what you built.

## 6. Add a LICENSE. Seriously.

Here's a common situation.

Someone discovers your project and wants to use part of your code.

Can they?

Can they modify it?

Can they distribute it?

Can they use it commercially?

Without a license, people shouldn't assume they have permission to reuse your code.

A license explains the permissions and conditions under which others can use your work.

Some popular choices:

| License | General idea |
|---|---|
| MIT | Permissive reuse with conditions |
| Apache 2.0 | Permissive, with explicit patent provisions |
| GPL-3.0 | Copyleft; derivative distributions must follow its terms |
| BSD-3-Clause | Permissive with redistribution conditions |
| MPL-2.0 | File-level copyleft |

You can explore licenses here:

- [Choose a License](https://choosealicense.com/)
- [Open Source Initiative](https://opensource.org/licenses)

Don't just copy a random license file from another repository.

Understand what you're choosing.

And if you don't want others to reuse your code, don't pretend that publishing it publicly automatically makes it open source.

Publicly visible code and open-source software aren't the same thing.

## 7. Don't upload your secrets to GitHub

Okay, this one is important.

Imagine committing this:

```js
const API_KEY = "sk-your-real-secret-key";
```

And pushing it to a public repository.

Congratulations.

Your API key is now part of your project's public history.

Even if you delete that line in the next commit, the previous commit may still contain it.

This is why secrets should never be hardcoded into public frontend code or committed to repositories.

For local development, use environment variables.

For example:

```env
API_KEY=your_secret_here
```

Add the environment file to `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
node_modules/
dist/
```

Then read the variable through your backend environment.

Remember:

**A frontend environment variable isn't automatically secret.**

If a variable is bundled into browser JavaScript, users may be able to inspect it.

Keep private credentials on the server.

If you accidentally expose a real secret:

1. Revoke or rotate it immediately.
2. Check its usage for unexpected activity.
3. Remove it from the repository.
4. Clean up history if necessary.
5. Review your security practices.

And no, hiding the API key with Base64 doesn't count as security. 💀

## 8. Open source isn't just about writing code

This is something I wish more developers understood.

You don't need to be an experienced programmer to contribute to open source.

Seriously.

There are many ways to help a project.

You can:

- Improve documentation.
- Report bugs.
- Reproduce an issue.
- Suggest a feature.
- Improve accessibility.
- Fix spelling mistakes.
- Write examples.
- Help other contributors.
- Test a new release.

Sometimes a project has excellent code but terrible documentation.

Sometimes a developer knows exactly what needs fixing but hasn't had time to write a proper guide.

Sometimes a small bug report saves someone hours of debugging.

All of those contributions matter.

### How do you start contributing?

Here's a simple workflow:

```text
Discover a project
       ↓
Read its README
       ↓
Check CONTRIBUTING.md
       ↓
Explore open issues
       ↓
Choose something manageable
       ↓
Fork the repository
       ↓
Create a branch
       ↓
Make your changes
       ↓
Test everything
       ↓
Open a Pull Request
       ↓
Wait for review
```

A Pull Request isn't just a place to submit code.

It's a conversation about improving software.

And please, don't open a PR just to change one comma unless it genuinely improves something.

Quality over contribution counts.

## 9. GitHub Issues are not decoration

Some repositories have an Issues tab with 200 unanswered reports.

Some have zero issues because nobody knows they can report anything.

GitHub Issues are useful for tracking problems, ideas and planned work.

For example:

```md
## Bug: Search doesn't work on mobile

### Expected behaviour

Search results should update when typing.

### Actual behaviour

The results don't update on smaller screens.

### Steps to reproduce

1. Open the website on mobile.
2. Navigate to the posts page.
3. Enter a search query.
4. Observe the results.

### Environment

- Browser: Chrome
- Device: Android
```

Now that's useful.

Someone maintaining the project can actually investigate the problem.

### Use labels properly

Some common labels:

- `bug`
- `enhancement`
- `documentation`
- `good first issue`
- `help wanted`
- `question`

You can also use GitHub Issue Templates to make reports more consistent.

A good issue tracker helps a project become more organized as it grows.

## 10. Your GitHub profile is not a competition

Let's talk about contribution graphs.

You know those green squares?

Developers sometimes treat them like a fitness tracker.

Every day:

"Must commit something."

Even if that something is:

```text
update README
```

Again.

For the 17th time.

Please go outside. 😂

Your contribution graph can show activity, but it doesn't tell the complete story of your development skills.

A person who spends two months building a complex application might have fewer commits than someone who pushes tiny changes every day.

That doesn't automatically make the second person a better developer.

Instead of obsessing over green squares:

- Build projects you genuinely care about.
- Finish things when possible.
- Write useful documentation.
- Help other developers.
- Learn new technologies.
- Maintain what you've already built.

Your GitHub profile should represent your work, not your ability to produce green pixels.

## 11. Pin projects that actually represent you

When somebody visits your GitHub profile, they shouldn't have to scroll through 80 repositories to discover your best work.

GitHub allows you to pin repositories.

Use that space wisely.

Choose projects that demonstrate different things:

- A project with interesting engineering.
- A useful open-source tool.
- Something visually creative.
- A project you're actively maintaining.
- Something that shows your problem-solving skills.

Don't pin a repository simply because it has the most stars.

A small project that solves a real problem can be more interesting than a huge unfinished application.

And make sure those pinned repositories have working descriptions and READMEs.

## 12. Stop being afraid of unfinished projects

Here's an unpopular thought.

Not every repository needs to become a successful product.

Sometimes you build something because you're curious.

Sometimes you want to test an algorithm.

Sometimes you spend an entire evening creating something ridiculous.

That's okay.

Experiments are part of software development.

But there's a difference between an experimental project and an abandoned project pretending to be production-ready.

Be honest about the state of your software.

You can use labels like:

- Experimental
- Work in Progress
- Alpha
- Beta
- Stable
- Archived

For example:

```md
> [!WARNING]
> This project is experimental.
> APIs and functionality may change.
```

Or:

```md
> [!NOTE]
> This project is no longer actively maintained.
```

People appreciate knowing what they're working with.

You don't have to pretend every project is perfect.

## 13. A few GitHub features you should actually explore

GitHub has a lot more going on than repositories and commits.

Here are some features worth exploring.

### GitHub Actions

Automate repetitive tasks.

For example:

- Run tests when someone opens a Pull Request.
- Build your application automatically.
- Publish documentation.
- Check code formatting.
- Deploy your website.

You can create workflows inside:

```text
.github/workflows/
```

Example:

```yaml
name: Build

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: npm install
      - run: npm run build
```

This is a basic example. For production workflows, pin actions to trusted versions or commit SHAs and consider dependency caching and lockfile-based installation.

### GitHub Discussions

Have a community around your project?

Discussions can be useful for:

- Questions.
- Feature ideas.
- General conversations.
- Announcements.
- Community feedback.

Not every conversation needs to become an issue.

### GitHub Projects

If you're building something bigger, Projects can help organize:

- Tasks.
- Bugs.
- Planned features.
- Development progress.
- Releases.

You can use boards, tables and roadmaps.

### GitHub Releases

When you publish a new version, Releases give users a place to find:

- Version information.
- Release notes.
- Downloadable assets.
- Important changes.
- Upgrade instructions.

For libraries and applications, this is particularly useful.

Explore the official documentation:

- [GitHub Docs](https://docs.github.com/)
- [GitHub Actions](https://docs.github.com/actions)
- [GitHub Discussions](https://docs.github.com/discussions)
- [GitHub Projects](https://docs.github.com/issues/planning-and-tracking-with-projects)

## 14. A practical repository checklist

Okay, enough talking.

Let's actually improve a repository.

Here's a checklist you can use whenever you create a new project or revisit an existing one.

### Project information

- [ ] Does the repository have a meaningful name?
- [ ] Is its description understandable?
- [ ] Does the README explain what it does?
- [ ] Is there a live demo if applicable?
- [ ] Are installation instructions included?

### Code organization

- [ ] Are files organized logically?
- [ ] Are unnecessary files removed?
- [ ] Is `.gitignore` configured?
- [ ] Are dependencies documented?
- [ ] Is the code reasonably readable?

### Security

- [ ] Are API keys protected?
- [ ] Are environment files excluded?
- [ ] Are dependencies reasonably maintained?
- [ ] Are permissions configured appropriately?

### Community

- [ ] Is there a license?
- [ ] Are contribution instructions available?
- [ ] Can users report bugs?
- [ ] Are issues organized?
- [ ] Are important questions answered?

### Maintenance

- [ ] Are commit messages meaningful?
- [ ] Are releases documented?
- [ ] Are tests available where appropriate?
- [ ] Does the project build successfully?
- [ ] Is its maintenance status clear?

You don't have to complete everything on day one.

Just keep improving.

## 15. What I would do with my own repositories

Personally, I think a repository should feel like a small home for a project.

Not necessarily a beautiful one.

Not necessarily one with 50 badges, animations and a giant logo.

Just a place where somebody can arrive, understand the idea, explore the code and maybe become interested enough to contribute.

I'd rather have:

```text
A clear README
A working project
Useful documentation
Meaningful commits
A friendly community
```

Than:

```text
50 badges
10 animated GIFs
A giant banner
100 meaningless commits
No working installation instructions
```

You know what I mean. 😂

Visual presentation is nice. But it shouldn't replace actual usefulness.

And you don't need to turn every repository into an enterprise product.

A tiny useful tool deserves a good home too.

## So, what should you do now?

Open one of your repositories.

Pick a project you genuinely care about.

Don't start by redesigning your entire GitHub profile.

Start small.

1. Read your README.
2. Check whether somebody new can understand your project.
3. Test the installation instructions.
4. Check your `.gitignore`.
5. Add a license if you've decided to make it open source.
6. Improve the folder structure if it's genuinely confusing.
7. Fix one thing you've been ignoring.

That's it.

One improvement is better than another unfinished redesign.

And if your repository contains a folder named `final-final-v2-real`, I am not judging you.

Okay, maybe a little. 💀

---

## One last thing

GitHub is a tool.

You can use it to store code, collaborate with developers, publish software, build communities, share experiments and learn from people around the world.

But the interesting part isn't the green contribution graph.

It isn't the number of stars.

It isn't how many repositories you have.

It's what you actually build and what other people can do with it.

**Build things people can explore, understand and use.**

Don't just upload code and call it a day.

Now go fix that README. ★