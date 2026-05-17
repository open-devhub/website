"use client";

import { menuItem, menuOverlay } from "@/lib/animations";
import data from "@/lib/staticdata.config";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rules", label: "Rules" },
  { href: "/resources", label: "Resources" },
  { href: "/pages/getting-started", label: "Pages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const { invite } = data;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div
          className={`mx-auto px-4 transition-all duration-300 ${
            scrolled ? "max-w-3xl" : "max-w-4xl"
          }`}
        >
          <div
            className={`glass rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${
              scrolled ? "bg-[rgba(5,5,8,0.9)]" : "bg-[rgba(10,10,20,0.6)]"
            }`}
            style={{
              border: "1px solid rgba(0, 245, 255, 0.12)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,245,255,0.05)"
                : "0 4px 16px rgba(0,0,0,0.2)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-4"></span>
              <span className="font-[var(--font-space-grotesk)] font-bold text-[#f0f0f0] text-xl tracking-tight">
                Dev<span className="text-[#4fbfff]">Hub</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" &&
                    pathname.startsWith(
                      link.href.split("/")[1]
                        ? `/${link.href.split("/")[1]}`
                        : link.href,
                    ));
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.span
                      className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer font-[var(--font-inter)] ${
                        isActive
                          ? "text-[#4fbfff]"
                          : "text-[#9ca3af] hover:text-[#f0f0f0]"
                      }`}
                      whileHover={{ color: "#4fbfff" }}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-[rgba(0,245,255,0.08)]"
                          style={{ border: "1px solid rgba(0,245,255,0.15)" }}
                        />
                      )}
                    </motion.span>
                  </Link>
                );
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-[#4fbfff] text-[#050508] px-4 py-1.5 rounded-full text-sm font-semibold font-[var(--font-space-grotesk)]"
                whileHover={{
                  boxShadow: "0 0 20px rgba(0,245,255,0.5)",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.97 }}
                style={{ boxShadow: "0 0 10px rgba(0,245,255,0.2)" }}
              >
                <DiscordIcon />
                Join Discord
              </motion.a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-[rgba(255,255,255,0.05)]"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={
                    menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="block w-5 h-0.5 bg-[#f0f0f0] origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-0.5 bg-[#f0f0f0]"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={
                    menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="block w-5 h-0.5 bg-[#f0f0f0] origin-center"
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuOverlay}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#050508] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={menuItem}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-bold font-[var(--font-space-grotesk)] text-[#f0f0f0] hover:text-[#4fbfff] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={menuItem}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <a
                  href="/invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#4fbfff] text-[#050508] px-8 py-3 rounded-full text-lg font-semibold font-[var(--font-space-grotesk)]"
                >
                  <DiscordIcon />
                  Join Discord
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.124 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
