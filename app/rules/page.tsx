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
      "Don't promote your server, product, or service without permission from the staff team. If you'd like to share a project, use the appropriate channel and keep it relevant to the conversation and community.",
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
    <div className="min-h-screen relative" style={{ background: "#030305" }}>
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-20 left-8 hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: "1.5px solid rgba(99,102,241,0.4)",
            borderLeft: "1.5px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      <div className="absolute top-20 right-8 hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: "1.5px solid rgba(99,102,241,0.4)",
            borderRight: "1.5px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span
              style={{
                color: "rgba(99,102,241,0.5)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {"{"}
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#a5b4fc" }}
            >
              Community Guidelines
            </span>
            <span
              style={{
                color: "rgba(99,102,241,0.5)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {"}"}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-pixelify), 'Pixelify Sans', monospace",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e2e2f0 0%, #a5b4fc 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The{" "}
              <span
                style={{ color: "#818cf8", WebkitTextFillColor: "#818cf8" }}
              >
                Rules
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#52525b" }}
          >
            DevHub is built on trust, respect, and a shared love of building.
            These rules exist to keep it that way. Everyone is welcome here, as
            long as everyone feels welcome here.
          </motion.p>
        </motion.div>

        {/* Rules */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {rules.map((rule, i) => (
            <motion.div
              key={rule.number}
              id={`rule-${rule.number}`}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.04, duration: 0.5 },
                },
              }}
              className="scroll-mt-32 group"
            >
              <div
                className="relative p-6 md:p-8 overflow-hidden"
                style={{
                  background: "rgba(7, 7, 15, 0.7)",
                  border: "1px solid rgba(99,102,241,0.1)",
                }}
              >
                {/* Corner brackets */}
                <div
                  className="absolute top-2 left-2 w-4 h-4"
                  style={{
                    borderTop: "1.5px solid rgba(99,102,241,0.3)",
                    borderLeft: "1.5px solid rgba(99,102,241,0.3)",
                  }}
                />
                <div
                  className="absolute top-2 right-2 w-4 h-4"
                  style={{
                    borderTop: "1.5px solid rgba(99,102,241,0.3)",
                    borderRight: "1.5px solid rgba(99,102,241,0.3)",
                  }}
                />
                <div
                  className="absolute bottom-2 left-2 w-4 h-4"
                  style={{
                    borderBottom: "1.5px solid rgba(99,102,241,0.3)",
                    borderLeft: "1.5px solid rgba(99,102,241,0.3)",
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 w-4 h-4"
                  style={{
                    borderBottom: "1.5px solid rgba(99,102,241,0.3)",
                    borderRight: "1.5px solid rgba(99,102,241,0.3)",
                  }}
                />

                <div className="flex gap-4 md:gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span
                      className="font-bold text-3xl md:text-4xl"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: "rgba(100,110,255,0.15)",
                      }}
                    >
                      {rule.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-2"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: "#e2e2f0",
                      }}
                    >
                      <span
                        className="text-sm mr-2"
                        style={{ color: "#a5b4fc" }}
                      >
                        {">"}
                      </span>
                      {rule.title}
                    </h2>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: "#52525b",
                      }}
                    >
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="relative p-6 overflow-hidden"
            style={{
              background: "rgba(99,102,241,0.03)",
              border: "1px solid rgba(99,102,241,0.15)",
            }}
          >
            <div
              className="absolute top-2 left-2 w-3 h-3"
              style={{
                borderTop: "1.5px solid rgba(99,102,241,0.3)",
                borderLeft: "1.5px solid rgba(99,102,241,0.3)",
              }}
            />
            <div
              className="absolute bottom-2 right-2 w-3 h-3"
              style={{
                borderBottom: "1.5px solid rgba(99,102,241,0.3)",
                borderRight: "1.5px solid rgba(99,102,241,0.3)",
              }}
            />

            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#52525b" }}
            >
              <span style={{ color: "#a5b4fc" }}>{"//"}</span> Rules are subject
              to change. Moderators reserve the right to take action based on
              the spirit of these rules, not just the letter. Violations may
              result in warnings, mutes, kicks, or permanent bans depending on
              severity.
            </p>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      />
    </div>
  );
}
