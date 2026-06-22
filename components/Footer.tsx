import data from "@/lib/staticdata.config";
import Link from "next/link";

const { email } = data;

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Rules", href: "/rules" },
  { label: "Resources", href: "/resources" },
  { label: "Pages", href: "/pages/getting-started" },
  { label: "Partners", href: "/partners" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        background: "#030305",
        borderColor: "rgba(99,102,241,0.12)",
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="font-bold text-[#6366f1] text-lg"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {"</>"}
              </span>
              <span
                className="font-bold text-[#e2e2f0] text-sm tracking-widest uppercase"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Dev<span style={{ color: "#6366f1" }}>Hub</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
            >
              A collaborative Discord community where developers build,
              contribute and learn together.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#a5b4fc" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[#a5b4fc]"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: "#3f3f46",
                      }}
                    >
                      {link.label}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#a5b4fc" }}
            >
              Community
            </h4>
            <div className="flex gap-3">
              <a
                href="/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all hover:border-[rgba(99,102,241,0.5)]"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  color: "#52525b",
                }}
                aria-label="Discord"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.124 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="/github"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all hover:border-[rgba(99,102,241,0.5)]"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  color: "#52525b",
                }}
                aria-label="GitHub"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={`mailto:${email}`}
                className="w-9 h-9 flex items-center justify-center transition-all hover:border-[rgba(99,102,241,0.5)]"
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  color: "#52525b",
                }}
                aria-label="Email"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 5.25C3 4.007 4.007 3 5.25 3h13.5C19.993 3 21 4.007 21 5.25v13.5c0 1.243-1.007 2.25-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.75V5.25zm2.052-.75a.75.75 0 0 0-.552.243L12 11.46l7.5-6.717a.75.75 0 0 0-.552-.243H5.052zm13.698 2.64L12.796 12.03a.75.75 0 0 1-.592.27.75.75 0 0 1-.592-.27L5.25 7.14v11.61h13.5V7.14z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(99,102,241,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
          >
            &copy; {new Date().getFullYear()} DevHub. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
          >
            Built with love by the community, for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
