import data from "@/lib/staticdata.config";
const { github, email } = data;

export interface Page {
  slug: string;
  title: string;
  section: string;
  description: string;
  lastUpdated: "May 17, 2026";
  readingTime: string;
  content: PageContent[];
}

export interface PageContent {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "code" | "callout";
  text?: string;
  items?: string[];
  variant?: "info" | "warning" | "danger";
}

export interface PageSection {
  title: string;
  pages: { slug: string; title: string }[];
}

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
      { slug: "bots/adding", title: "Adding a Bot" },
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

export const pages: Page[] = [
  // ─── COMMUNITY
  {
    slug: "getting-started",
    title: "Getting Started",
    section: "Community",
    description: "Your first steps in the DevHub Discord community.",
    lastUpdated: "May 17, 2026",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Welcome to DevHub, a community built by developers, for developers. Whether you just graduated a bootcamp, have been writing code for 15 years, or are somewhere in the middle, you're in the right place. Here's how to get settled in.",
      },
      { type: "h2", text: "Step 1: Join the Discord" },
      {
        type: "p",
        text: 'Click the "Join Discord" button on the top navbar. You\'ll land in #welcome. read #intro, it has everything you need to know in one place.',
      },
      { type: "h2", text: "Step 2: Read the Rules" },
      {
        type: "p",
        text: "Head to #rules and go through the community guidelines. It takes about 3 minutes and saves a lot of confusion later.",
      },
      { type: "h2", text: "Step 3: Grab Your Roles" },
      {
        type: "p",
        text: "Head to #reaction-roles and react to the message to self-assign roles based on your tech stack like Python, JavaScript, TypeScript, Go, Rust, C/C++, and many more. It people find you when they need someone with your skills.",
      },
      { type: "h2", text: "Step 4: Introduce Yourself" },
      {
        type: "p",
        text: "Drop a message in #introductions. No pressure to write an essay, just tell us your preferred name/nickname, favorite languages/tools/frameworks, areas of interest and your hobbies outside tech. People respond. It's a good place to start.",
      },
      { type: "h2", text: "Key Channels" },
      {
        type: "ul",
        items: [
          "#chat - general hangout for anything and everything",
          "#dev-chat - focused on development talk, projects, and sharing cool tech stuff",
          "#memes - because all work and no play isn't our style",
          "#games - multiplayer bot games, and talking about video games",
          "#media - sharing cool videos, pictures, podcasts, and other non-dev content",
          "#polls - community polls on fun and important topics",
          "#terminal - a bot channel where you can run any bot commands",
          "#skullboard - a channel where messages with many reactions get sent to",
          "#tech-news - sharing and discussing the latest news in tech, programming, and the industry",
          "#project-showcase - show off your projects, get feedback, and share what you're working on",
          "#coding-challenges - regular coding challenges and puzzles to sharpen your skills and have fun",
        ],
      },
      {
        type: "p",
        text: "And many many more. Explore the channels, see where the conversations are happening, and jump in when you find something interesting.",
      },
      { type: "h2", text: "Getting Help" },
      {
        type: "p",
        text: "Post in a relevant channel with your code, what it's supposed to do, and what's actually happening. Context matters, 'it doesn't work' gets fewer responses than 'it returns undefined when I expect a string'. Check out our How to Ask guide for the full rundown.",
      },
      { type: "h2", text: "A Few Things Worth Knowing Early" },
      {
        type: "ul",
        items: [
          "Lurking is fine. You don't have to post every day.",
          "No question is too beginner. Seriously, we have a no-gatekeeping policy.",
          "The community is genuinely friendly. If something feels off, ping a mod.",
        ],
      },
    ],
  },

  {
    slug: "server-info",
    title: "Server Info",
    section: "Community",
    description: "Everything you need to know about how DevHub is structured.",
    lastUpdated: "May 17, 2026",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "DevHub is a developer community on Discord. We're not affiliated with any company, not funded, and not trying to sell you anything. Just a space for people who build things with code.",
      },
      { type: "h2", text: "What DevHub Is" },
      {
        type: "p",
        text: "A community for developers of all levels and stacks, from people writing their first for loop to staff engineers with decades of scars. We have channels for help, project feedback, open source collaboration, job hunting, and general developer life.",
      },
      { type: "h2", text: "Server Structure" },
      {
        type: "ul",
        items: [
          "👋 Welcome, Rules & Server Info",
          "📣 Announcements, Events, Giveaways, GitHub Feed, and Partnerships with DevHub.",
          "💬 Introduction, General and Dev Chat, Memes, Games, Media, Polls, Terminal etc.",
          "🧑‍💻 Tech News, Project Showcase, Work-in-Progress, Ask-and-Discuss, Coding Challenges, Social Media Posts etc.",
          "💼 Web Dev, UI/UX, AI/ML, Game Dev, Bot Dev, Backend and APIs etc.",
          "🎤 Voice Channels (TempVoice)",
          "🔒 Staff, Internal mod channels, not visible to regular members.",
        ],
      },
      { type: "h2", text: "Roles" },
      {
        type: "p",
        text: "Roles in DevHub serve two purposes: they show what you're into, and they gate certain channels to keep them relevant. Use /roles to assign yourself from the self-serve menu.",
      },
      {
        type: "ul",
        items: [
          "Tech Stack Roles - JavaScript, Python, Rust, Go, Java, etc.",
          "Interest Roles - DevOps, AI/ML, Game Dev, Mobile, Design, Open Source.",
          "Experience Roles - Beginner, Junior, Intermediate, Advanced, Expert.",
          "Ping Roles - Announcements, Polls, Events, Giveaways, OSS Projects etc.",
          "Level Roles - lvl 1, lvl 5, lvl 10, lvl 15, etc.",
          "Activity Roles - Peak Active, Honorable Avtive, etc.",
          "Special Roles - VIP, Nitro Booster, GitHub Contributor, Early Supporter, Partnered Server Owner, Bot Jam Event 2026 etc.",
          "Staff Roles - Supporter, Staff, Mod, Admin etc.",
        ],
      },
      { type: "h2", text: "Moderation" },
      {
        type: "p",
        text: "We have a small team of volunteer moderators and a couple of admins. Mods handle day-to-day enforcement. Admins handle appeals, bans, and larger decisions. The Owner makes final calls on structural things.",
      },
      {
        type: "callout",
        variant: "info",
        text: "To contact the staff team: Open a ticket (recommended) or DM ModMail bot.",
      },
      { type: "h2", text: "Events and Giveaways" },
      {
        type: "p",
        text: "We run occasional events, code jams, and giveaways like Discord Nitro. Watch #events for upcoming events, and #giveaways for any giveaways.",
      },
    ],
  },

  {
    slug: "how-to-ask",
    title: "How to Ask for Help",
    section: "Community",
    description:
      "How to write a good help request so you actually get useful answers.",
    lastUpdated: "May 17, 2026",
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Getting good help is a skill. Not because people are stingy with their time, they're not, but because a vague question makes it hard to help you. This guide will help you write help requests that actually get answered.",
      },
      { type: "h2", text: "The Short Version" },
      {
        type: "ul",
        items: [
          "Describe what you're trying to do",
          "Show the relevant code (formatted, please)",
          "Share the exact error message or unexpected output",
          "Tell us what you've already tried",
          "Ask in the right channel",
        ],
      },
      { type: "h2", text: "What a Good Help Request Looks Like" },
      {
        type: "p",
        text: "Good: \"I'm trying to fetch data from an API in useEffect, but my state is always empty on the first render even though the data logs correctly inside the callback. Here's the code: [code block]. I've tried adding the variable to the dependency array and it didn't change anything.\"",
      },
      {
        type: "p",
        text: 'Not as helpful: "my code doesn\'t work help"',
      },
      {
        type: "p",
        text: "Both questions come from a real place of being stuck. The first one just gives helpers something to work with.",
      },
      { type: "h2", text: "Format Your Code" },
      {
        type: "p",
        text: "Paste code inside a code block using triple backticks and the language name. Discord renders it with syntax highlighting and preserves indentation.",
      },
      {
        type: "code",
        text: "```javascript\nconst example = () => {\n  return 'this is readable';\n};\n```",
      },
      {
        type: "p",
        text: "Pasting raw code without formatting makes it significantly harder to read and significantly less likely you'll get a fast answer.",
      },
      { type: "h2", text: "Include the Error Message" },
      {
        type: "p",
        text: "Copy the full error, stack trace included. The line number in a stack trace often points directly at the problem. Screenshots of errors are okay, but text is better because people can search and quote it.",
      },
      { type: "h2", text: "Tell Us What You've Tried" },
      {
        type: "p",
        text: "This isn't gatekeeping, it's practical. If you've already tried restarting the server, reinstalling the package, and checking the docs, say so. It saves everyone from suggesting things you've already ruled out.",
      },
      { type: "h2", text: "Minimal Reproducible Example" },
      {
        type: "p",
        text: "If your codebase is large, try to reduce the problem to the smallest piece of code that still shows the bug. This is good debugging practice anyway, often, the act of isolating the problem leads you to the answer before anyone else can.",
      },
      { type: "h2", text: "Choosing the Right Channel" },
      {
        type: "p",
        text: "Posting in the right channel gets you in front of the people most likely to know the answer. If it's a question about React, post in #web-dev not #ai-ml. If you're unsure, ask in #dev-chat.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Don't DM people for help without asking first. Posting in the channel gives more people a chance to help you, and you'll usually get an answer faster.",
      },
      { type: "h2", text: "When You Figure It Out" },
      {
        type: "p",
        text: "Post the solution. Even a short 'figured it out, the issue was X' helps the next person who searches and finds your thread.",
      },
    ],
  },

  {
    slug: "how-to-help",
    title: "How to Help Others",
    section: "Community",
    description:
      "How to give useful, effective help without burning yourself out.",
    lastUpdated: "May 17, 2026",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Helping others is one of the most valuable things you can do in a developer community, and one of the best ways to solidify your own understanding. Here's how to do it well.",
      },
      { type: "h2", text: "You Don't Have to Know Everything" },
      {
        type: "p",
        text: "You can help someone who knows less than you do even if you're not an expert. Pointing someone in the right direction, suggesting what to search, or sharing a relevant doc is all genuinely helpful. You don't need to solve the whole problem yourself.",
      },
      { type: "h2", text: "Help Them Understand, Not Just Fix It" },
      {
        type: "p",
        text: "There's a difference between handing someone a fixed version of their code and helping them understand why it was broken. The second is more work, but it's what actually makes someone better. When possible, explain the 'why' not just the 'what'.",
      },
      { type: "h2", text: "Ask Clarifying Questions First" },
      {
        type: "p",
        text: "If the question is vague or missing context, ask before guessing. 'Can you share the exact error message?' or 'What framework are you using?' takes 5 seconds and saves 10 minutes of wrong-direction advice.",
      },
      { type: "h2", text: "Be Kind, Not Condescending" },
      {
        type: "p",
        text: "Everyone has been a beginner. Remember what it felt like to not know something you now consider obvious. 'That's a beginner mistake' is never a useful thing to say. Just answer the question.",
      },
      { type: "h2", text: "Don't Just Drop a Link" },
      {
        type: "p",
        text: "Linking to documentation is great, but 'read the docs' with no context leaves the person exactly where they were. Link the specific section that answers their question, and add a sentence explaining what they'll find there.",
      },
      { type: "h2", text: "Code Reviews vs Quick Fixes" },
      {
        type: "p",
        text: "In #help, people usually just need the thing to work. In #code-review, they're asking for deeper feedback, architecture, readability, patterns. Calibrate your response to what was asked for.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Consistent helpers get the 'Helper' community role, a thank-you from the team and a visible indicator that you're someone people can trust for good answers.",
      },
      { type: "h2", text: "Know When to Step Back" },
      {
        type: "p",
        text: "If a thread is already being handled well, you don't need to pile on. If the problem is clearly above your current knowledge level, it's okay to say 'I'm not sure about this one' rather than guessing and sending someone down the wrong path.",
      },
      { type: "h2", text: "It's Okay to Set Limits" },
      {
        type: "p",
        text: "You're a volunteer. You don't owe anyone an hour of your time or a complete solution. Help when you have the energy and the knowledge, and don't let it burn you out.",
      },
    ],
  },

  {
    slug: "code-of-conduct",
    title: "Code of Conduct",
    section: "Community",
    description: "How we treat each other, and what happens when we don't.",
    lastUpdated: "May 17, 2026",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "DevHub is a place for developers to learn, build, and collaborate. To keep it that way, useful and welcoming for everyone, we need a shared understanding of how we treat each other. This is that document.",
      },
      { type: "h2", text: "The Simple Version" },
      {
        type: "p",
        text: "Treat people like people. Engage honestly and constructively. Don't make this place worse for others. That covers 95% of it.",
      },
      { type: "h2", text: "What This Community Is Built On" },
      {
        type: "p",
        text: "DevHub is open to developers regardless of experience level, background, identity, or what tools they use. That's not a PR statement, it's what makes the community actually useful. Experts learn from helping beginners. Beginners learn from watching experts disagree. That only works if everyone feels like they can show up.",
      },
      { type: "h2", text: "What We Expect" },
      {
        type: "ul",
        items: [
          "Treat people with basic respect, even when you disagree strongly.",
          "Critique ideas and code, not people.",
          "Accept feedback gracefully. Giving it well doesn't automatically make it easy to receive.",
          "Be patient with people who know less than you. Everyone was there once.",
          "Acknowledge when you're wrong. It's not a weakness.",
          "Use channels and tools as intended.",
        ],
      },
      { type: "h2", text: "What We Don't Tolerate" },
      {
        type: "ul",
        items: [
          "Harassment, bullying, or personal attacks, in public or in DMs.",
          "Discrimination based on gender, race, nationality, age, experience level, disability or religion.",
          "Doxxing, sharing someone's personal information without consent.",
          "Hate speech or content that dehumanizes people.",
          "Spam, unsolicited self-promotion, or flooding channels.",
          "Malicious links, malware, or phishing, inside the server or in DMs.",
          "Sexual or explicit content in any form.",
          "Attempting to evade moderation through alt accounts or loopholes.",
        ],
      },
      { type: "h2", text: "Healthy Disagreement" },
      {
        type: "p",
        text: "Tech people argue about things constantly, tabs vs spaces, which framework is best, whether dark mode is a personality. That's fine and often fun. What's not fine is when disagreement becomes contemptuous, personal, or designed to make someone feel unwelcome. You can be direct without being cruel.",
      },
      { type: "h2", text: "Enforcement" },
      {
        type: "p",
        text: "Violations are handled by the mod team on a case-by-case basis. Depending on severity, responses range from a quiet word to a temporary mute to a permanent ban. Bans can be appealed, see the Moderation Guide.",
      },
      {
        type: "callout",
        variant: "info",
        text: "To report something: Open a ticket or DM ModMail bot. If it's a single message, right click on it and select 'Report Message' under 'Apps' (Panda bot). All reports are handled confidentially.",
      },
      { type: "h2", text: "Good Faith" },
      {
        type: "p",
        text: "These rules aren't designed to be weaponized against people for minor things. Mods use judgment. If you make an honest mistake and handle it well, that matters. If you're actively trying to work around the rules, we'll notice that too.",
      },
    ],
  },

  {
    slug: "moderation-guide",
    title: "Moderation Guide",
    section: "Community",
    description:
      "How moderation works at DevHub, appeals, reports, and the team's approach.",
    lastUpdated: "May 17, 2026",
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "This guide is for everyone, not just the mod team. Understanding how moderation works helps you know what to expect, how to report things, and how to appeal if you think we got something wrong.",
      },
      { type: "h2", text: "Our Approach" },
      {
        type: "p",
        text: "We're not trying to catch people out. Mods are volunteers who genuinely want the server to be a good place. Most enforcement is proportionate, based on context, and gives people a chance to correct course before escalating.",
      },
      { type: "h2", text: "How We Respond to Rule Violations" },
      {
        type: "ul",
        items: [
          "Verbal warning, For minor or first-time violations.",
          "Formal warning, Logged. Repeat warnings lead to stronger action.",
          "Temporary mute, Can't send messages for a defined period.",
          "Suspend (temporary ban), Can't access the server's channels for a longer period, usually days to weeks.",
          "Permanent ban, Reserved for serious violations or repeat offenders who haven't adjusted.",
        ],
      },
      {
        type: "p",
        text: "These aren't rigid steps we go through in order. A first offense can result in a ban if it's serious enough. Context matters.",
      },
      { type: "h2", text: "How to Report Something" },
      {
        type: "ul",
        items: [
          "PandaBot's report command (context menu), Works in any channel. Sends an alert to the mod team.",
          "Open a ticket, For more detailed reports or if you want to stay anonymous.",
          "DM ModMail bot, Similar to opening a ticket but through DMs.",
        ],
      },
      {
        type: "p",
        text: "All reports are handled confidentially. We don't announce what actions we take in response to reports, that's private. If you report something and don't hear back, it doesn't mean nothing happened.",
      },
      { type: "h2", text: "Appealing a Decision" },
      {
        type: "p",
        text: "Think a moderation call was wrong? You can appeal. Here's how, in order:",
      },
      {
        type: "ol",
        items: [
          "Contact the moderator who handled the action, clearly and calmly. Most things can be resolved here.",
          "If you don't get a satisfactory response, escalate to an Admin via DM.",
          "If you believe there's bias or a serious process failure, contact the Owner.",
          "For bans, go to https://appeal.gg/dvh and submit an appeal form. This goes to the admin team for review.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Appeals made by publicly complaining in the server, DMing multiple staff members simultaneously, or using alt accounts to get around a ban will be denied. How you appeal matters.",
      },
      { type: "h2", text: "The Mod Team" },
      {
        type: "p",
        text: "Moderators are community members who volunteered for the role. They're not employees, they're not perfect, and they're doing this on their own time. Treat them accordingly. If a mod makes a mistake, they can be held accountable through the appeals process, not through harassment.",
      },
    ],
  },

  {
    slug: "faq",
    title: "FAQ",
    section: "Community",
    description: "Frequently asked questions about DevHub.",
    lastUpdated: "May 17, 2026",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Answers to the questions we see most often. If yours isn't here, ask in #chat or open a general support ticket.",
      },
      { type: "h2", text: "Do I need to be experienced to join?" },
      {
        type: "p",
        text: "Absolutely not. We have members who wrote their first line of code last week and members who've been building production systems for 20 years. The only thing we ask is that you're genuinely interested in learning and building.",
      },
      {
        type: "h2",
        text: "Can I share my project / portfolio / YouTube channel?",
      },
      {
        type: "p",
        text: "Yes, in the right place. Use #project-showcase for projects you've built, #media for youtube or other media content, Promotional posts in the wrong channels, or DM spam, will get removed and the user may face further consequences.",
      },
      { type: "h2", text: "How do I get roles?" },
      {
        type: "ul",
        items: [
          "Interest Roles (Web Development, UI/UX, AI/ML, Linux, Game Development, and more) - Choose during onboarding",
          "Community Roles (Hangout, Gaming, Coding Help, Code Buddy, etc.) - Choose during onboarding",
          "Experience Roles (Beginner, Intermediate, Advanced, Expert) - Choose during onboarding",
          "Notification Roles (Announcements, Events, Polls, Giveaways, Open Source Projects, Partnerships, etc.) - Optional ping roles",
          "Programming Language Roles (TypeScript, Python, Java, Go, C/C++, and more) - Self-assignable roles",
          "Level Roles (Level 1–100) - Earned through activity and participation via Arcane",
        ],
      },
      { type: "h2", text: "How do I get special roles?" },
      {
        type: "ul",
        items: [
          "VIP - Special recognition for notable community members",
          "Nitro Booster - Awarded to members boosting the server",
          "Helper - Given to members who consistently assist others in the community",
          "GitHub Contributor - Awarded for contributing to projects within the DevHub GitHub organization",
          "Bug Hunter - Given to members who discover or help fix bugs in DevHub bots and systems",
          "Early Supporter - Limited role for early active members before the server reaches 1,000 members",
          "Partnered Server Owner - Awarded to owners of official DevHub partner communities",
        ],
      },
      { type: "h2", text: "Can I advertise my server/product/service?" },
      {
        type: "p",
        text: "Not without staff approval. Unsolicited advertising or DM promotion is not allowed. If you have something you think the community would genuinely benefit from, reach out to the staff team with details and we'll consider it.",
      },
      { type: "h2", text: "Can I post job listings?" },
      {
        type: "p",
        text: "Yes, in #job-board. Be specific about what the role is, what it pays (or at minimum the range), and what the application process is. Low-effort listings or 'DM me for details' posts get removed.",
      },
      { type: "h2", text: "I got banned. Can I appeal?" },
      {
        type: "p",
        text: "Yes. Use https://appeal.gg/s/1429026875946172459. See the Moderation Guide for the full process. Bans aren't always permanent, context and how you handle the appeal matters.",
      },
      { type: "h2", text: "Who runs DevHub?" },
      {
        type: "p",
        text: "DevHub was started by a small group of developers and is run by a volunteer team of moderators and admins. There's no company behind it. The community owns it in the sense that matters.",
      },
      { type: "h2", text: "How do I suggest a feature or channel?" },
      {
        type: "p",
        text: "Use /suggest command form Panda bot, and it'll be posted in #suggestions. Good suggestions get more upvotes, and it'll be applied if it gets many upvotes and make sense for the community. We're genuinely open to input.",
      },
    ],
  },

  {
    slug: "acknowledgements",
    title: "Acknowledgements",
    section: "Community",
    description: "The people and tools that make DevHub possible.",
    lastUpdated: "May 17, 2026",
    readingTime: "3 min read",
    content: [
      {
        type: "p",
        text: "DevHub exists because a lot of people chose to put time and energy into it. This page is for saying thank you clearly.",
      },
      { type: "h2", text: "The Mod Team" },
      {
        type: "p",
        text: "The volunteer moderators who keep the server civil and welcoming, answer the same questions with patience every time, and handle the unglamorous work of enforcement, thank you. You make the difference between a Discord server and an actual community.",
      },
      { type: "h2", text: "Open Source Maintainers" },
      {
        type: "p",
        text: "Everyone who has opened a PR, reviewed someone else's code, filed a well-written issue, or improved documentation in a DevHub project. The projects exist because of you.",
      },
      { type: "h2", text: "Tools We Use" },
      {
        type: "ul",
        items: [
          "Discord, The platform the entire DevHub community runs on and communicates through.",
          "Next.js, Powers the DevHub website with a modern and fast React framework.",
          "Tailwind CSS, Used for building the site's clean, responsive, and customizable UI.",
          "TypeScript, Helps keep the codebase scalable, maintainable, and type-safe.",
          "Vercel, Hosts and deploys the DevHub website with seamless CI/CD integration.",
          "GitHub, Hosts the source code and manages issues, pull requests, and contributions.",
          "Node.js, Runs backend services, tooling, and development utilities across the project.",
          "Discord.js, Powers DevHub bots and integrations within the Discord ecosystem.",
          "ESLint & Prettier, Maintain consistent code quality and formatting across the project.",
        ],
      },
      { type: "h2", text: "Inspiration" },
      {
        type: "p",
        text: "Communities like The Programmer's Hangout, TCD, and The CodeVerse Hub showed what a good developer community can look like. We've learned from them.",
      },
      {
        type: "callout",
        variant: "info",
        text: "If you believe someone or something should be acknowledged here and isn't, open a PR on the website repo or let a repo maintainer know.",
      },
    ],
  },

  // ─── BOTS
  {
    slug: "bots",
    title: "Bots Overview",
    section: "Bots",
    description: "Overview of all bots running in the DevHub Discord server.",
    lastUpdated: "May 17, 2026",
    readingTime: "3 min read",
    content: [
      {
        type: "p",
        text: "DevHub uses a small, deliberate set of bots, enough to keep things running smoothly without turning every command into a guessing game. Here's what's running and what each one does.",
      },
      { type: "h2", text: "Active Bots" },
      { type: "h3", text: "Akinator" },
      {
        type: "p",
        text: "A game bot where members try to beat the famous mind-reading genie.",
      },
      {
        type: "p",
        text: "Great for casual fun, community interaction, and keeping chats active.",
      },
      { type: "h3", text: "Arcane" },
      {
        type: "p",
        text: "Leveling and activity tracking bot used to reward active members.",
      },
      {
        type: "p",
        text: "Handles XP, leaderboards, rank rewards, and progression roles.",
      },
      { type: "h3", text: "Bump Reminder" },
      {
        type: "p",
        text: "Automatically reminds members to bump the server on Disboard.",
      },
      { type: "p", text: "Helps improve server visibility and growth." },
      { type: "h3", text: "Dank Memer" },
      {
        type: "p",
        text: "A popular economy and meme bot packed with games, commands, and collectibles.",
      },
      {
        type: "p",
        text: "Used mainly for fun activities and community engagement.",
      },
      { type: "h3", text: "Disboard" },
      {
        type: "p",
        text: "Server listing platform used to help new members discover the community.",
      },
      {
        type: "p",
        text: "Members can bump the server regularly to improve visibility.",
      },
      { type: "h3", text: "Gartic Bot" },
      {
        type: "p",
        text: "Drawing and guessing game bot inspired by Gartic-style gameplay.",
      },
      {
        type: "p",
        text: "Perfect for events, voice chats, and casual hangouts.",
      },
      { type: "h3", text: "Giveaway Boat" },
      {
        type: "p",
        text: "Manages server giveaways with automated entries, rerolls, and timers.",
      },
      {
        type: "p",
        text: "Used for events, rewards, and community activities.",
      },
      { type: "h3", text: "Invite Tracker" },
      {
        type: "p",
        text: "Tracks member invites and server growth statistics.",
      },
      {
        type: "p",
        text: "Useful for referral rewards, milestones, and moderation insights.",
      },
      { type: "h3", text: "Quill" },
      {
        type: "p",
        text: "DevHub's custom utility and community bot built for server management and developer-focused features.",
      },
      {
        type: "p",
        text: "Handles moderation, utilities, automation, integrations, and custom server systems.",
      },
      { type: "h3", text: "Rhythm" },
      {
        type: "p",
        text: "Music bot for listening to songs together in voice channels.",
      },
      {
        type: "p",
        text: "Supports queues, playlists, and shared listening sessions.",
      },
      { type: "h3", text: "Sapphire" },
      {
        type: "p",
        text: "Moderation and utility bot used to help manage the server.",
      },
      {
        type: "p",
        text: "Provides tools for logging, automod, safety, and moderation workflows.",
      },
      { type: "h3", text: "Statbot" },
      {
        type: "p",
        text: "Advanced analytics bot that tracks server activity and engagement.",
      },
      {
        type: "p",
        text: "Provides detailed statistics about channels, messages, and member activity.",
      },
      { type: "h3", text: "TempVoice" },
      {
        type: "p",
        text: "Creates temporary voice channels automatically when members join.",
      },
      {
        type: "p",
        text: "Allows users to have private or customizable voice spaces.",
      },
      { type: "h3", text: "Rael" },
      {
        type: "p",
        text: "AI assistant bot for chatting, asking questions, generating content, and browsing information directly inside Discord.",
      },
      {
        type: "p",
        text: "Supports multiple personalities and conversational experiences.",
      },
      { type: "h3", text: "Panda" },
      {
        type: "p",
        text: "General-purpose server bot used for moderation, utilities, tickets, suggestions, counting, starboard, welcomes, and more.",
      },
      {
        type: "p",
        text: "Helps power many of the community systems and daily server features.",
      },
      { type: "h2", text: "Bot Commands" },
      {
        type: "p",
        text: "Use bot commands in #terminal unless a command is specifically designed for another channel (e.g. /suggest works anywhere). Running commands in #dev-chat or #chat is fine occasionally, but if you're experimenting, take it to the right place.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Spamming bot commands or attempting to exploit bot behavior will result in a warning, timeout or ban depending on the severity. Bots are tools, not toys.",
      },
      { type: "h2", text: "Suggesting a New Bot" },
      {
        type: "p",
        text: "See the Adding a Bot page for the proposal process. We review all bot suggestions carefully, security, permissions, and actual usefulness all factor into the decision.",
      },
    ],
  },
  {
    slug: "bots/adding",
    title: "Adding a Bot",
    section: "Bots",
    description: "How to propose and add a new bot to the DevHub server.",
    lastUpdated: "May 17, 2026",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "We're selective about which bots we run. Each bot is a potential security surface, a source of channel noise, and something the team has to maintain awareness of. That means we don't add bots casually.",
      },
      { type: "h2", text: "Before You Propose" },
      {
        type: "p",
        text: "Ask yourself: does this bot do something the server genuinely needs, that isn't already covered by a bot we have? If yes, go ahead. If it's a nice-to-have, the bar is higher.",
      },
      { type: "h2", text: "Proposal Process" },
      {
        type: "ol",
        items: [
          "Post in #suggestions (through /suggest command) with the bot name, a link to its documentation or source, and a clear explanation and/or image of what it does and why it's useful.",
          "Community members can react and comment under the suggestion thread.",
          "The admin team reviews the proposal, checks permissions and security, and votes internally.",
          "If approved, the bot is added with non-dangerous permissions. The proposer is credited in the announcement.",
        ],
      },
      { type: "h2", text: "Requirements" },
      {
        type: "ul",
        items: [
          "Open source.",
          "No excessive permissions.",
          "A specific, clear use case that benefits the community.",
          "An owner or team that is reachable for support and actively maintains it.",
          "No data harvesting or external logging of member information.",
        ],
      },
      {
        type: "callout",
        variant: "danger",
        text: "Any bot requesting Administrator or other elevated permissions is automatically rejected, no exceptions. If the bot 'needs' admin to function, the bot is not coming in.",
      },
    ],
  },

  // ─── OPEN SOURCE
  {
    slug: "github-org",
    title: "GitHub Organization",
    section: "Open Source",
    description: "DevHub's GitHub org, what's there and how to get involved.",
    lastUpdated: "May 17, 2026",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "The DevHub GitHub org is where community members build things together. It's not a showcase of finished work, it's an active space where contributors open issues, review PRs, and ship real software.",
      },
      { type: "h2", text: "What We Build" },
      {
        type: "ul",
        items: [
          "Open Source Projects - Community-driven tools, bots, libraries, and experiments.",
          "Templates & Utilities - Starter kits and reusable resources to accelerate development.",
          "Documentation & Guides - Clear, beginner-friendly materials to support growth.",
        ],
      },
      { type: "h2", text: "Community Principles" },
      {
        type: "ul",
        items: [
          "Respect first. Always.",
          "Constructive feedback over criticism.",
          "Keep projects documented and accessible",
          "Follow repository licensing.",
        ],
      },
      { type: "h2", text: "Get Involved" },
      {
        type: "ul",
        items: [
          "Star projects you support",
          "Fork and build",
          "Open issues",
          "Submit pull requests",
          "Share ideas in Discord and GitHub Discussions",
        ],
      },
      { type: "h2", text: "Code Standards" },
      {
        type: "p",
        text: "All projects use Prettier for formatting and ESLint (or the language equivalent) for linting. Run these before opening a PR. Tests live in the same repo, check the README for the test command.",
      },
    ],
  },

  {
    slug: "contributing",
    title: "How to Contribute",
    section: "Open Source",
    description:
      "Ways to contribute to DevHub, code, community, and everything in between.",
    lastUpdated: "May 17, 2026",
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "DevHub runs on community contributions. Not just code, though we love that too, but answering questions, improving docs, running events, giving project feedback, and just showing up consistently. All of it matters.",
      },
      { type: "h2", text: "Ways to Contribute" },
      {
        type: "ul",
        items: [
          "Answer questions asked in channels and threads",
          "Review pull requests in our GitHub org",
          "Improve or add to our documentation",
          "Share resources, challenges, posts etc. in designated forum channels",
          "Report bugs in open source projects (you will recieve 'Bug Hunter' role on our Discord server for doing this)",
          "Help new members get oriented",
          "Propose and run community events",
        ],
      },
      { type: "h2", text: "Code Contributions" },
      {
        type: "p",
        text: "All DevHub projects live in the GitHub org. To contribute code, fork the repo, make your changes on a feature branch, and open a PR. Include a clear description of what you changed and why.",
      },
      { type: "h3", text: "Getting Set Up" },
      {
        type: "code",
        text: `git clone ${github}/[project-name]\ncd [project-name]\nnpm install`,
      },
      { type: "h3", text: "Making Changes" },
      {
        type: "p",
        text: "Create a new branch, and make your changes there. This keeps the main branch clean and makes it easier to review your work.",
      },
      {
        type: "code",
        text: "git checkout -b feature/your-feature-name",
      },
      { type: "h3", text: "Before You Open a PR" },
      {
        type: "p",
        text: "Make sure your code is clean, well-formatted, and follows the project's style. Run linting and tests locally to catch any issues before opening a PR.",
      },
      {
        type: "code",
        text: "npm run lint\nnpm test",
      },
      {
        type: "p",
        text: "PRs that fail linting or tests take longer to review. Catching it yourself first saves everyone time.",
      },
      {
        type: "callout",
        variant: "info",
        text: "All PRs require at least one review from a community maintainer before merging. First-time contributors: look for issues labeled 'good first issue'.",
      },
      { type: "h2", text: "Documentation Contributions" },
      {
        type: "p",
        text: "Docs and resources are in the website repo. If you find something confusing, out of date, or just missing, fix it. Small improvements compound into something really good over time.",
      },
      { type: "h2", text: "Non-Code Contributions" },
      {
        type: "p",
        text: "Some of the most impactful contributions aren't code at all. Being a consistently helpful, kind, and present community member is genuinely valuable. Moderating thoughtfully. Welcoming new members. Remembering someone's project and following up weeks later. That's what makes a community feel like a community.",
      },
      { type: "h2", text: "Recognition" },
      {
        type: "p",
        text: "Contributors get the 'GitHub Contributor' and other roles on Discord, which are displayed separately from other online members.",
      },
    ],
  },

  {
    slug: "project-guidelines",
    title: "Project Guidelines",
    section: "Open Source",
    description: "Standards for DevHub open source projects.",
    lastUpdated: "May 17, 2026",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "These guidelines apply to all projects under the DevHub GitHub org. They're not bureaucracy, they're the things that make a project maintainable by multiple people over time.",
      },
      { type: "h2", text: "Required Files" },
      {
        type: "ul",
        items: [
          "README.md, What the project is, how to run it locally, and how to contribute. Keep it current.",
          "LICENSE, MIT preferred. If you have a reason for a different license, document it.",
          "CONTRIBUTING.md, How to contribute. Link to this guide.",
        ],
      },
      { type: "h2", text: "Code Standards" },
      {
        type: "ul",
        items: [
          "Prettier for formatting. No debates about style, just run it.",
          "ESLint (JS/TS) or the equivalent linter for your language.",
          "Tests for core functionality. Not 100% coverage, test the things that matter.",
          "JSDoc or equivalent for public APIs. If someone has to read source to understand how to use it, the docs aren't done.",
        ],
      },
      { type: "h2", text: "Commit Messages" },
      {
        type: "p",
        text: 'We use Conventional Commits: "type(scope): description". Common types are feat, fix, docs, chore, refactor, test (full documentation at https://www.conventionalcommits.org/en/v1.0.0/). The commit history is documentation, write it like someone will read it.',
      },
      {
        type: "code",
        text: "feat(auth): add OAuth login support\nfix(bot): handle empty /ask queries gracefully\ndocs(readme): update setup instructions for Node 22",
      },
      { type: "h2", text: "Branching Strategy" },
      {
        type: "p",
        text: "main is always deployable. develop is active work. feature/* branches are individual features or fixes. Open PRs from your feature branch into main.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Always test your code locally before opening a PR. A PR that doesn't run or fails linting creates extra work for reviewers and slows down the process for everyone.",
      },
      { type: "h2", text: "Reviewing PRs" },
      {
        type: "p",
        text: "Be constructive and specific in reviews. 'This is wrong' isn't a review, 'this will break when X because Y, consider Z instead' is. Approve when you're genuinely satisfied, not just to move things along.",
      },
    ],
  },

  {
    slug: "submit-project",
    title: "Submitting a Project",
    section: "Open Source",
    description: "Get your project featured or hosted under the DevHub org.",
    lastUpdated: "May 17, 2026",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Built something useful? We'd love to help it reach more people. There are a few different ways to get your project connected with the DevHub community.",
      },
      { type: "h2", text: "Options" },
      {
        type: "ul",
        items: [
          "Feature Listing, We promote your personal project in this website. You keep full ownership.",
          "Org Transfer, Your project moves under the DevHub GitHub org, and you'll be given admin rights over it. Community maintainers help keep it active. Good for projects you want to outlive your direct involvement.",
        ],
      },
      { type: "h2", text: "What We Look For" },
      {
        type: "ul",
        items: [
          "Open source with a clear license.",
          "Useful to developers, a tool, library, template, resources etc. It doesn't have to be big or complex, just needs to be helpful.",
          "A clear README. If we can't understand what it does in 60 seconds, it needs more work.",
          "No malicious code. All submissions are reviewed before being featured.",
        ],
      },
      { type: "h2", text: "How to Submit" },
      {
        type: "ol",
        items: [
          "Post in #suggestions (through /suggest command from Panda) with the project name, a link to the repo, and a clear description of what it does and why it's useful.",
          "Community members can react and comment under the suggestion thread.",
          "The admin team reviews the proposal, checks the project against the criteria, and votes internally.",
          "If approved, the project is added to the website and/or GitHub org. The submitter is credited in the announcement.",
        ],
      },
    ],
  },

  // ─── LEGAL & POLICY
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    section: "Legal",
    description: "What data DevHub collects, stores, and how it's used.",
    lastUpdated: "May 17, 2026",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "DevHub is a community, not a product. We don't have a business model that depends on your data, and we don't sell or share it with third parties. This document explains what we do collect and why.",
      },
      { type: "h2", text: "What We Collect" },
      {
        type: "ul",
        items: [
          "Discord user IDs and usernames, necessary to identify accounts.",
          "Moderation logs, warnings, mutes, and bans, stored by Discord and our moderation bot.",
          "Bot interaction data, commands you run via Quill or other bots (query text, response, timestamp). Used to improve bot responses.",
          "ModMail and tickets you open with the mod team, stored securely and only accessible to mods.",
        ],
      },
      { type: "h2", text: "What We Don't Collect" },
      {
        type: "ul",
        items: [
          "Your email address.",
          "Your IP address (we have no server-side access to this).",
          "Payment information of any kind.",
          "Data from private messages between members.",
        ],
      },
      { type: "h2", text: "Third-Party Services" },
      {
        type: "p",
        text: "DevHub runs on Discord. Discord's own privacy policy governs how Discord handles your data, we have no control over that. The bots we use (Wick, Sapphire, etc.) have their own privacy policies. Bot interaction data is processed by those services' servers.",
      },
      { type: "h2", text: "Data Retention" },
      {
        type: "p",
        text: "Moderation logs are retained for as long as the server is active, to ensure continuity across mod team changes.",
      },
      { type: "h2", text: "Your Rights" },
      {
        type: "ul",
        items: [
          "Request a copy of any data we hold about you.",
          "Request deletion of your data from our records unless the data is required for moderation purposes.",
          "Leave the server at any time.",
        ],
      },
      {
        type: "p",
        text: "To make a request, DM an admin or post in #mod-support. We'll respond within 7 days.",
      },
      { type: "h2", text: "Contact" },
      {
        type: "p",
        text: `Questions about this policy can be directed to the admin team or via tickets or email at ${email}.`,
      },
    ],
  },

  {
    slug: "security-notice",
    title: "Security Notice",
    section: "Legal",
    description:
      "How to report security vulnerabilities in DevHub's open source projects.",
    lastUpdated: "May 17, 2026",
    readingTime: "3 min read",
    content: [
      {
        type: "p",
        text: "If you find a security vulnerability in any DevHub project, please tell us before making it public. We take security seriously and will respond promptly.",
      },
      { type: "h2", text: "How to Report" },
      {
        type: "p",
        text: "Do not open a public GitHub issue for security vulnerabilities. Instead:",
      },
      {
        type: "ul",
        items: [
          `Email ${email} with the subject line 'Security Vulnerability: [project name]'.`,
          "Or DM a server admin directly on Discord with a brief description.",
          "GitHub's private security advisory feature is also supported on most DevHub repos.",
        ],
      },
      { type: "h2", text: "What to Include" },
      {
        type: "ul",
        items: [
          "Which project and version is affected.",
          "A description of the vulnerability and how it can be exploited.",
          "Steps to reproduce, if applicable.",
          "Any suggested fix, if you have one.",
        ],
      },
      { type: "h2", text: "What Happens Next" },
      {
        type: "ol",
        items: [
          "We'll acknowledge your report within 48 hours.",
          "We'll investigate and confirm the vulnerability.",
          "We'll develop and test a fix.",
          "We'll release the fix and credit you in the changelog, unless you prefer to remain anonymous.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Please give us reasonable time to address a vulnerability before disclosing it publicly. We commit to resolving valid reports within 1-7 days of confirmation.",
      },
      { type: "h2", text: "Scope" },
      {
        type: "p",
        text: "This policy covers all repositories under the DevHub GitHub org. It does not cover the Discord server itself (that's governed by Discord's own security processes) or third-party bots.",
      },
      { type: "h2", text: "Out of Scope" },
      {
        type: "ul",
        items: [
          "Social engineering attacks against community members.",
          "Vulnerabilities in third-party dependencies (report those upstream).",
          "Issues requiring physical access.",
          "Rate limiting or brute force on non-sensitive endpoints.",
        ],
      },
    ],
  },

  // ─── RESOURCES
  {
    slug: "join-guide",
    title: "Join Guide",
    section: "Community",
    description: "Everything you need before you click that invite link.",
    lastUpdated: "May 17, 2026",
    readingTime: "3 min read",
    content: [
      {
        type: "p",
        text: "About to join DevHub? Here's everything you need to know before you do, what to expect, what to do first, and how to get the most out of it from day one.",
      },
      { type: "h2", text: "Who This Community Is For" },
      {
        type: "p",
        text: "Anyone who builds things with code. Beginners figuring out their first project, experienced engineers who want to stay connected to a community, open source contributors, freelancers, students, bootcamp grads, all welcome. If you're not a developer, you're still very welcome, but be aware that the focus is on coding and development topics.",
      },
      { type: "h2", text: "What You'll Find Inside" },
      {
        type: "ul",
        items: [
          "Help channels staffed by people who actually know what they're doing.",
          "Project showcase and feedback.",
          "Language and framework-specific channels",
          "Career and job hunting channels.",
          "An active open source org on GitHub.",
          "Some bots to help get things done faster.",
        ],
      },
      { type: "h2", text: "Your First 5 Minutes" },
      {
        type: "ol",
        items: [
          "Read #rules",
          "React to the message in #reaction-roles to self-assign roles",
          "Post in #introductions, a sentence or two is plenty.",
          "Browse the channels and see what's active.",
          "Ask a question, answer one, or just jump in to a chat.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "No intro required to start participating. Lurking is fine. There's no pressure to be active, the server will be here when you want it.",
      },
    ],
  },

  {
    slug: "staff-roles",
    title: "Staff Roles",
    section: "Community",
    description: "Who does what on the DevHub team.",
    lastUpdated: "May 17, 2026",
    readingTime: "3 min read",
    content: [
      {
        type: "p",
        text: "DevHub's staff are volunteers. Understanding who does what helps you know who to contact for different situations.",
      },
      { type: "h2", text: "Admin" },
      {
        type: "p",
        text: "Manages the mod team, handles escalated appeals, makes decisions on bans, and takes care of server configuration. If a mod decision seems wrong, admins are your second contact.",
      },
      { type: "h2", text: "Moderators" },
      {
        type: "p",
        text: "Day-to-day enforcement of community rules. Handles reports, issues warnings, and manages mutes. Your first point of contact for most situations. All mods can be reached via DM or the /report command.",
      },
      { type: "h2", text: "Staff" },
      {
        type: "p",
        text: "Same as Moderators, but with a different role name. The title is just a label, the responsibilities are the same.",
      },
      { type: "h2", text: "Supporters" },
      {
        type: "p",
        text: "Closest moderators to members, can handle moderation except ban.",
      },
      { type: "h2", text: "Trial Staff" },
      {
        type: "p",
        text: "New moderators start here. They have don't the same permissions as regular moderators, but are in a trial period where they receive more guidance and oversight to become full moderators.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Staff members are community members who volunteered. They're not infallible and can be held accountable through the appeals process. Please treat them with the same respect you'd want in return.",
      },
      { type: "h2", text: "Becoming a Moderator" },
      {
        type: "p",
        text: "Interested in joining our moderation team? Open a ticket to submit your application and tell us why you’d be a great fit. We look for people who are active, helpful, patient, and have a good understanding of the community norms. There's no formal application form, just start a conversation with us.",
      },
    ],
  },
];

export function getPage(slug: string): Page | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getAdjacentPages(slug: string): { prev?: Page; next?: Page } {
  const index = pages.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? pages[index - 1] : undefined,
    next: index < pages.length - 1 ? pages[index + 1] : undefined,
  };
}
