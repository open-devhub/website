export const languages = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Design",
  "Python",
  "Go",
  "Rust",
  "C",
  "C++",
  "Java",
  "Kotlin",
  "Swift",
  "PHP",
  "Ruby",
  "Database",
  "Full-Stack",
  "Git",
  "DevOps",
] as const;

export type Language = (typeof languages)[number];

export interface Resource {
  title: string;
  description: string;
  url: string;
  languages: Language[];
  source: string;
  tags: [string, string, string];
  featured?: boolean;
}

export const resources: Resource[] = [
  // JavaScript
  {
    title: "MDN Web Docs",
    description:
      "The gold standard reference for HTML, CSS, and JavaScript. If it's in the browser, it's documented here. Maintained by Mozilla and the community, no ads, no fluff.",
    url: "https://developer.mozilla.org",
    languages: ["JavaScript", "HTML", "CSS"],
    source: "Mozilla",
    tags: ["HTML", "CSS", "Web APIs"],
    featured: true,
  },
  {
    title: "Eloquent JavaScript",
    description:
      "A free, beautifully written book on JavaScript that treats you like an adult. Dense, rewarding, and completely free online. Read it twice.",
    url: "https://eloquentjavascript.net",
    languages: ["JavaScript"],
    source: "Open Source",
    tags: ["Book", "Beginner", "Intermediate"],
  },
  {
    title: "You Don't Know JS",
    description:
      "A series of books that goes uncomfortably deep into JavaScript's weird parts, scope, closures, `this`, prototypes. Read this after you think you know JS.",
    url: "https://github.com/getify/You-Dont-Know-JS",
    languages: ["JavaScript"],
    source: "GitHub",
    tags: ["Advanced", "Book", "Deep Dive"],
  },
  {
    title: "javascript.info",
    description:
      "The best written JavaScript tutorial on the internet, full stop. Goes from 'what is a variable' to 'how does the event loop actually work' without losing you.",
    url: "https://javascript.info",
    languages: ["JavaScript"],
    source: "Community",
    tags: ["Beginner", "Advanced", "Deep Dive"],
    featured: true,
  },
  {
    title: "Node.js Docs",
    description:
      "The official Node.js documentation. Not flashy, but complete. Everything from the fs module to streams to the event loop.",
    url: "https://nodejs.org/en/docs",
    languages: ["JavaScript"],
    source: "Node.js Foundation",
    tags: ["Backend", "Runtime", "Reference"],
  },
  {
    title: "Fireship",
    description:
      "100-second explainers that somehow teach you more than a 3-hour course. Jeff's production quality is insane and the pacing keeps you locked in.",
    url: "https://fireship.io",
    languages: ["JavaScript", "TypeScript", "Full-Stack"],
    source: "YouTube",
    tags: ["Tutorials", "Firebase", "Web Dev"],
    featured: true,
  },
  {
    title: "The Odin Project",
    description:
      "A free, open-source curriculum that takes you from zero to full-stack without charging you a dime. Project-based, community-supported, genuinely excellent.",
    url: "https://theodinproject.com",
    languages: ["JavaScript", "Ruby", "HTML", "CSS", "Full-Stack"],
    source: "Open Source",
    tags: ["Beginner", "HTML", "CSS"],
    featured: true,
  },
  {
    title: "freeCodeCamp",
    description:
      "Thousands of hours of free curriculum, certifications, and projects. The JavaScript algorithms section alone is worth bookmarking.",
    url: "https://freecodecamp.org",
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "Full-Stack",
      "React",
    ],
    source: "Nonprofit",
    tags: ["Beginner", "Certification", "Projects"],
    featured: true,
  },
  {
    title: "30 Seconds of Code",
    description:
      "Bite-sized JavaScript (and other languages) snippets you can actually use. Great for filling gaps in your knowledge or finding a pattern you half-remember.",
    url: "https://www.30secondsofcode.org",
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Git"],
    source: "Open Source",
    tags: ["Snippets", "Reference", "Quick Tips"],
  },
  {
    title: "JavaScript Weekly",
    description:
      "A weekly newsletter that curates the best JS articles, tools, and releases. High signal-to-noise ratio, doesn't pad with garbage.",
    url: "https://javascriptweekly.com",
    languages: ["JavaScript"],
    source: "Community",
    tags: ["Newsletter", "News", "Ecosystem"],
  },

  // TypeScript
  {
    title: "TypeScript Handbook",
    description:
      "The official TypeScript docs, written by the team that built it. Covers everything from basic types to mapped types and template literal wizardry.",
    url: "https://typescriptlang.org/docs",
    languages: ["TypeScript"],
    source: "Microsoft",
    tags: ["Reference", "Intermediate", "Type System"],
    featured: true,
  },
  {
    title: "TypeScript Deep Dive",
    description:
      "A free open-source book that bridges the gap between the official docs and real-world TypeScript. No nonsense, very practical.",
    url: "https://basarat.gitbook.io/typescript",
    languages: ["TypeScript"],
    source: "Open Source",
    tags: ["Book", "Intermediate", "Reference"],
  },
  {
    title: "TypeScript Playground",
    description:
      "Official browser-based TypeScript sandbox. Test types, share snippets, explore how TS compiles. More useful than it sounds.",
    url: "https://www.typescriptlang.org/play",
    languages: ["TypeScript"],
    source: "Microsoft",
    tags: ["Tools", "Sandbox", "Interactive"],
  },
  {
    title: "type-challenges",
    description:
      "A GitHub repo full of TypeScript type challenges sorted by difficulty. These will hurt your brain in a productive way.",
    url: "https://github.com/type-challenges/type-challenges",
    languages: ["TypeScript"],
    source: "GitHub",
    tags: ["Challenges", "Advanced", "Type System"],
    featured: true,
  },

  // React
  {
    title: "React Docs",
    description:
      "The new React docs (react.dev) are genuinely great, interactive, modern, and don't assume you already know React. A complete rewrite done right.",
    url: "https://react.dev",
    languages: ["React", "JavaScript", "TypeScript"],
    source: "Meta",
    tags: ["Components", "Hooks", "Official"],
    featured: true,
  },
  {
    title: "Next.js Docs",
    description:
      "React's most popular production framework. App Router, server components, API routes, edge functions, all documented by Vercel and kept current.",
    url: "https://nextjs.org/docs",
    languages: ["React", "TypeScript", "Full-Stack"],
    source: "Vercel",
    tags: ["Framework", "SSR", "API Routes"],
    featured: true,
  },
  {
    title: "shadcn/ui",
    description:
      "Not a component library, it's components you own. Copy-paste Radix primitives with Tailwind styling. The ecosystem around this grew fast for good reason.",
    url: "https://ui.shadcn.com",
    languages: ["Design"],
    source: "Open Source",
    tags: ["Components", "Tailwind", "Accessible"],
    featured: true,
  },
  {
    title: "Zustand Docs",
    description:
      "State management without the ceremony. Zustand's docs are minimal because the API is minimal, in a good way.",
    url: "https://docs.pmnd.rs/zustand",
    languages: ["React", "TypeScript"],
    source: "Open Source",
    tags: ["State Management", "Lightweight", "React"],
  },
  {
    title: "TanStack Query",
    description:
      "Formerly React Query. Server state management that makes data fetching, caching, and syncing feel obvious. Docs include solid patterns and migration guides.",
    url: "https://tanstack.com/query/latest",
    languages: ["React", "TypeScript"],
    source: "Open Source",
    tags: ["Data Fetching", "Caching", "State"],
  },
  {
    title: "Remix Docs",
    description:
      "React framework built around web fundamentals, forms, loaders, progressive enhancement. Great alternative to Next.js with a different set of tradeoffs.",
    url: "https://remix.run/docs",
    languages: ["React", "TypeScript", "Full-Stack"],
    source: "Shopify",
    tags: ["Framework", "SSR", "Web Standards"],
  },
  {
    title: "Framer Motion",
    description:
      "The animation library React developers actually enjoy using. Great docs with live examples that show you exactly what each prop does.",
    url: "https://www.framer.com/motion",
    languages: ["React", "TypeScript"],
    source: "Framer",
    tags: ["Animation", "UI", "Interactions"],
  },

  // Python
  {
    title: "Python Docs",
    description:
      "The official Python documentation. Comprehensive, well-maintained, and the source of truth for the language and standard library.",
    url: "https://docs.python.org/3",
    languages: ["Python"],
    source: "Python PSF",
    tags: ["Reference", "Standard Library", "Official"],
    featured: true,
  },
  {
    title: "Real Python",
    description:
      "In-depth Python tutorials written by actual practitioners. Covers everything from beginner syntax to async programming, testing, and data science.",
    url: "https://realpython.com",
    languages: ["Python"],
    source: "Community",
    tags: ["Tutorials", "Intermediate", "Advanced"],
    featured: true,
  },
  {
    title: "FastAPI Docs",
    description:
      "One of the best-documented frameworks of any language. Building a production API with Python has never been this friction-free.",
    url: "https://fastapi.tiangolo.com",
    languages: ["Python", "Full-Stack"],
    source: "Community",
    tags: ["Framework", "API", "Async"],
  },
  {
    title: "Django Docs",
    description:
      "The batteries-included Python web framework. Legendary documentation, detailed, well-structured, and thorough enough to answer most questions without Googling.",
    url: "https://docs.djangoproject.com",
    languages: ["Python", "Full-Stack"],
    source: "Django Project",
    tags: ["Framework", "ORM", "Backend"],
  },
  {
    title: "Automate the Boring Stuff",
    description:
      "A free, practical Python book focused on real-world automation tasks. Perfect for people who want Python to actually do something useful for them.",
    url: "https://automatetheboringstuff.com",
    languages: ["Python"],
    source: "Open Source",
    tags: ["Automation", "Beginner", "Book"],
  },
  {
    title: "NumPy Docs",
    description:
      "The foundation of the Python data science stack. Solid official docs with examples, tutorials, and reference for every function.",
    url: "https://numpy.org/doc",
    languages: ["Python"],
    source: "NumFOCUS",
    tags: ["Data Science", "Math", "Arrays"],
  },
  {
    title: "Pandas Docs",
    description:
      "Data manipulation in Python. The official docs are dense but thorough, with a user guide that walks through real workflows.",
    url: "https://pandas.pydata.org/docs",
    languages: ["Python"],
    source: "NumFOCUS",
    tags: ["Data Science", "DataFrames", "Analysis"],
  },
  {
    title: "Pydantic Docs",
    description:
      "Data validation using Python type hints. If you're building anything with FastAPI or handling external data, you'll live in these docs.",
    url: "https://docs.pydantic.dev",
    languages: ["Python"],
    source: "Open Source",
    tags: ["Validation", "Types", "FastAPI"],
  },
  {
    title: "Python Cookbook (O'Reilly)",
    description:
      "A collection of practical recipes for common Python tasks. Not free, but worth it, dense with patterns that don't show up in tutorials.",
    url: "https://www.oreilly.com/library/view/python-cookbook-3rd/9781449357337",
    languages: ["Python"],
    source: "O'Reilly",
    tags: ["Book", "Advanced", "Patterns"],
  },

  // Go
  {
    title: "Go by Example",
    description:
      "Hands-on Go through annotated examples, goroutines, channels, interfaces, testing. Short, scannable, and surprisingly complete.",
    url: "https://gobyexample.com",
    languages: ["Go"],
    source: "Community",
    tags: ["Concurrency", "Beginner", "Examples"],
    featured: true,
  },
  {
    title: "The Go Programming Language Book",
    description:
      "The definitive Go book, written by the creators of the language. Dense in all the right ways, explains the 'why' behind Go's design decisions.",
    url: "https://www.gopl.io",
    languages: ["Go"],
    source: "Addison-Wesley",
    tags: ["Book", "Intermediate", "Deep Dive"],
  },
  {
    title: "Go Documentation",
    description:
      "Official Go docs, spec, and standard library reference. Clean and minimal, like the language itself.",
    url: "https://go.dev/doc",
    languages: ["Go"],
    source: "Google",
    tags: ["Official", "Reference", "Standard Library"],
  },
  {
    title: "Go Tour",
    description:
      "The official interactive Go tour. Runs in the browser, explains the language feature by feature. Best starting point for Go beginners.",
    url: "https://go.dev/tour",
    languages: ["Go"],
    source: "Google",
    tags: ["Beginner", "Interactive", "Official"],
  },
  {
    title: "Effective Go",
    description:
      "The official guide on writing idiomatic Go. Short but high-density, every Go developer should read this early.",
    url: "https://go.dev/doc/effective_go",
    languages: ["Go"],
    source: "Google",
    tags: ["Best Practices", "Idiomatic", "Reference"],
  },

  // Rust
  {
    title: "The Rust Book",
    description:
      "Officially called 'The Rust Programming Language', but everyone calls it the Rust Book. Free, thorough, and one of the best language books in existence.",
    url: "https://doc.rust-lang.org/book",
    languages: ["Rust"],
    source: "Rust Foundation",
    tags: ["Book", "Beginner", "Official"],
    featured: true,
  },
  {
    title: "Rustlings",
    description:
      "Small exercises to get you used to reading and writing Rust. The best way to actually internalize the borrow checker instead of just reading about it.",
    url: "https://github.com/rust-lang/rustlings",
    languages: ["Rust"],
    source: "Rust Foundation",
    tags: ["Exercises", "Beginner", "Interactive"],
  },
  {
    title: "Rust by Example",
    description:
      "Like Go by Example, but for Rust. Learn through annotated runnable examples directly in the browser.",
    url: "https://doc.rust-lang.org/rust-by-example",
    languages: ["Rust"],
    source: "Rust Foundation",
    tags: ["Examples", "Beginner", "Intermediate"],
  },
  {
    title: "Async Rust Book",
    description:
      "The official guide to async programming in Rust. Covers futures, tokio, and the concurrency model. Required reading if you're building async Rust.",
    url: "https://rust-lang.github.io/async-book",
    languages: ["Rust"],
    source: "Rust Foundation",
    tags: ["Async", "Advanced", "Concurrency"],
  },
  {
    title: "Zero to Production in Rust",
    description:
      "Building a production email newsletter backend from scratch in Rust. Opinionated, practical, and genuinely teaches you how to ship real software.",
    url: "https://www.zero2prod.com",
    languages: ["Rust"],
    source: "Community",
    tags: ["Backend", "Advanced", "Book"],
  },

  // C / C++
  {
    title: "cppreference.com",
    description:
      "The de facto C and C++ reference. Every standard library function, every language feature, every version. Bookmark it.",
    url: "https://en.cppreference.com",
    languages: ["C", "C++"],
    source: "Community",
    tags: ["Reference", "Standard Library", "Official"],
    featured: true,
  },
  {
    title: "learncpp.com",
    description:
      "A free, comprehensive C++ tutorial site that's better than most paid courses. Goes deep on memory, OOP, templates, and modern C++.",
    url: "https://www.learncpp.com",
    languages: ["C++"],
    source: "Community",
    tags: ["Beginner", "Intermediate", "Tutorials"],
  },
  {
    title: "CS50x",
    description:
      "Harvard's legendary intro CS course. Teaches C first, then Python and web. Brutal in the best way, free on edX.",
    url: "https://cs50.harvard.edu/x",
    languages: ["C", "Python", "JavaScript", "HTML", "CSS"],
    source: "Harvard",
    tags: ["Beginner", "Course", "Algorithms"],
  },
  {
    title: "The C Programming Language (K&R)",
    description:
      "The original C book, written by Kernighan and Ritchie. Short, dense, and still relevant. If you want to understand C properly, read this.",
    url: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628",
    languages: ["C"],
    source: "Prentice Hall",
    tags: ["Book", "Classic", "Fundamentals"],
  },

  // Java
  {
    title: "Java Documentation",
    description:
      "Oracle's official Java docs. Comprehensive reference for the language, JVM, and standard library, everything from primitives to concurrency utilities.",
    url: "https://docs.oracle.com/en/java",
    languages: ["Java"],
    source: "Oracle",
    tags: ["Official", "Reference", "Standard Library"],
    featured: true,
  },
  {
    title: "Baeldung",
    description:
      "The go-to resource for practical Java and Spring tutorials. Covers real-world patterns, framework integrations, and backend development in depth.",
    url: "https://www.baeldung.com",
    languages: ["Java"],
    source: "Community",
    tags: ["Spring", "Backend", "Tutorials"],
  },
  {
    title: "Spring Framework Docs",
    description:
      "Official documentation for the Spring ecosystem, Spring Boot, Spring Security, Spring Data. Thorough and kept current with each release.",
    url: "https://spring.io/docs",
    languages: ["Java"],
    source: "VMware",
    tags: ["Framework", "Spring Boot", "Backend"],
  },
  {
    title: "Effective Java",
    description:
      "Joshua Bloch's masterpiece on writing great Java code. 90 items, each with a concrete rule and the reasoning behind it. Essential reading.",
    url: "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097",
    languages: ["Java"],
    source: "O'Reilly",
    tags: ["Book", "Best Practices", "Advanced"],
  },

  // Kotlin
  {
    title: "Kotlin Docs",
    description:
      "Official Kotlin documentation from JetBrains. Well-organized and covers the language, multiplatform, coroutines, and Android integration.",
    url: "https://kotlinlang.org/docs",
    languages: ["Kotlin"],
    source: "JetBrains",
    tags: ["Official", "Reference", "Android"],
    featured: true,
  },
  {
    title: "Kotlin Koans",
    description:
      "Interactive exercises built into IntelliJ or available online. Best way to get hands-on with Kotlin syntax without starting a full project.",
    url: "https://kotlinlang.org/docs/koans.html",
    languages: ["Kotlin"],
    source: "JetBrains",
    tags: ["Beginner", "Exercises", "Interactive"],
  },
  {
    title: "Android Developer Guides",
    description:
      "Google's official Android development documentation. Covers Jetpack Compose, architecture components, and modern Android patterns.",
    url: "https://developer.android.com/guide",
    languages: ["Kotlin", "Java"],
    source: "Google",
    tags: ["Android", "Mobile", "Jetpack Compose"],
  },

  // Swift
  {
    title: "Swift Documentation",
    description:
      "Apple's official Swift docs, language reference, Swift Evolution proposals, and the standard library. Essential bookmarks for iOS and macOS development.",
    url: "https://swift.org/documentation",
    languages: ["Swift"],
    source: "Apple",
    tags: ["Official", "Reference", "iOS"],
    featured: true,
  },
  {
    title: "Hacking with Swift",
    description:
      "Paul Hudson's free tutorials are the gold standard for learning Swift and iOS. Hundreds of projects, always kept up to date with the latest APIs.",
    url: "https://www.hackingwithswift.com",
    languages: ["Swift"],
    source: "Community",
    tags: ["iOS", "Tutorials", "Projects"],
    featured: true,
  },
  {
    title: "Apple Developer Documentation",
    description:
      "SwiftUI, UIKit, AppKit, all Apple framework documentation in one place. The API reference is exhaustive and the sample code is actually useful.",
    url: "https://developer.apple.com/documentation",
    languages: ["Swift"],
    source: "Apple",
    tags: ["SwiftUI", "iOS", "macOS"],
  },
  {
    title: "Swift by Sundell",
    description:
      "In-depth articles on Swift, SwiftUI, and iOS architecture. John Sundell writes with clarity and covers topics you won't find in the official docs.",
    url: "https://www.swiftbysundell.com",
    languages: ["Swift"],
    source: "Community",
    tags: ["Articles", "Intermediate", "Architecture"],
  },

  // PHP
  {
    title: "PHP Documentation",
    description:
      "The official PHP manual, complete function reference, guides, and migration notes. The community-contributed notes at the bottom of each page are often gold.",
    url: "https://www.php.net/docs.php",
    languages: ["PHP"],
    source: "PHP Group",
    tags: ["Official", "Reference", "Standard Library"],
    featured: true,
  },
  {
    title: "Laravel Docs",
    description:
      "Laravel has some of the best documentation in the PHP world. Clean, opinionated, always reflects the latest version. Covers everything from Eloquent to queues.",
    url: "https://laravel.com/docs",
    languages: ["PHP"],
    source: "Laravel",
    tags: ["Framework", "Backend", "Eloquent"],
  },
  {
    title: "PHP: The Right Way",
    description:
      "A community guide to modern PHP best practices. Counteracts the years of bad PHP tutorials on the internet. Read this before you write a line of PHP.",
    url: "https://phptherightway.com",
    languages: ["PHP"],
    source: "Community",
    tags: ["Best Practices", "Intermediate", "Modern PHP"],
  },

  // Ruby
  {
    title: "Ruby Documentation",
    description:
      "Official Ruby language reference and core library docs. The core API docs are thorough and the 'Getting Started' guides are beginner-friendly.",
    url: "https://www.ruby-lang.org/en/documentation",
    languages: ["Ruby"],
    source: "Ruby Community",
    tags: ["Official", "Reference", "Standard Library"],
  },
  {
    title: "Ruby on Rails Guides",
    description:
      "The official Rails guides are a benchmark for framework documentation. Covers every part of Rails in depth, with real examples and practical explanations.",
    url: "https://guides.rubyonrails.org",
    languages: ["Ruby"],
    source: "Rails Core",
    tags: ["Framework", "Full-Stack", "MVC"],
    featured: true,
  },
  {
    title: "The Odin Project, Ruby Path",
    description:
      "The Odin Project's Ruby and Rails curriculum. Project-based, free, and one of the best ways to actually learn Ruby in a structured way.",
    url: "https://www.theodinproject.com/paths/full-stack-ruby-on-rails",
    languages: ["Ruby"],
    source: "Open Source",
    tags: ["Beginner", "Curriculum", "Projects"],
  },

  // SQL & Databases
  {
    title: "SQLZoo",
    description:
      "Interactive SQL tutorials that run in the browser. Start from SELECT basics and work up to window functions. No setup required.",
    url: "https://sqlzoo.net",
    languages: ["Database"],
    source: "Community",
    tags: ["Beginner", "Interactive", "Exercises"],
    featured: true,
  },
  {
    title: "PostgreSQL Docs",
    description:
      "The PostgreSQL manual is famously excellent. Detailed, accurate, and searchable. If you're using Postgres, bookmark this before anything else.",
    url: "https://www.postgresql.org/docs",
    languages: ["Database"],
    source: "PostgreSQL Global Group",
    tags: ["Reference", "Advanced", "Database"],
  },
  {
    title: "Use The Index, Luke",
    description:
      "A free guide to SQL performance and indexing that explains why your queries are slow and how to fix them. Vendor-neutral and genuinely practical.",
    url: "https://use-the-index-luke.com",
    languages: ["Database"],
    source: "Community",
    tags: ["Performance", "Indexing", "Advanced"],
  },
  {
    title: "Prisma Docs",
    description:
      "Type-safe ORM for TypeScript and JavaScript. The Prisma docs include a great intro to database concepts alongside the API reference.",
    url: "https://www.prisma.io/docs",
    languages: ["Database"],
    source: "Prisma",
    tags: ["ORM", "Database", "TypeScript"],
  },
  {
    title: "MongoDB Docs",
    description:
      "Official MongoDB documentation. Covers CRUD, aggregation pipelines, indexing, and Atlas. Comprehensive and well-organized.",
    url: "https://www.mongodb.com/docs",
    languages: ["Database"],
    source: "MongoDB",
    tags: ["NoSQL", "Database", "Reference"],
  },

  // CSS/TW & Design
  {
    title: "Tailwind CSS Docs",
    description:
      "Utility-first CSS that either clicks immediately or confuses you at first, either way, the docs will sort you out. Best-in-class search and examples.",
    url: "https://tailwindcss.com/docs",
    languages: ["Design", "React", "CSS"],
    source: "Tailwind Labs",
    tags: ["CSS", "Utilities", "Styling"],
    featured: true,
  },
  {
    title: "CSS-Tricks",
    description:
      "Years of CSS deep dives, guides, and almanac entries. The Flexbox and Grid guides here are some of the best on the internet.",
    url: "https://css-tricks.com",
    languages: ["Design", "CSS"],
    source: "Community",
    tags: ["CSS", "Layout", "Reference"],
  },
  {
    title: "Figma Community",
    description:
      "Free UI kits, templates, icons, and design systems made by designers for designers. Save hours by not reinventing every component.",
    url: "https://figma.com/community",
    languages: ["Design"],
    source: "Figma",
    tags: ["UI/UX", "Templates", "Assets"],
    featured: true,
  },
  {
    title: "Radix UI",
    description:
      "Unstyled, accessible component primitives for React. If you're building a custom design system, this is where you start.",
    url: "https://www.radix-ui.com",
    languages: ["React", "Design"],
    source: "WorkOS",
    tags: ["Components", "Accessible", "Headless"],
  },
  {
    title: "Coolors",
    description:
      "A color palette generator that makes picking harmonious colors genuinely painless. Useful for anyone building something that needs to look good.",
    url: "https://coolors.co",
    languages: ["Design"],
    source: "Community",
    tags: ["Colors", "Palettes", "Tools"],
  },
  {
    title: "Google Fonts",
    description:
      "Free, open-source fonts ready to drop into any project. The knowledge panel shows type pairing suggestions and rendering previews.",
    url: "https://fonts.google.com",
    languages: ["Design"],
    source: "Google",
    tags: ["Typography", "Fonts", "Free"],
  },
  {
    title: "Lucide Icons",
    description:
      "Clean, consistent open-source icons with React, Vue, and vanilla JS packages. The icon set shadcn/ui ships with, easy reason to use it.",
    url: "https://lucide.dev",
    languages: ["Design", "React"],
    source: "Open Source",
    tags: ["Icons", "SVG", "Components"],
  },
  {
    title: "Reicon",
    description:
      "Open‑source vector icons, illustrations & brand logos for React, Vue, Svelte, Flutter, Figma, and AI agents.",
    url: "https://reicon.dev/",
    languages: ["Design"],
    source: "Open Source",
    tags: ["Icons", "Illustrations", "SVG"],
  },

  // DevOps & Cloud
  {
    title: "Docker Docs",
    description:
      "Official Docker documentation covering containers, Compose, networking, and volumes. Well-structured with great getting-started guides.",
    url: "https://docs.docker.com",
    languages: ["DevOps"],
    source: "Docker",
    tags: ["Containers", "DevOps", "Reference"],
    featured: true,
  },
  {
    title: "Kubernetes Docs",
    description:
      "The official K8s documentation. Intimidating at first, but the concepts sections are excellent once you've got basic container knowledge.",
    url: "https://kubernetes.io/docs",
    languages: ["DevOps"],
    source: "CNCF",
    tags: ["Orchestration", "Cloud", "Advanced"],
  },
  {
    title: "AWS Documentation",
    description:
      "Amazon's complete documentation for all AWS services. Overwhelming by design, but the service-specific guides and workshops are legitimately useful.",
    url: "https://docs.aws.amazon.com",
    languages: ["DevOps"],
    source: "Amazon",
    tags: ["Cloud", "Infrastructure", "Reference"],
  },
  {
    title: "Terraform Docs",
    description:
      "HashiCorp's infrastructure-as-code tool, fully documented. The registry has provider docs for every cloud platform you'd realistically use.",
    url: "https://developer.hashicorp.com/terraform/docs",
    languages: ["DevOps"],
    source: "HashiCorp",
    tags: ["IaC", "Infrastructure", "Cloud"],
  },
  {
    title: "GitHub Actions Docs",
    description:
      "CI/CD built into GitHub. The official docs cover workflow syntax, actions marketplace, secrets, and runners in full detail.",
    url: "https://docs.github.com/en/actions",
    languages: ["DevOps"],
    source: "GitHub",
    tags: ["CI/CD", "Automation", "Pipelines"],
  },
  {
    title: "KodeKloud",
    description:
      "Hands-on DevOps labs that run in your browser, no local setup. Great structured paths for Docker, K8s, Linux, and Terraform.",
    url: "https://kodekloud.com",
    languages: ["DevOps"],
    source: "Online Platform",
    tags: ["Labs", "Hands-On", "Certification"],
  },

  // Git & Tooling
  {
    title: "Pro Git Book",
    description:
      "The definitive Git book, free online. Goes far deeper than 'git add, commit, push', rebasing, internals, workflows, and everything in between.",
    url: "https://git-scm.com/book",
    languages: ["Git"],
    source: "Open Source",
    tags: ["Book", "Reference", "Version Control"],
    featured: true,
  },
  {
    title: "Oh My Git!",
    description:
      "A game that teaches you Git through visual, interactive challenges. Surprisingly effective, the branching visualization alone is worth it.",
    url: "https://ohmygit.org",
    languages: ["Git"],
    source: "Open Source",
    tags: ["Game", "Beginner", "Interactive"],
  },
  {
    title: "Conventional Commits",
    description:
      "A spec for writing commit messages that both humans and tools can parse. If your team's git history is a mess, start here.",
    url: "https://www.conventionalcommits.org",
    languages: ["Git"],
    source: "Community",
    tags: ["Best Practices", "Standards", "Tooling"],
  },
  {
    title: "Excalidraw",
    description:
      "Virtual whiteboard for rough system design sketches and architecture diagrams. Collaborative, browser-based, and exports cleanly.",
    url: "https://excalidraw.com",
    languages: ["Design"],
    source: "Open Source",
    tags: ["Diagrams", "Collaboration", "System Design"],
  },

  // CS Algorithms
  {
    title: "LeetCode",
    description:
      "The standard platform for practicing algorithmic problems. If you're prepping for technical interviews, you'll end up here, better to come voluntarily.",
    url: "https://leetcode.com",
    languages: [
      "Python",
      "Java",
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "Go",
      "Rust",
      "Swift",
      "Kotlin",
      "Ruby",
      "PHP",
    ],
    source: "Community",
    tags: ["Algorithms", "Interviews", "Practice"],
    featured: true,
  },
  {
    title: "Neetcode.io",
    description:
      "Structured roadmap through LeetCode with video explanations. The curated problem list cuts through the noise of thousands of LeetCode problems.",
    url: "https://neetcode.io",
    languages: ["Python", "JavaScript", "Java", "C++"],
    source: "Community",
    tags: ["Algorithms", "Interviews", "Roadmap"],
  },
  {
    title: "Visualgo",
    description:
      "Visualizations of data structures and algorithms. Watching a sorting algorithm run in slow motion makes it click faster than reading about it.",
    url: "https://visualgo.net",
    languages: ["JavaScript"],
    source: "Academic",
    tags: ["Algorithms", "Visualization", "Data Structures"],
  },
  {
    title: "roadmap.sh",
    description:
      "Community-driven roadmaps for frontend, backend, DevOps, and more. Useful for identifying gaps in your knowledge and figuring out what to learn next.",
    url: "https://roadmap.sh",
    languages: [
      "JavaScript",
      "Python",
      "TypeScript",
      "Java",
      "C++",
      "Rust",
      "Go",
      "Full-Stack",
      "DevOps",
    ],
    source: "Open Source",
    tags: ["Learning Path", "Roadmap", "Career"],
    featured: true,
  },
  {
    title: "Teach Yourself CS",
    description:
      "A self-study guide to the core computer science curriculum, with the best freely available books and videos for each subject.",
    url: "https://teachyourselfcs.com",
    languages: ["C", "Python", "Database"],
    source: "Community",
    tags: ["CS Fundamentals", "Curriculum", "Self-Study"],
  },
  {
    title: "MIT OpenCourseWare",
    description:
      "Free lecture notes, problem sets, and videos from MIT's actual CS courses. 6.006 Algorithms and 6.824 Distributed Systems are community favorites.",
    url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science",
    languages: ["Python", "C"],
    source: "MIT",
    tags: ["Academic", "Algorithms", "Systems"],
  },

  // AI / ML
  {
    title: "fast.ai",
    description:
      "Practical deep learning from the top down, build things first, understand the theory after. Completely free and one of the most respected ML courses anywhere.",
    url: "https://fast.ai",
    languages: ["Python"],
    source: "fast.ai",
    tags: ["Deep Learning", "AI", "Course"],
    featured: true,
  },
  {
    title: "Hugging Face Docs",
    description:
      "The hub for open-source AI, transformers, datasets, spaces, and the model hub. If you're working with LLMs or ML models, you're going to live here.",
    url: "https://huggingface.co/docs",
    languages: ["Python"],
    source: "Hugging Face",
    tags: ["AI", "LLMs", "Machine Learning"],
  },
  {
    title: "Andrej Karpathy's YouTube",
    description:
      "Neural networks from scratch, explained clearly by someone who helped build GPT. The 'Neural Networks: Zero to Hero' series is as good as it gets.",
    url: "https://www.youtube.com/@AndrejKarpathy",
    languages: ["Python"],
    source: "YouTube",
    tags: ["AI", "Neural Networks", "Deep Dive"],
    featured: true,
  },
  {
    title: "LangChain Docs",
    description:
      "Framework for building LLM-powered applications. Covers chains, agents, RAG pipelines, and tool integrations, the ecosystem is large and the docs keep up.",
    url: "https://python.langchain.com/docs",
    languages: ["Python", "TypeScript"],
    source: "LangChain",
    tags: ["AI", "LLMs", "Agents"],
  },

  // Community
  {
    title: "Dev.to",
    description:
      "A developer blogging platform where people share tutorials, opinions, and project writeups. High variance, but the good stuff is really good.",
    url: "https://dev.to",
    languages: ["JavaScript", "Python", "Full-Stack"],
    source: "Community",
    tags: ["Articles", "Community", "Tutorials"],
  },
  {
    title: "Hacker News",
    description:
      "The tech industry's front page. More links to papers and long-form essays than memes. The comment section is uneven but occasionally brilliant.",
    url: "https://news.ycombinator.com",
    languages: [],
    source: "Y Combinator",
    tags: ["News", "Discussion", "Industry"],
  },
  {
    title: "Stack Overflow",
    description:
      "You already know. The answer to your bug is probably here, posted in 2013. The new AI features are hit-or-miss, but the archive is irreplaceable.",
    url: "https://stackoverflow.com",
    languages: ["JavaScript", "Python", "Java", "C++"],
    source: "Community",
    tags: ["Q&A", "Reference", "Debugging"],
  },
];
