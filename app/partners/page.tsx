"use client";

import ShinyText from "@/components/bits/ShinyText";
import { Partner, partners } from "@/content/partners";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  accent,
  background,
  cyan,
  indigo,
  partner as partnerColors,
  partnerLogoColors,
  semantic,
  text,
} from "@/lib/colors";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  ExternalLink,
  Github,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

type DiscordData = {
  guildId: string;

  name: string;
  description: string | null;

  memberCount: number;
  onlineCount: number;

  iconUrl: string | null;
  bannerUrl: string | null;

  traits: string[];
};

const TRAIT_LABELS: Record<string, { label: string; icon: typeof BadgeCheck }> =
  {
    VERIFIED: { label: "Verified", icon: BadgeCheck },
    PARTNERED: { label: "Partnered", icon: ShieldCheck },
    COMMUNITY: { label: "Community", icon: Users },
    DISCOVERABLE: { label: "Discoverable", icon: Compass },
  };

function hexToGradient(hex: string): string {
  // Parse hex and create two shifted colours for the gradient
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // Darker variant for gradient start
  const dr = Math.max(0, r - 60);
  const dg = Math.max(0, g - 60);
  const db = Math.max(0, b - 60);
  // Mid + lighter for accent stop
  const lr = Math.min(255, r + 30);
  const lg = Math.min(255, g + 30);
  const lb = Math.min(255, b + 30);
  return `linear-gradient(135deg, rgb(${dr},${dg},${db}) 0%, rgb(${r},${g},${b}) 45%, rgb(${lr},${lg},${lb}) 100%)`;
}

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return n.toString();
}

function CornerBrackets() {
  return (
    <>
      {[
        { top: 8, left: 8, borderTop: true, borderLeft: true },
        { top: 8, right: 8, borderTop: true, borderRight: true },
        { bottom: 8, left: 8, borderBottom: true, borderLeft: true },
        { bottom: 8, right: 8, borderBottom: true, borderRight: true },
      ].map((pos, j) => (
        <div
          key={j}
          className="absolute w-3 h-3 z-10 pointer-events-none"
          style={{
            top: pos.top,
            left: pos.left,
            right: (pos as any).right,
            bottom: (pos as any).bottom,
            borderTop: pos.borderTop ? `1.5px solid ${indigo(0.2)}` : undefined,
            borderLeft: pos.borderLeft
              ? `1.5px solid ${indigo(0.2)}`
              : undefined,
            borderBottom: (pos as any).borderBottom
              ? `1.5px solid ${indigo(0.2)}`
              : undefined,
            borderRight: (pos as any).borderRight
              ? `1.5px solid ${indigo(0.2)}`
              : undefined,
          }}
        />
      ))}
    </>
  );
}

function SkeletonBlock({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`animate-pulse ${className ?? ""}`}
      style={{ background: indigo(0.08), ...style }}
    />
  );
}

function PartnerCardSkeleton({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.08 + 0.3, duration: 0.5 },
      }}
      className="relative overflow-hidden"
      style={{
        background: background.card,
        border: `1px solid ${indigo(0.12)}`,
      }}
    >
      <CornerBrackets />

      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4 / 1", minHeight: 150, maxHeight: 200 }}
      >
        <SkeletonBlock className="absolute inset-0" />
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-end justify-between -mt-8 mb-4">
          <SkeletonBlock className="relative w-20 h-20 z-10 flex-shrink-0" />
          <div className="flex items-center gap-4 pb-1">
            <SkeletonBlock className="w-16 h-3" />
            <SkeletonBlock className="w-20 h-3" />
          </div>
        </div>

        <SkeletonBlock className="w-40 h-4 mb-2" />
        <SkeletonBlock className="w-full h-3 mb-1.5" />
        <SkeletonBlock className="w-2/3 h-3 mb-4" />

        <div className="flex flex-wrap gap-1.5 mb-5">
          <SkeletonBlock className="w-16 h-5" />
          <SkeletonBlock className="w-20 h-5" />
          <SkeletonBlock className="w-14 h-5" />
        </div>

        <div className="flex flex-wrap gap-3">
          <SkeletonBlock className="w-32 h-9" />
          <SkeletonBlock className="w-28 h-9" />
        </div>
      </div>
    </motion.div>
  );
}

function PartnerCard({
  partner,
  discord,
  index,
}: {
  partner: Partner;
  discord: DiscordData | null;
  index: number;
}) {
  const logoStyle = partnerLogoColors[index % partnerLogoColors.length];

  const serverName = discord?.name ?? "Unknown Server";

  const serverDescription =
    discord?.description ?? "No server description available.";

  const tags = partner.tags ?? [];

  const traits = (discord?.traits ?? []).filter((t) => TRAIT_LABELS[t]);

  const fallbackBanner = partner.banner;

  const isImageBanner = fallbackBanner?.startsWith("https://") ?? false;

  // Prefer Discord banner
  const showImageBanner =
    discord?.bannerUrl ?? (isImageBanner ? fallbackBanner : null);

  const showColourBanner =
    !showImageBanner && fallbackBanner && !isImageBanner
      ? fallbackBanner
      : null;

  // Prefer Discord icon
  const logoSrc = discord?.iconUrl ?? null;

  const logoInitials = serverName
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.08 + 0.3, duration: 0.5 },
      }}
      className="relative overflow-hidden"
      style={{
        background: background.card,
        border: `1px solid ${indigo(0.12)}`,
      }}
    >
      <CornerBrackets />

      {/* ── Banner ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4 / 1", minHeight: 150, maxHeight: 200 }}
      >
        {showImageBanner ? (
          <img
            src={showImageBanner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : showColourBanner ? (
          <div
            className="absolute inset-0"
            style={{ background: hexToGradient(showColourBanner) }}
          />
        ) : (
          // fallback dark gradient if nothing provided
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${partnerColors.fallbackGradientStart} 0%, ${partnerColors.fallbackGradientMid} 40%, ${partnerColors.fallbackGradientEnd} 100%)`,
            }}
          />
        )}

        {/* Circuit noise overlay */}
        <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(7,7,15,0.98))",
          }}
        />
      </div>

      {/* ── Body ── */}
      <div className="px-5 pb-5">
        {/* Logo + stats row */}
        <div className="flex items-end justify-between -mt-8 mb-4">
          {/* Server logo */}
          <div
            className="relative w-20 h-20 flex items-center justify-center text-sm font-bold z-10 overflow-hidden flex-shrink-0"
            style={{
              background: logoSrc ? "transparent" : logoStyle.bg,
              fontFamily: "var(--font-geist-mono)",
              color: logoStyle.color,
              letterSpacing: "0.05em",
            }}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={serverName}
                className="w-full h-full object-cover"
              />
            ) : (
              logoInitials
            )}
          </div>

          {/* Live stats from Discord */}
          <div
            className="flex items-center gap-4 pb-1"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {discord ? (
              <>
                <span className="flex items-center gap-1.5 text-xs">
                  <span
                    className="w-1.5 h-1.5"
                    style={{ background: semantic.success }}
                  />
                  <span style={{ color: text.dim }}>
                    {formatCount(discord.onlineCount)} online
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <span
                    className="w-1.5 h-1.5"
                    style={{ background: text.dim }}
                  />
                  <span style={{ color: text.dim }}>
                    {formatCount(discord.memberCount)} members
                  </span>
                </span>
              </>
            ) : null}
          </div>
        </div>

        {/* Name */}
        <h2
          className="text-base font-semibold mb-1.5"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: text.primary,
          }}
        >
          {serverName}
        </h2>

        {/* Traits */}
        {traits.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2.5">
            {traits.map((trait) => {
              const { label, icon: Icon } = TRAIT_LABELS[trait];
              return (
                <span
                  key={trait}
                  className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: cyan.blue400,
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                >
                  <Icon className="w-3 h-3" />
                  {label}
                </span>
              );
            })}
          </div>
        )}

        {/* Description */}
        <p
          className="text-xs leading-relaxed mb-4"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: text.dim,
          }}
        >
          {serverDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: accent.indigoLight,
                background: indigo(0.08),
                border: `1px solid ${indigo(0.2)}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <motion.a
            href={`https://discord.gg/${partner.inviteCode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold tracking-wider uppercase text-white"
            style={{
              fontFamily: "var(--font-geist-mono)",
              background: indigo(0.2),
              border: `1px solid ${indigo(0.5)}`,
            }}
            whileHover={{
              background: indigo(0.3),
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <DiscordIcon />
            Join Server
            <ArrowRight className="w-3 h-3" />
          </motion.a>

          {partner.websiteUrl && (
            <motion.a
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium tracking-wider uppercase"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: text.muted,
                border: `1px solid ${indigo(0.2)}`,
              }}
              whileHover={{
                color: text.secondary,
                borderColor: indigo(0.45),
                background: indigo(0.05),
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-3 h-3" />
              Website
            </motion.a>
          )}

          {partner.githubUrl && (
            <motion.a
              href={partner.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium tracking-wider uppercase"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: text.muted,
                border: `1px solid ${indigo(0.2)}`,
              }}
              whileHover={{
                color: text.secondary,
                borderColor: indigo(0.45),
                background: indigo(0.05),
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-3 h-3" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PartnersPage() {
  const [discordData, setDiscordData] = useState<
    Record<string, DiscordData | null>
  >({});
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(partners.map((p) => [p.inviteCode, true])),
  );

  useEffect(() => {
    const controller = new AbortController();

    const fetchPartnerData = async () => {
      await Promise.all(
        partners.map(async (p) => {
          try {
            const res = await fetch(
              `https://discord.com/api/v10/invites/${p.inviteCode}?with_counts=true`,
              { signal: controller.signal },
            );

            if (!res.ok) {
              setDiscordData((prev) => ({ ...prev, [p.inviteCode]: null }));
              return;
            }

            const data = await res.json();
            const guild = data.guild;

            if (!guild) {
              setDiscordData((prev) => ({ ...prev, [p.inviteCode]: null }));
              return;
            }

            setDiscordData((prev) => ({
              ...prev,
              [p.inviteCode]: {
                guildId: guild.id,

                name: guild.name,
                description: guild.description ?? null,

                memberCount: data.approximate_member_count ?? 0,
                onlineCount: data.approximate_presence_count ?? 0,

                iconUrl: guild.icon
                  ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`
                  : null,

                bannerUrl: guild.banner
                  ? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=1024`
                  : null,

                traits: guild.features ?? [],
              },
            }));
          } catch (error) {
            const aborted =
              error instanceof DOMException && error.name === "AbortError";
            if (!aborted) {
              setDiscordData((prev) => ({ ...prev, [p.inviteCode]: null }));
            }
          } finally {
            if (!controller.signal.aborted) {
              setLoadingMap((prev) => ({ ...prev, [p.inviteCode]: false }));
            }
          }
        }),
      );
    };

    fetchPartnerData();
    return () => controller.abort();
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{ background: background.primary }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${indigo(0.07)} 0%, transparent 70%)`,
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-20 left-8 hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: `1.5px solid ${indigo(0.4)}`,
            borderLeft: `1.5px solid ${indigo(0.4)}`,
          }}
        />
      </div>
      <div className="absolute top-20 right-8 hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: `1.5px solid ${indigo(0.4)}`,
            borderRight: `1.5px solid ${indigo(0.4)}`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* ─── Header ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-14 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span
              style={{
                color: indigo(0.5),
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {"{"}
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: accent.indigoLightest,
              }}
            >
              Trusted Communities
            </span>
            <span
              style={{
                color: indigo(0.5),
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
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.15,
            }}
            className="mb-5"
          >
            <span
              style={{
                background: `linear-gradient(135deg, ${text.primary} 0%, ${text.secondary} 40%, ${accent.indigoLightest} 70%, ${accent.violet} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our{" "}
            </span>
            <span
              style={{
                color: accent.indigoLight,
                WebkitTextFillColor: accent.indigoLight,
              }}
            >
              <ShinyText
                text="Partner"
                className="cursor-target"
                speed={3.5}
                delay={1}
                color={accent.indigoLight}
                shineColor={accent.indigoShine}
                spread={90}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </span>
            <span
              style={{
                background: `linear-gradient(135deg, ${text.primary} 0%, ${text.secondary} 40%, ${accent.indigoLightest} 70%, ${accent.violet} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              Servers
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
              color: text.dim,
            }}
          >
            Communities we believe in. Each partner has been hand-picked for
            their quality, culture, and the value they bring to developers. Find
            your next home here.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 mx-auto"
            style={{
              height: "1px",
              maxWidth: 280,
              background: `linear-gradient(90deg, transparent, ${indigo(0.35)}, transparent)`,
            }}
          />
        </motion.div>

        {/* ─── Cards ─── */}
        <div className="flex flex-col gap-6">
          {partners.map((partner, i) =>
            loadingMap[partner.inviteCode] ? (
              <PartnerCardSkeleton key={partner.inviteCode} index={i} />
            ) : (
              <PartnerCard
                key={partner.inviteCode}
                partner={partner}
                discord={discordData[partner.inviteCode] ?? null}
                index={i}
              />
            ),
          )}
        </div>

        {/* ─── Footer note ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div
            className="mx-auto mb-6"
            style={{
              height: "1px",
              maxWidth: 280,
              background: `linear-gradient(90deg, transparent, ${indigo(0.25)}, transparent)`,
            }}
          />
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: text.veryDim,
            }}
          >
            Want to partner with DevHub?{" "}
            <a
              href="/discord"
              style={{ color: accent.indigo, textDecoration: "none" }}
            >
              Reach out →
            </a>
          </p>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${indigo(0.3)}, transparent)`,
        }}
      />
    </div>
  );
}

function DiscordIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.124 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
