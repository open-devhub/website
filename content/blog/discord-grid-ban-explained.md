---
title: "The Discord 'Grid Ban': Why Minecraft Inventories and Spreadsheets Got People Banned"
description: A breakdown of the July 2026 Discord ban wave, why grid-pattern screenshots got flagged as CSAM, and what actually broke behind the scenes.
authors: [Caleb]
date: July 11, 2026
tags: [discord, moderation, vulnerability]
---

If you were on Discord around the 4th of July weekend in 2026, you probably saw someone panicking about a "grid ban." People were getting permanently banned for the child safety policy — over screenshots of things like a **Minecraft inventory**, a **chessboard**, or a plain old **Excel spreadsheet**.

That's not a joke. That's actually what happened. Here's the full story, in plain terms.

> [!NOTE]
> If you want a more visual walkthrough of this instead of reading, [this YouTube video](https://www.youtube.com/watch?v=kBkHLYaEkCI) covers the same incident and goes over how it likely happened.

# What people were noticing

Starting around the July 4th weekend, users began posting screenshots of ban notices citing child safety violations. The images behind those bans were completely ordinary:

- Minecraft inventory screens
- Chessboards
- Spreadsheets (Excel, Google Sheets)
- Game textures and pixel art
- Transparent PNGs with the gray-and-white checkerboard background
- Tier list templates, notebook grid paper, and other tiled layouts

![Minecraft Inventory](https://preview.redd.it/is-this-the-best-inventory-layout-v0-40scsfut0sud1.png?width=1080&crop=smart&auto=webp&s=41fe38c3466f3f1c9946f6faf284b44080fdfe24)

A creator called [Tall Cow](https://x.com/tallcowyt/status/2073904860182008174) was one of the first to call it out publicly, warning that Discord's moderation system appeared to be treating any square grid image as flagged material and telling people to hold off on sending images until it was fixed. Other users piled on with their own stories, including a game director who said his account got nuked over a game texture screenshot mid-conversation with his own dev team, as [TechCrunch reported](https://techcrunch.com/2026/07/07/discord-admits-ai-moderation-bug-wrongfully-banned-users-over-harmless-images/).

<a class="card" href="https://x.com/tallcowyt/status/2073904860182008174">
    <div>
        <h1>Tall Cow (@tallcowyt) on X</h1>
        <p>There’s currently a vulnerability in Discord’s AI moderation that detects any and all square grid images, such as spreadsheets, chessboards, Minecraft inventories, white &amp; gray transparent backgrounds… as CSAM and will permanently ban your account.</p>
        <!--<footer></footer>-->
    </div>
    <img src="https://pbs.twimg.com/media/HMf9ehtWkAAGzdq.jpg:small" alt="tallcow" />
</a>

# Discord's response

A Discord platform developer going by [advaith](https://x.com/advaithj1/status/2073931556973162731) first pushed back on the framing, saying this wasn't really an "AI" problem — it was a false positive match, and flagged accounts were only supposed to get a temporary hold until a human reviewed them. A day later he confirmed the team had found the bad match and pulled it.

The next day, [Discord's official support account](https://twitter.com/discord_support/status/2074282860123767135) posted a longer thread explaining what happened. The short version:

- About 200 accounts were wrongly banned over that single weekend.
- The same bug had actually been running since May 2026, and had wrongly hit around 8,200 accounts total.
- Every one of those accounts has since been restored.

According to [Engadget's coverage](https://www.engadget.com/2209819/a-bug-in-discords-safety-systems-incorrectly-banned-accounts-since-may/), Discord admitted the explanation wouldn't feel satisfying if it was your account, and that they should have caught it sooner. Discord co-founder and CTO Stanislav Vishnevskiy also confirmed the two underlying bugs publicly, which [The Verge covered](https://tech.yahoo.com/social-media/articles/discord-banned-8-000-users-170518016.html) alongside the rest of the timeline.

# So why did a chessboard get flagged as CSAM?

To catch known illegal images without a human staring at every single upload, platforms like Discord (and Meta, Microsoft, Dropbox, and others) use something called **perceptual hashing**, a concept [PetaPixel breaks down well](https://petapixel.com/2026/07/07/discord-banned-around-8200-users-for-posting-inoffensive-images-of-grids/). It's different from a normal file hash.

A normal cryptographic hash (MD5, SHA-256) changes completely if you edit even one pixel. That makes it useless for catching bad actors who just recolor or crop an illegal image slightly to dodge detection.

Perceptual hashing is built to survive that. Roughly, it works like this:

1. Convert the image to grayscale.
2. Shrink it way down to a small grid — think 8x8 or 16x16 blocks.
3. Compare the relative brightness of each block to its neighbors.

That pattern of brighter/darker blocks becomes a short fingerprint. If a new image's fingerprint is close enough to a fingerprint in the "known bad" database, it gets flagged — even if the two images look nothing alike to a human.

Here's the problem: a chessboard, a Minecraft inventory grid, and a checkerboard transparency background _also_ reduce down to a simple pattern of alternating bright and dark blocks. Structurally, that's not that different from what the hashing algorithm is looking at. If one bad fingerprint in the database happened to sit close to "grid of alternating light/dark squares," anything shaped like a grid could accidentally score a match.

There's a theory going around, repeated in outlets like [TheGamer](https://www.thegamer.com/thousands-banned-on-discord-as-minecraft-screenshots-flagged-as-csam/), that this happened because bad actors have historically overlaid grid patterns on illegal images specifically to break detection systems, and that this trained the system into treating grids themselves as suspicious. Discord hasn't confirmed that specific explanation — advaith described it as one bad hash entry that got found and removed, not a systemic retraining issue. Either way, the practical result was the same: ordinary grid images were matching against harmful-content fingerprints.

# The part that made it so much worse

A false positive from an automated filter isn't supposed to end in an instant, permanent ban. Discord's normal process, as [Dexerto laid out](https://www.dexerto.com/entertainment/discord-dev-responds-after-users-report-child-safety-bans-over-grid-images-3383677/), looks like this:

1. Upload gets scanned and matches a known-bad fingerprint.
2. The account gets paused, not banned.
3. A human on Discord's Trust & Safety team reviews the flagged content.
4. If it's actually fine, the hold gets lifted. If it's not, then the ban happens.

Two separate bugs broke that safety net:

- **Bug #1:** Instead of pausing the account for review, the system skipped straight to a permanent ban.
- **Bug #2:** Even after a human on the Trust & Safety team reviewed a case and manually cleared it, the system failed to actually lift the ban. The account stayed locked, and the person had no way of knowing their appeal had already been approved on the backend.

That second bug is why this dragged on quietly for two months before it blew up — people weren't just getting banned, their appeals were silently going nowhere even when Discord's own staff had already cleared them.

# Why this matters beyond one bad weekend

A few things are worth sitting with here:

- **Shared detection systems mean shared blind spots.** Multiple unrelated platforms use grid-pattern hashing for content moderation. If one shared fingerprint database has a bad entry, it can misfire across more than one company at the same time — not just Discord.
- **Automated enforcement plus a broken safety net equals a bad time.** The false positive wasn't the real disaster here. The disaster was the human-review step silently failing on both ends — the ban happened automatically, and the appeal clearing didn't apply automatically either.
- **This hits developers and community builders hardest.** If you run your dev team, playtesting group, or support pipeline through Discord, a sudden account termination doesn't just lock you out of chat — it can cut you off from your own project's communication overnight, with no warning and (until this got fixed) no reliable appeal path.

# The takeaway

Discord says the specific bad hash has been pulled, all 8,200+ affected accounts are restored, and they're working on changes so a ban can't quietly stick around after a human has already cleared it. That's a reasonable fix for this specific incident.

The bigger lesson is less comforting: as long as platforms rely on automated matching at scale to catch genuinely awful content, false positives are a statistical certainty, not an edge case. The part that actually matters is whether the human-review safety net around that automation actually works when it's needed — and for two months, Discord's didn't.

If you build or run communities on Discord, this is a good reminder to keep your own backups of anything critical somewhere outside of Discord itself. An account that vanishes overnight over a spreadsheet screenshot shouldn't also mean losing everything tied to it.
