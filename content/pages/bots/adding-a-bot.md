---
slug: adding-a-bot
title: Adding a Bot
section: Bots
description: How to propose and add a new bot to the DevHub server.
lastUpdated: May 17, 2026
readingTime: 4 min read
---

We're selective about which [bots](/pages/bots) we run. Each bot is a potential security surface, a source of channel noise, and something the team has to maintain awareness of. That means we don't add bots casually.

## Before You Propose

Ask yourself: does this bot do something the server genuinely needs, that isn't already covered by a bot we have? If yes, go ahead. If it's a nice-to-have, the bar is higher.

## Proposal Process

1. Post in #suggestions (through `/suggest` command) with the bot name, a link to its documentation or source, and a clear explanation and/or image of what it does and why it's useful.
2. Community members can react and comment under the suggestion thread.
3. The admin team reviews the proposal, checks permissions and security, and votes internally.
4. If approved, the bot is added with non-dangerous permissions. The proposer is credited in the announcement.

## Requirements

- Open source.
- No excessive permissions.
- A specific, clear use case that benefits the community.
- An owner or team that is reachable for support and actively maintains it.
- No data harvesting or external logging of member information.

> [!danger] Any bot requesting Administrator or other elevated permissions is automatically rejected, no exceptions. If the bot 'needs' admin to function, the bot is not coming in.
