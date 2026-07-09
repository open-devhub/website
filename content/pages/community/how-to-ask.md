---
slug: how-to-ask
title: How to Ask for Help
section: Community
description: How to write a good help request so you actually get useful answers.
lastUpdated: May 17, 2026
readingTime: 6 min read
---

Getting good help is a skill. Not because people are stingy with their time, they're not, but because a vague question makes it hard to help you. This guide will help you write help requests that actually get answered.

## The Short Version

- Describe what you're trying to do
- Show the relevant code ([formatted](/rules#06), please)
- Share the exact error message or unexpected output
- Tell us what you've already tried
- Ask in the right channel

## What a Good Help Request Looks Like

Good: "I'm trying to fetch data from an API in useEffect, but my state is always empty on the first render even though the data logs correctly inside the callback. Here's the code: [code block]. I've tried adding the variable to the dependency array and it didn't change anything."

Not helpful: "my code doesn't work help"

Both questions come from a real place of being stuck. The first one just gives helpers something to work with.

## Format Your Code

Paste code [inside a code block](/rules#06) using triple backticks and the language name. Discord renders it with [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting) and preserves indentation.

```javascript
const example = () => {
  return "this is readable";
};
```

Pasting raw code without formatting makes it significantly harder to read and significantly less likely you'll get a fast answer.

## Include the Error Message

Copy the full error, [stack trace](https://en.wikipedia.org/wiki/Stack_trace) included. The line number in a stack trace often points directly at the problem. Screenshots of errors are okay, but text is better because people can search and quote it.

## Tell Us What You've Tried

This isn't gatekeeping, it's practical. If you've already tried restarting the server, reinstalling the package, and checking the docs, say so. It saves everyone from suggesting things you've already ruled out.

## Minimal Reproducible Example

If your codebase is large, try to reduce the problem to the [smallest piece of code](https://stackoverflow.com/help/minimal-reproducible-example) that still shows the bug. This is good debugging practice anyway, often, the act of isolating the problem leads you to the answer before anyone else can.

## Choosing the Right Channel

[Posting in the right channel](/rules#05) gets you in front of the people most likely to know the answer. If it's a question about React, post in #web-dev not #ai-ml. If you're unsure, ask in #dev-chat.

> [!info] Don't DM people for help without asking first. Posting in the channel gives more people a chance to help you, and you'll usually get an answer faster.

## When You Figure It Out

Post the solution. Even a short 'figured it out, the issue was X' helps the next person who searches and finds your thread.
