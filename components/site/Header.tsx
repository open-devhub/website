"use client";

import Icon from "@/components/svg/Icon";
import Button from "@/components/ui/Button";
import { useTheme } from "@/states/theme";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, List3, Moon, Plus, Sun } from "reicon-react";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-sm z-50 mx-auto w-full max-w-280">
      <div className="flex border border-accent-muted items-center justify-between p-xs px-5 rounded-md bg-bg-secondary mx-4 relative">
        {/* logo */}
        <Link href="/" className="undecorated">
          <div className="flex items-center gap-xs">
            {/* <img
            src="https://raw.githubusercontent.com/open-devhub/.github/refs/heads/main/assets/icon_darker.png"
            width="32"
          /> */}
            <Icon className="size-8" />
            <h1 className="text-lg">DevHub</h1>
          </div>
        </Link>
        {/* navigation bar */}
        <nav
          className={`gap-md absolute right-0 top-full translate-y-2 -translate-x-10 rounded-md rounded-tr-none border border-accent-muted bg-bg-secondary p-md flex flex-col ${
            !isDropdownOpen ? "hidden" : ""
          } sm:flex sm:relative sm:top-auto sm:right-auto sm:translate-x-0 sm:translate-y-0 sm:flex-row sm:border-none sm:p-0`}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Rules", href: "/rules" },
            { label: "Resources", href: "/resources" },
            { label: "Pages", href: "/pages" },
            { label: "Blog", href: "/blog" },
            { label: "Partners", href: "/partners" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-text-secondary text-sm flex gap-xs items-center"
              onClick={() => setDropdownOpen(false)}
            >
              <span>{item.label}</span>
              <ArrowRight size={12} className="sm:hidden" />
            </Link>
          ))}
        </nav>
        {/* join button */}
        <div className="flex items-center gap-xxs">
          {/* dark/light mode switch */}
          <Button
            icon={theme === "dark" ? Sun : Moon}
            className="px-sm border-none flex hover:bg-bg-secondary hover:text-accent!"
            onClick={toggleTheme}
          />

          <Link
            href="/join"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button variant="primary" icon={Plus} className="px-sm">
              <span className="text-sm hidden md:flex">Join Discord</span>
            </Button>
          </Link>

          {/* hamburgur menu for mobile devices */}
          <Button
            className="px-sm flex sm:hidden"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            icon={List3}
          />
        </div>
      </div>
    </header>
  );
}
