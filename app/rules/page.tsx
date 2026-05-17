"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

const rules = [
  {
    number: "01",
    title: "Be a decent human",
    description:
      "Harassment, bullying, personal attacks, none of that flies here. Debate ideas all you want, but the moment it becomes about the person instead of the problem, you've crossed the line. We're a mixed crowd of skill levels, backgrounds, and cultures. Act like it.",
  },
  {
    number: "02",
    title: "Keep discussions healthy",
    description:
      "Tech conversations get passionate, that's fine. Deliberately starting drama, baiting people into arguments, or stirring the pot for entertainment is not. If you're here to fight, you're in the wrong server.",
  },
  {
    number: "03",
    title: "Critique the code, not the coder",
    description:
      "When someone shares their work, they're putting themselves out there. Give feedback that's actually useful. Tear apart the logic, question the approach, suggest alternatives, just leave the ego out of it.",
  },
  {
    number: "04",
    title: "Respect staff members",
    description:
      "Mods and admins keep this place from descending into chaos. Follow their instructions. If you think a call was wrong, appeal it through the right channels, not by turning the server into a debate stage.",
  },
  {
    number: "05",
    title: "Use channels for what they're for",
    description:
      "Every channel has a purpose. If it doesn't belong there, it belongs somewhere else, probably #chat. Keeping things on-topic is what makes this place actually useful instead of just loud.",
  },
  {
    number: "06",
    title: "Format your code like you care",
    description:
      "Triple backticks exist for a reason. Pasting a wall of unformatted code and asking why it's broken is a fast way to get ignored. Wrap it, label the language, and give people enough context to actually help you.",
  },
  {
    number: "07",
    title: "No spam, no noise",
    description:
      "Repeated messages, emoji floods, copypasta, pointless reactions, nobody wants it. Same goes for pinging staff or roles when it's not necessary. If your message doesn't add anything, it probably doesn't need to be sent.",
  },
  {
    number: "08",
    title: "No advertising without a green light",
    description:
      "Don’t promote your server, product, or service without permission from the staff team. If you’d like to share a project, use the appropriate channel and keep it relevant to the conversation and community.",
  },
  {
    number: "09",
    title: "Keep personal info personal",
    description:
      "Don't share anyone's personal information without their consent, not their name, location, DMs, or anything else. Doxxing is an immediate ban, no discussion.",
  },
  {
    number: "10",
    title: "No malicious activity",
    description:
      "Malware, phishing links, exploits, scams, hacking discussions, none of it. Cybersecurity curiosity is welcome in the right context; actively distributing harmful stuff is not.",
  },
  {
    number: "11",
    title: "Respect licenses and creators",
    description:
      "Don't share pirated software, cracked tools, or copyrighted content you don't have the right to distribute. Open source thrives on trust. Don't be the one who undermines it.",
  },
  {
    number: "12",
    title: "Bots go in bot channels",
    description:
      "Commands belong in the channels built for them. Don't spam or try to break the bots, they're here to help, not to be stress-tested.",
  },
  {
    number: "13",
    title: "English in public channels",
    description:
      "Our staff can only moderate what they can understand. Keep public conversations in English so everyone, including the people keeping things civil, can follow along.",
  },
  {
    number: "14",
    title: "Keep it SFW",
    description:
      "Explicit content of any kind is a hard no, media, links, avatars, usernames, discussions. This is a place people open from their desk, their couch, and sometimes in public. Behave accordingly.",
  },
  {
    number: "15",
    title: "Voice channels aren't a soundboard",
    description:
      "Mic spam, earrape, and disruptive noises ruin it for everyone in the call. Be a normal person, take turns, keep the noise down, and don't make people regret joining.",
  },
  {
    number: "16",
    title: "Don't try to game the rules",
    description:
      "Alt accounts to dodge bans, loopholes in the wording, technicalities, we've seen it all. If you're looking for a way around the rules, you've already broken the spirit of them.",
  },
  {
    number: "17",
    title: "Follow Discord's own rules too",
    description:
      "Everything here sits on top of Discord's Terms of Service and Community Guidelines. If it violates those, it violates ours. No exceptions.",
  },
];

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-[#050508] relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7c3aed] rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-[var(--font-jetbrains)] text-[#4fbfff] uppercase tracking-widest mb-6"
          >
            Community Guidelines
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="font-[var(--font-space-grotesk)] font-bold text-6xl md:text-7xl text-[#f0f0f0] mb-8 leading-[1.1]"
          >
            The <span className="gradient-text">Rules</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[#6b7280] text-lg leading-relaxed max-w-2xl mx-auto font-[var(--font-inter)]"
          >
            DevHub is built on trust, respect, and a shared love of building.
            These rules exist to keep it that way. Everyone is welcome here, as
            long as everyone feels welcome here.
          </motion.p>
        </motion.div>

        {/* Rules as flowing text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {rules.map((rule, i) => (
            <motion.div
              key={rule.number}
              id={`rule-${rule.number}`}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: i * 0.05, duration: 0.5 },
                },
              }}
              className="scroll-mt-32"
            >
              <div className="flex gap-6 md:gap-10">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span
                    className="font-[var(--font-space-grotesk)] font-bold text-5xl"
                    style={{ color: "rgba(0, 245, 255, 0.08)" }}
                  >
                    {rule.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h2 className="font-[var(--font-space-grotesk)] font-bold text-2xl text-[#f0f0f0] mb-3">
                    {rule.title}
                  </h2>
                  <p className="text-[#6b7280] text-lg leading-relaxed font-[var(--font-inter)]">
                    {rule.description}
                  </p>
                </div>
              </div>

              {/* Separator line */}
              {i < rules.length - 1 && (
                <motion.div
                  className="mt-12 h-px bg-gradient-to-r from-[rgba(0,245,255,0.1)] via-[rgba(0,245,255,0.05)] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-[rgba(0,245,255,0.1)]"
        >
          <p className="text-[#6b7280] text-base leading-relaxed font-[var(--font-inter)] max-w-2xl">
            <span className="text-[#4fbfff] font-semibold">Note:</span> Rules
            are subject to change. Moderators reserve the right to take action
            based on the spirit of these rules, not just the letter. Violations
            may result in warnings, mutes, kicks, or permanent bans depending on
            severity.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
