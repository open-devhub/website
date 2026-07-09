/**
 * Centralized color system for the entire DevHub website.
 *
 * Every color used across the codebase is defined here. To change a color
 * site-wide, update the value in this file only.
 *
 * Colors are grouped into logical ramps:
 *  - background  : dark base layers
 *  - text        : foreground text shades
 *  - accent      : the indigo / violet brand palette
 *  - semantic    : success / warning / danger
 *  - cyan        : cyan / blue accents used in features and buttons
 *  - pink        : pink / magenta accents
 *  - lime        : lime / green feature accent
 *  - neutral     : gray badge variant
 *  - decorative  : aurora / bits default colors
 *  - partner     : partner-specific fallback colors
 *  - shadow      : translucent black for box-shadows
 *  - hsl         : raw HSL channel values consumed by globals.css :root
 */

// ─── Backgrounds ──────────────────────────────────────────────
export const background = {
  primary: "#030305",
  secondary: "#07070d",
  card: "#06060E",
  drawer: "#0a0a12",
  borderGlow: "#120F17",
  featureInner: "rgb(9, 9, 20)",
  glowButtonText: "#050508",
} as const;

// ─── Text ─────────────────────────────────────────────────────
export const text = {
  primary: "#e2e2f0",
  secondary: "#c4c4cc",
  muted: "#71717a",
  dim: "#52525b",
  veryDim: "#3f3f46",
  shinyDefault: "#b5b5b5",
  white: "#ffffff",
} as const;

// ─── Accent (indigo / violet brand palette) ───────────────────
export const accent = {
  indigo: "#6366f1",
  indigoHover: "#5558e3",
  indigoLight: "#818cf8",
  indigoLightest: "#a5b4fc",
  indigoShine: "#c7d2fe",
  violet: "#8b5cf6",
  violet400: "#a78bfa",
  violet300: "#c4b5fd",
  violet600: "#7c3aed",
  violet700: "#6d28d9",
  purple400: "#c084fc",
} as const;

// ─── Semantic ─────────────────────────────────────────────────
export const semantic = {
  success: "#22c55e",
  successText: "#4ade80",
  warning: "#f59e0b",
  danger: "#ef4444",
} as const;

// ─── Cyan / Blue ──────────────────────────────────────────────
export const cyan = {
  400: "#22d3ee",
  glowButton: "#4fbfff",
  glowButtonHover: "#00d4e0",
  sky400: "#38bdf8",
  blue400: "#60a5fa",
} as const;

// ─── Pink / Magenta ───────────────────────────────────────────
export const pink = {
  400: "#f472b6",
  magenta: "#e100ff",
} as const;

// ─── Lime ─────────────────────────────────────────────────────
export const lime = {
  400: "#a3e635",
} as const;

// ─── Neutral (gray badge) ────────────────────────────────────
export const neutral = {
  gray400: "#9ca3af",
} as const;

// ─── Decorative (aurora / bits defaults) ──────────────────────
export const decorative = {
  auroraNearWhite: "#f7f7f7",
  auroraPaleCyan: "#a0f7f7",
  auroraBlue: "#1234ff",
  auroraPaleViolet: "#c0a7f7",
  auroraBlue2: "#1274ff",
} as const;

// ─── Partner fallbacks ────────────────────────────────────────
export const partner = {
  bannerBrown: "#7F5C3D",
  fallbackGradientStart: "#0f0f2e",
  fallbackGradientMid: "#1a1040",
  fallbackGradientEnd: "#0d0d1f",
} as const;

// ─── Shadow (translucent black) ───────────────────────────────
export const shadow = {
  sm: "rgba(0,0,0,0.1)",
  navbarRest: "rgba(0,0,0,0.3)",
  navbarScrolled: "rgba(0,0,0,0.5)",
} as const;

// ─── HSL channel values (globals.css :root) ───────────────────
// These are the raw HSL triplets consumed by CSS custom properties
// and Tailwind's hsl(var(--*)) color references.
export const hsl = {
  background: "240 30% 2%",
  foreground: "240 10% 89%",
  card: "240 25% 5%",
  cardForeground: "240 10% 89%",
  popover: "240 25% 5%",
  popoverForeground: "240 10% 89%",
  primary: "239 84% 67%",
  primaryForeground: "0 0% 100%",
  secondary: "240 20% 8%",
  secondaryForeground: "240 10% 89%",
  muted: "240 20% 10%",
  mutedForeground: "240 5% 45%",
  accent: "239 84% 67%",
  accentForeground: "0 0% 100%",
  destructive: "0 84% 60%",
  destructiveForeground: "0 0% 98%",
  border: "240 20% 10%",
  input: "240 20% 10%",
  ring: "239 84% 67%",
} as const;

// ─── Helper: rgba from accent indigo ─────────────────────────
/**
 * Returns an rgba() string for the primary indigo accent at a given opacity.
 * Equivalent to `rgba(99, 102, 241, ${opacity})`.
 */
export function indigo(opacity: number): string {
  return `rgba(99, 102, 241, ${opacity})`;
}

/**
 * Returns an rgba() string for the violet accent at a given opacity.
 * Equivalent to `rgba(139, 92, 246, ${opacity})`.
 */
export function violet(opacity: number): string {
  return `rgba(139, 92, 246, ${opacity})`;
}

/**
 * Returns an rgba() string for the success green at a given opacity.
 * Equivalent to `rgba(34, 197, 94, ${opacity})`.
 */
export function success(opacity: number): string {
  return `rgba(34, 197, 94, ${opacity})`;
}

/**
 * Returns an rgba() string for the warning amber at a given opacity.
 * Equivalent to `rgba(245, 158, 11, ${opacity})`.
 */
export function warning(opacity: number): string {
  return `rgba(245, 158, 11, ${opacity})`;
}

/**
 * Returns an rgba() string for the danger red at a given opacity.
 * Equivalent to `rgba(239, 68, 68, ${opacity})`.
 */
export function danger(opacity: number): string {
  return `rgba(239, 68, 68, ${opacity})`;
}

/**
 * Returns an rgba() string for the cyan glow at a given opacity.
 * Equivalent to `rgba(0, 245, 255, ${opacity})`.
 */
export function cyanGlow(opacity: number): string {
  return `rgba(0, 245, 255, ${opacity})`;
}

/**
 * Returns an rgba() string for translucent black at a given opacity.
 */
export function black(opacity: number): string {
  return `rgba(0, 0, 0, ${opacity})`;
}

/**
 * Returns an rgba() string for translucent white at a given opacity.
 */
export function white(opacity: number): string {
  return `rgba(255, 255, 255, ${opacity})`;
}

// ─── Language colors (resources) ─────────────────────────────
export const languageColors: Record<string, string> = {
  TypeScript: accent.indigo,
  JavaScript: accent.indigoLightest,
  React: accent.indigoLight,
  Python: accent.violet,
  Go: accent.violet400,
  Rust: accent.violet300,
  C: accent.violet600,
  "C++": accent.violet700,
  Java: accent.violet,
  Kotlin: accent.violet400,
  Swift: accent.violet300,
  PHP: accent.indigoLight,
  Ruby: accent.indigoLightest,
  SQL: accent.indigo,
  Design: accent.violet,
  "Full-Stack": accent.indigo,
  Git: accent.indigoLightest,
  DevOps: accent.indigoLight,
};

// ─── Partner logo colors ─────────────────────────────────────
export const partnerLogoColors = [
  {
    bg: indigo(0.15),
    color: accent.indigoLight,
    border: indigo(0.4),
  },
  {
    bg: violet(0.15),
    color: accent.violet400,
    border: violet(0.4),
  },
  {
    bg: indigo(0.12),
    color: accent.indigo,
    border: indigo(0.35),
  },
  {
    bg: indigo(0.1),
    color: accent.violet300,
    border: "rgba(165, 180, 252, 0.35)",
  },
  {
    bg: "rgba(109, 40, 217, 0.15)",
    color: accent.violet400,
    border: "rgba(109, 40, 217, 0.4)",
  },
];

// ─── Feature colors (home) ───────────────────────────────────
export const featureColors = {
  build: accent.indigo,
  help: cyan[400],
  feedback: lime[400],
  creative: semantic.warning,
  learn: accent.violet,
  collaborate: pink[400],
} as const;

// ─── Stat colors (home) ─────────────────────────────────────
export const statColors = {
  members: accent.indigo,
  projects: accent.violet,
  resources: accent.indigoLight,
} as const;

// ─── Showcase project colors ────────────────────────────────
export const showcaseColors = {
  discordJs: semantic.warning,
  typescript: accent.indigo,
  nextjs: text.secondary,
} as const;
