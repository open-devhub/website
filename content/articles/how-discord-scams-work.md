---
slug: how-discord-scams-work
title: "The Discord Scam Playbook: Every Major Scam, How It Works, and What To Do If You Fell For One"
description: A breakdown of the scams running on Discord right now, from Nitro phishing to sextortion, and what to do if you got hit.
banner: https://i.pinimg.com/originals/f4/91/63/f49163ee46433121e83fb3eb5eff2123.jpg
author: Caleb
authorGithub: https://github.com/calebephrem
date: July 15, 2026
tags: [discord, security, scams, safety]
---

Discord has hundreds of millions of monthly users, which also makes it one of the most efficient scam delivery systems on the internet. Not because Discord is uniquely unsafe, but because it has everything scammers want in one place: DMs that bypass spam filters if you share a server, a culture of trading skins/accounts/currency, a friend-of-a-friend trust model, and a login token that hands over your entire account without needing your password if it's stolen.

This isn't a "here's 3 tips" post. This is every major scam category currently running on Discord, broken down the same way: how it works, the red flags, what to do if you already fell for it, and how to avoid it going forward.

> [!NOTE]
> A lot of the groundwork for the "already fallen for it" sections in this article comes from [NoTextToSpeech's scam list](https://notexttospeech.com/scams), a community-maintained reference that's worth bookmarking on its own.

## Why These Scams Keep Working

Before the individual scams, it's worth understanding the one mechanic almost all of them rely on: **your Discord token is not your password.**

When you log into Discord, the client gets issued a session token: a long string that proves to Discord's servers that you're already authenticated. Every request your client makes afterward uses that token instead of your password. It's convenient because you don't have to log in every five minutes, but it also means that if someone gets a copy of that token, they don't need your password or your 2FA code. They can drop it straight into their own client and be logged in as you, with your DMs, your servers, and your payment methods attached.

That's why so many of the scams below funnel toward one of two outcomes:

- **Getting you to hand over the token or session directly**, through a fake login page, a "verify your account" bot, or a QR code scan.
- **Getting code running on your machine** that goes and grabs the token itself out of Discord's local storage, then exfiltrates it (commonly [over a Discord webhook](https://www.veritasprotocol.com/blog/understanding-discord-token-grabbers-how-they-work-and-how-to-stay-safe)).

![Scam by making users run a piece of script on their machine](https://research.checkpoint.com/wp-content/uploads/2025/05/Figure-9-Social-engineering-technique-tricking-a-user-to-execute-a-malicious-command.png)

Once you understand that the actual target is almost always "the token, one way or another," the rest of these scams stop looking like a random grab-bag and start looking like variations on the same two moves.

## Account & Credential Theft Scams

### 1. The "Free Nitro" Gift Scam

**How it works:** You get a DM (often from a friend's compromised account, which is what makes it effective) or see a bot flooding a server with a message like "I got a free Nitro gift, thought of you" or "Only 2 gifts left, claim now." The link goes to a page that looks nearly identical to Discord's actual login screen, sometimes on a domain built to look right at a glance, like [discorx.gift](https://support.discord.com/hc/en-us/community/posts/4420029528471-Fake-Discord-Nitro-Gifts) or [disccrd.gifts](https://support.discord.com/hc/en-us/community/posts/1500001208022-Hacked-acc-with-nitro-scam-) instead of `discord.gift`. You log in, the scammer now has your credentials or your token, and your account immediately starts sending the same link to your entire friends list. This has happened at scale before: [over 1,000 members of a large streamer's community clicked a fake giveaway bot link](https://www.aura.com/learn/discord-scams) before moderators could catch it.

**Red flags:**

- Urgency language ("expires in 30 minutes," "only X left")
- A domain that isn't `discord.gift` or `discord.com` (legitimate gift links always live at `discord.gift/<code>`)
- The message coming from a friend but sounding nothing like them
- Being asked to scan a QR code to "claim" something

**If you already fell for it:**

1. Change your Discord password immediately, and make it nothing like your old one
2. Enable two-factor authentication if you haven't already
3. Go to **User Settings › Authorized Apps** and revoke anything you don't recognize
4. Log out of all active sessions under **User Settings › Devices**
5. Warn your friends before the bot finishes spamming your entire list

**How to avoid it:** Don't click on random Nitro links from DMs, period. Even from friends, since a "friend" sending an out-of-character link is usually the first sign _they've_ been compromised. Real gifts only ever resolve through `discord.gift`. Hover over any link before clicking to check where it actually goes.

![The "Free Nitro" Gift Scam](https://support.discord.com/hc/user_images/S2v7Ys0q-jdkdFpjunG2Wg.png)

### 2. Fake Discord Staff / "You've Been Reported" Scam

**How it works:** Someone messages you claiming to be Discord Trust & Safety, or claims they accidentally reported you, or that your account is about to be banned. They create urgency and panic, then either walk you through "verifying" your account by changing your email to one they control, or push you toward a fake support chat that harvests your login code. [The goal is account takeover, not dispute resolution](https://www.bitdefender.com/en-us/blog/hotforsecurity/discord-scam-accidentally-reported), and once they own your email, they can lock you out entirely.

**Red flags:**

- **Discord staff will never DM you first.** Real account actions come through in-app system messages, not a person messaging you directly.
- Any pressure to change your account email or "verify" through a link
- A "moderator" who wants to move the conversation to DMs immediately

**If you already fell for it:**

1. [Contact Discord Support directly](https://support.discord.com/hc/en-us/requests/new) and explain your account email was changed without your knowledge
2. If you scanned a QR code as part of this, change your password right away
3. If you downloaded anything during the interaction, treat your machine as compromised (see the malware section below)

**How to avoid it:** Treat any unsolicited DM claiming to be Discord staff as fake by default. If you want to double check something about your account, go to [support.discord.com](https://support.discord.com/hc/en-us/requests/new) yourself rather than replying to whoever messaged you.

![Fake Discord Staff / "You've Been Reported" Scam](https://support.discord.com/hc/user_images/01HZ0DH9M5KE5BC7J4ASV3YVTY.png)

### 3. The NSFW Server "Verify" Bot Scam

**How it works:** A link to an NSFW server gets dropped in a channel or DM, often from a friend's account that's already been compromised, which is the tell here as much as the bait itself. You join, hit a "verify" button like thousands of legitimate servers ask you to do, and it prompts you to scan a QR code or log in on a website to "confirm you're human" or "confirm your age." That login page is fake, or the QR code is actually Discord's real remote-login QR feature being abused to authorize a session the scammer controls. Either way, your account is now theirs, and it immediately starts sending the same server invite to your friends.

**If you already fell for it:**

1. Change your Discord password
2. Change the password anywhere else you reused it
3. Go to **Settings › Authorized Apps** and remove anything with a "join servers on your behalf" type permission

**How to avoid it:** If a friend sends you a link that feels out of character, assume they've been compromised and tell them through a different channel (text, another platform) rather than clicking anything. Don't scan QR codes from servers or bots you don't already trust.

![The NSFW Server "Verify" Bot Scam](https://www.leftfold.tech/img/discord-nsfw/server-1.jpg)

### 4. Malicious OAuth2 App Authorization

**How it works:** This one's worth calling out separately because it's more relevant if you build things on Discord (like you do). Instead of stealing a token directly, an attacker gets you to click "Authorize" on a third-party app or bot requesting OAuth2 scopes, things like `identify`, `email`, `guilds.join`, or worse, `bot` with elevated permissions on a server you admin. You never typed a password anywhere, so it doesn't feel like a phishing page, but you've just granted a permanent, revocable-only-by-you grant to your account or server. This is increasingly common disguised as "verification" bots, fake analytics dashboards for server owners, or "boost checker" tools.

**Red flags:**

- A bot or site asking to authorize scopes far broader than what it claims to do (a "verification" bot shouldn't need `guilds.join`)
- Being asked to authorize something to view a giveaway, check a stat, or "prove" you're not a bot

**If you already fell for it:**

1. Go to **User Settings › Authorized Apps** and revoke it immediately
2. If it was authorized on a server you own or moderate, check the server's **Integrations** page too, since bot-level authorizations live there separately from your personal ones
3. Audit for anything the app could have done while it had access (messages sent, roles changed, new bans/kicks)

**How to avoid it:** Read the scope list before hitting Authorize, the same way you'd inspect a package's postinstall scripts before running `npm install`. If a bot's stated purpose doesn't match the scopes it's requesting, don't authorize it.

![App Authorization With Few Extra Unwanted Permissions](https://preview.redd.it/should-i-authorize-or-no-im-not-sure-v0-dac7oxknupsb1.png?auto=webp&s=4b6c730639388cf389cccf73672cc07210e220a4)

## Malware Delivery Scams

### 5. Token Grabbers Disguised as Cheats, Cracks, or "Free" Tools

**How it works:** You're offered a game cheat, a cracked license for paid software, a "self-bot" script, or some tool that sounds too useful to pass up. The download is a token grabber, malware built specifically to locate Discord's locally stored session token, package it up with your saved passwords, system info, and sometimes cryptocurrency wallet data, and quietly ship it off to the attacker, most often via a Discord webhook so the traffic looks like normal bot activity. Some variants even try to kill your running Discord client first to guarantee the token file is available and unlocked. This family of malware also spreads through [typosquatted npm and PyPI packages](https://www.veritasprotocol.com/blog/understanding-the-dangers-of-discord-token-grabbers-a-security-guide): a fake `discord-selfbot-v14` package, or one that claims to "fix" a common self-bot error but is actually obfuscated malware, which is a genuinely nasty vector if you're regularly pulling dependencies for Discord bot projects.

**If you already fell for it:**

1. **Wipe the machine.** A full, fresh OS install, not just an antivirus scan. Token grabbers and stealers are built to persist, and there's no reliable way to prove a system is fully clean after the fact.
2. Change every password you had saved in a browser or password manager on that machine, not just Discord's
3. Revoke Discord's authorized sessions and any linked payment methods
4. If you're a developer, rotate any API keys, bot tokens, or `.env` secrets that could have been sitting on that machine

**How to avoid it:** Don't run executables from Discord DMs or unfamiliar servers, full stop. For npm/PyPI dependencies, double check package names character-by-character before installing, especially for anything discord-related, and prefer well-known, actively maintained libraries over random one-off packages promising shortcuts.

![Example of a Grabbed Token Through the Use of Webhook](https://i.imgur.com/uXmEvaF.png)

### 6. The "Paid Game Tester" Scam

**How it works:** Someone reaches out claiming to be an indie dev or a testing company offering paid work. They send a password-protected ZIP containing "the game," you extract it, enter the password, and run the executable inside. That executable is malware, often the same token-grabber family described above, and your machine and Discord account are compromised the moment it runs.

**If you already fell for it:** Same as above: full OS wipe, change every password, and assume anything on that machine was exposed.

**How to avoid it:** Don't download and run executables sent to you by strangers on Discord, no matter how legitimate the pitch sounds or how professional the message reads. If you actually want to playtest something, do it through Steam's official playtesting features or itch.io, not a random ZIP in your DMs.

![Example of The "Paid Game Tester" Scam](https://i.imgur.com/A83MUD0.png)

### 7. The "I Hacked You, Deal With Me Fast" Extortion Scam

**How it works:** This one usually shows up as the second act of another scam, most often right after the ["test my game" malware](https://www.howtogeek.com/781369/psa-if-someone-says-try-my-game-on-discord-say-no/) from the previous section runs. The moment the stealer phones home, the attacker already has your login, saved passwords, and sometimes your friends list, and instead of quietly disappearing, they message you directly to cash in on the panic while you're still processing what happened: "I'm in your system, I have everything, send me $X in the next 15 minutes or I lock you out / wipe your drive / message your whole friends list." Victims of this exact pattern [have described it on Discord's own support forum](https://support.discord.com/hc/en-us/community/posts/4418578327447-my-account-was-hacked-by-the-infamous-test-my-game-hack): a stream of taunting messages telling them to go lock their bank cards immediately, timed to hit before they've had a chance to disconnect or change anything.

There's also a version of this with zero real access behind it: a cold DM or email out of nowhere claiming "I've hacked your device / I have your webcam footage / I have your search history," often name-dropping an old, real password (usually pulled from an unrelated data breach, not from actually hacking you) to seem credible, followed by a countdown-style demand to pay in crypto before they "leak everything." Both versions rely on the same trick: panic makes people pay before they stop to check if any of it is actually true.

**Red flags:**

- A hard countdown ("you have 15 minutes / 24 hours") paired with a demand to pay before you can verify anything
- Being told not to log out, disconnect, or contact anyone, since doing exactly that is what stops the bluff from working
- "Proof" that's really just an old leaked password rather than anything currently true
- The message arriving right after you ran a file someone sent you (see the Paid Game Tester and Token Grabber sections above), which is a strong sign this is the real-access version rather than a bluff

**If you already fell for it:**

1. Don't pay. Payment doesn't make it stop, and it confirms to the attacker that you're a paying target
2. Disconnect the machine from the internet if you still have access to do so, then treat it as compromised: full OS wipe, not a scan
3. Change every password you had saved on that machine from a separate, clean device, starting with email
4. If your Discord account is already locked out (changing your email and adding their own 2FA before you can react is a common move), contact [Discord Support](https://support.discord.com/hc/en-us/requests/new) right away and be ready for it to take a while. Also worth alerting your bank in case any saved payment methods were reachable
5. Warn your friends list before the attacker uses it to run the same scam on them

**How to avoid it:** Treat any message engineered to make you panic and act immediately, rather than think, as the actual attack. A real compromise doesn't get worse because you took five minutes to verify it; it only gets worse for the scammer. Don't run files from strangers or "friends" you haven't confirmed are still themselves (see the Paid Game Tester and Fake Discord Staff sections above), since this scam is almost always the second half of one of those, not a standalone trick.

![The "I Hacked You, Deal With Me Fast" Extortion Scam](https://preview.redd.it/fell-for-a-help-me-test-out-this-game-discord-virus-link-v0-8len4ne15kcf1.jpeg?width=1080&crop=smart&auto=webp&s=bc9cac2083e6d0f478474b80abac52b9308ac820)

### 8. Pirated / "Free" Paid Software

**How it works:** Someone offers a cracked copy of expensive paid software: Photoshop, an IDE license, a paid Discord bot dashboard, whatever. You install it, and it's malware, sometimes bundled alongside a technically-functional cracked app so you don't immediately suspect anything.

**If you already fell for it:** Full OS wipe, change every password.

**How to avoid it:** If it sounds too good to be true, it is. Piracy from an unknown source is one of the highest-risk things you can do to a machine you actually care about. Sometimes it's genuinely cheaper in the long run to just buy the thing.

## Money & Trust Scams

### 9. Steam Gift Card / Trade Link Phishing

**How it works:** A DM offers you a Steam gift card, then links you to a site that looks like Steam's login page but isn't. Entering your credentials there hands them straight to the scammer, who can then drain your Steam inventory and any linked payment methods.

**If you already fell for it:**

1. Change your Steam password immediately
2. Contact Steam Support and explain what happened
3. Change the password anywhere else you reused it

**How to avoid it:** Steam only ever lives at [store.steampowered.com](https://store.steampowered.com) or [steamcommunity.com](https://steamcommunity.com). Check the actual address bar, not just how the page looks. Don't log into anything linked from a DM sent by someone you don't know.

![Steam Gift Card / Trade Link Phishing](https://i.imgur.com/gNBmwC1.png)

### 10. Art Commission Scam

**How it works:** A stranger DMs you, makes small talk, works the conversation toward "I'm a 2D/3D artist looking for commissions," and asks for payment upfront, sometimes with a "discount" to sweeten the deal. Once you pay, they block you.

**If you already fell for it:**

1. Report the account to [Discord Support](https://dis.gd/request)
2. Call your bank or payment provider and request a chargeback
3. Block the user

**How to avoid it:** Real artists don't usually cold-DM strangers offering commissions; it's normally the other way around. If you do want to commission someone, ask for a portfolio and references, and only pay through a method with real buyer protection (PayPal Goods & Services, not Friends & Family). Never use an irreversible payment method with someone you can't verify.

![Art Commission Scam](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FdUfxCNpyNQrfWkfwrUquJydT1vmBGSIlHPhQtDd4wpQczQSbI3JUI0z&s=10)

### 11. The Overpayment / "Refund" Scam

**How it works:** Someone contacts you claiming they accidentally sent you too much money for something (a trade, a commission, a service) and asks you to send the difference back. The original "payment" either never happened or was a fraudulent check/chargeback that takes your bank weeks to catch, so by the time it bounces, you've already sent real money out of your own pocket.

**If you already fell for it:**

1. Contact your bank immediately and explain the situation
2. Report it to your local police and to [Discord Trust & Safety](https://dis.gd/report)
3. Block the scammer

**How to avoid it:** If someone claims they overpaid you, that's a them-problem to resolve on their end through the original payment method. You're never obligated to send money back based on someone else's claim.

![Conversation of an Overpayment / "Refund" Scam](https://preview.redd.it/mt-how-to-go-forward-with-this-scam-v0-ytccrbdjev9f1.png?width=1080&crop=smart&auto=webp&s=70d1734b2b7a17d0a2bed196fc463337271cd74a)

### 12. Fake Middleman & Escrow Scams

**How it works:** Common in account/item trading communities (game accounts, in-game currency, skins). Two parties agree to use a "trusted" middleman to hold funds during a trade. The middleman, sometimes an entire server built for this purpose, complete with a fake member count, a vouch channel full of scripted or bot-posted "successful trades," and a professional-looking bot tracking reputation, takes the payment, confirms it to both sides, then goes dark. The server gets deleted within the hour, taking any evidence with it. This works precisely because _real_ middleman services do operate this exact way, so scammers just copy the format convincingly. [Trading communities have documented this exact setup running under different names throughout 2026](https://valoguide.com/guides/fake-valorant-middleman-discord-scam-2026-05-16), usually with a vouch channel that's suspiciously fresh for how full it is.

**Red flags:**

- A vouch channel where the first vouch and dozens more all appeared within days of the server's creation
- Vouches from accounts with no other activity or history
- A middleman that was suggested by the other party rather than one you independently found and verified

**If you already fell for it:**

1. Screenshot everything before it disappears: usernames, the server, the transaction
2. Report to [Discord Trust & Safety](https://dis.gd/report)
3. If you paid by card or a reversible method, dispute the charge with your bank/provider
4. Report to the [FBI's IC3](https://www.ic3.gov/) if the amount is significant

**How to avoid it:** Verify a middleman independently, through the actual marketplace or community's official trust/safety page, rather than trusting whoever the other party links you. Check how long the vouch history actually spans, and click into individual accounts rather than trusting the count.

![Fake Middleman & Escrow Scam Server](https://preview.redd.it/exposing-a-discord-trade-scam-fake-middlemen-and-setup-v0-1ha8epuus84f1.jpg?width=1080&crop=smart&auto=webp&s=7b284e7f568b71f13feb337daa2886c361b3466d)

### 13. Crypto & Investment "Pump" Servers (and DMs)

**How it works:** This ranges from outright pump-and-dump schemes (a group artificially hypes a coin or stock in a Discord server to inflate the price before dumping their own holdings on the people who bought in) to the more elaborate ["pig butchering"](https://dfpi.ca.gov/consumers/crypto/what-are-pig-butchering-scams/) pattern: a stranger builds a relationship with you over weeks or months, sometimes romantic, sometimes just friendly, before introducing a "can't-lose" crypto trading platform. You're walked through setting up a wallet, making small deposits that show fake gains to build confidence, then encouraged to invest larger amounts. When you try to withdraw, you can't, and the platform (and the person) disappear.

There's also a much faster version that skips the relationship-building entirely and lands straight in your DMs: a message out of nowhere claiming you're the winner of a "BTC charity draw," an airdrop, or a giveaway you never entered, with a link like `crypto24cap.com` to "claim" it. The site either asks you to connect your wallet (draining it the moment you approve the transaction) or asks for a small "gas fee" or "verification deposit" to release funds that never existed in the first place.

**Red flags:**

- Any online relationship that moves toward investment advice, especially if it moves quickly to a private platform
- An unsolicited DM claiming you've already won a crypto giveaway, airdrop, or "charity draw" you never entered
- Guaranteed or unusually high returns with little to no risk
- Being taught how to buy crypto specifically so you can send it to _their_ platform
- Being asked to pay a fee, tax, or "gas cost" upfront to unlock money you supposedly already won
- Being unable to withdraw funds once you've deposited

**If you already fell for it:**

1. Stop sending any further funds immediately, no matter what story they give you
2. If you connected a wallet to a scam site, move remaining funds to a new wallet right away, since the old one may now be compromised
3. Report to the [FBI's IC3](https://www.ic3.gov/) and the [FTC](https://reportfraud.ftc.gov/)
4. Contact your bank if the funds were moved from a linked account
5. Document everything (usernames, wallet addresses, links, chat logs) before you lose access

**How to avoid it:** Be skeptical of anyone steering a personal relationship toward investment opportunities, and never invest through a platform someone in a DM or Discord server personally walked you into. A DM telling you that you've won something you never entered is a giveaway scam by definition; no legitimate giveaway, airdrop, or charity draw ever needs you to pay a fee first to receive it. Legitimate exchanges don't need a stranger's guidance to use.

![Crypto & Investment Scam in DMs](https://media.kasperskydaily.com/wp-content/uploads/sites/92/2021/02/12115521/cryptoscam-in-discord-fake-news-services-screenshot-1.png)

## Predatory & Exploitation Scams

### 14. Sextortion

This category is more serious than the others here and deserves to be treated that way. Sextortion is when someone pressures a person, frequently a minor though adults are targeted too, into sharing explicit images or video, then threatens to release that material unless they receive more content, money, or gift cards. It can start anywhere people meet online: gaming servers, DMs, video calls. [The FBI has reported this rising sharply](https://www.fbi.gov/contact-us/field-offices/sacramento/news/sextortion-a-growing-threat-preying-upon-our-nations-teens) over the past few years, with [financially motivated cases increasingly run by organized groups operating outside the victim's country](https://www.cbsnews.com/sanfrancisco/news/sextortion-teens-minors-fbi-warning).

A few things worth knowing if this happens to you or someone you know:

- **Paying does not make it stop.** Offenders frequently continue demanding money even after being paid, or release the material anyway.
- **You are not in trouble, and you will not get in trouble for reporting it.** This applies especially to minors, who are sometimes kept silent by fear of being blamed.
- **Don't delete the messages or images.** They're evidence. Screenshot everything, then report and block.
- If a real image of a minor is involved, [NCMEC's Take It Down](https://takeitdown.ncmec.org/) service can help get it removed from participating platforms without you needing to send the image to anyone.

**If this is happening to you or someone you know:**

1. Stop all contact with the person immediately
2. Report it to [Discord Trust & Safety](https://dis.gd/report)
3. Report it to the FBI at [tips.fbi.gov](https://tips.fbi.gov/) or 1-800-CALL-FBI, or via [fbi.gov/sextortion](https://www.fbi.gov/sextortion) for more resources
4. If a minor is involved, also report to [NCMEC's CyberTipline](https://report.cybertip.org/)
5. Tell a trusted adult, or if you're the trusted adult, respond with support rather than blame. That's consistently what makes the difference in whether a victim reports it at all

This is a sensitive topic, and if you or someone you know is going through this, it's worth reaching out to the resources above directly rather than trying to handle it alone.

## Scams Aimed at Developers & Server Owners

If you're building bots and running a community rather than just using Discord casually, a couple of these are worth flagging specifically:

- **Typosquatted packages.** Always double-check package names for Discord-related libraries before installing. `discord.js` has real near-miss impersonators, and the payload is usually a token grabber targeting the very account you're testing your bot with.
- **Webhook URL leaks.** A leaked webhook URL lets anyone post as your bot/system into whatever channel it's wired to, and is a common exfiltration channel for the malware described above. Treat webhook URLs with the same care as an API key: never commit them, and rotate them if they're ever exposed.
- **Fake "verify to add this bot" flows.** If you're evaluating a bot for your own server, invite it directly through Discord's official bot-invite flow, not a link a stranger sends you that routes through some other "verification" site first.
- **Unauthorized deployments and impersonation.** If someone forks or redeploys your open-source project and represents it as official, that's a trust problem for your users even if no credentials are stolen directly. It's worth having a clear canonical-link policy (only linking to your real domains, for example) so your community can tell the difference.

## Universal Checklist: "I Think I Got Scammed"

Whatever specific scam hit you, the response is mostly the same, roughly in this order:

1. **Change your Discord password**, and make it genuinely different from the old one, not a variation
2. **Enable 2FA** if it wasn't already on
3. **Log out of all sessions** under **Settings › Devices**
4. **Revoke anything unfamiliar** under **Settings › Authorized Apps**, and check server Integrations too if you own/mod one
5. **If you downloaded and ran anything**, assume malware and do a full OS wipe rather than trusting a scan
6. **Change every reused password**, starting with email and anything financial
7. **If money moved**, contact your bank or payment provider about a chargeback or dispute
8. **Report the account** to [Discord Trust & Safety](https://dis.gd/report)
9. **Warn anyone who might get the same message from you** before it spreads further
10. For financial losses, file a report with the [FBI's IC3](https://www.ic3.gov/) or your country's equivalent. It won't always get your money back, but it feeds the data that gets domains and accounts taken down

## Universal Prevention Checklist

- Enable 2FA on Discord (and everywhere else that offers it)
- Don't click links from DMs, even from friends, without a second's pause to check the actual domain
- Don't run executables sent to you by people you don't personally know and trust
- Don't scan QR codes from servers/bots you don't already trust
- Treat "urgency" as a red flag by itself, since legitimate offers rarely expire in 30 minutes
- Use a password manager so you're never reusing passwords across Steam, Discord, email, etc.
- Verify anything claiming to be Discord Staff by going to [support.discord.com](https://support.discord.com) yourself, never by replying in the DM
- For payments to strangers, use a method with buyer protection, never one that's irreversible

## For Server Owners: Reducing Scam Exposure in Your Own Community

- Turn on a higher **Verification Level** in Server Settings to slow down freshly created accounts
- Use a moderation/anti-raid bot that can catch mass DMs or link floods early (eg. [Wick](https://wickbot.com))
- Pin a short "known scams" notice in your rules or welcome channel. A lot of this is just exposure, and a community that's already seen the pattern is much less likely to click
- Restrict who can post links/invites in public channels if your server is a common target
- Periodically audit your own bot's OAuth2 scopes and any integrations connected to the server. The same "least privilege" instinct you'd apply to a production API key applies here

## Resources

- [Discord Trust & Safety report form](https://dis.gd/report)
- [Discord Support](https://support.discord.com/hc/en-us/requests/new)
- [NoTextToSpeech's scam reference list](https://notexttospeech.com/scams)
- [FBI Internet Crime Complaint Center (IC3)](https://www.ic3.gov/)
- [FTC Report Fraud](https://reportfraud.ftc.gov/)
- [FBI Sextortion resources](https://www.fbi.gov/sextortion)
- [NCMEC CyberTipline](https://report.cybertip.org/)
- [NCMEC Take It Down](https://takeitdown.ncmec.org/)

## The Takeaway

Almost none of these scams rely on a technical exploit in Discord itself. They rely on urgency, trust, and the fact that a stolen token behaves exactly like a real login. The single highest-leverage habit you can build is pausing before you click, scan, or run anything that showed up unsolicited, even (especially) when it looks like it came from someone you know. The second highest-leverage habit is just knowing this list exists, since recognizing the shape of a scam is usually enough to stop it cold before it gets anywhere near your token.
