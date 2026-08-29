import staticData from "@/lib/staticdata";
import Link from "next/link";
import { ArrowRightUp, Heart } from "reicon-react";
import Icon from "../svg/Icon";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-lg gap-xl px-[5vw] lg:px-[10vw] xl:px-[20vw] py-md bg-bg-secondary">
      {/* top section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-xl shrink-0 w-full">
        <div className="flex flex-col gap-sm">
          <div className="flex gap-xs items-center">
            <Icon />
            <h1 className="text-lg">DevHub</h1>
          </div>
          <div className="flex flex-col text-text-secondary">
            <span>A collaborative Discord community where developers</span>
            <span>build, contribute and learn together.</span>
          </div>
        </div>
        {/* nav */}
        <div className="flex flex-col gap-sm">
          <h3 className="text-lg text-accent">Navigate</h3>
          <div className="flex flex-col gap-xs">
            {[
              { label: "Rules", href: "/rules" },
              { label: "Resources", href: "/resources" },
              { label: "Pages", href: "/pages" },
              { label: "Blog", href: "/blog" },
              { label: "Partners", href: "/partners" },
            ].map((nav) => (
              <Link
                key={nav.label}
                href={nav.href}
                className="text-text-secondary whitespace-nowrap"
              >
                {nav.label}
                <ArrowRightUp
                  size={14}
                  className="inline-block align-middle ml-xxs"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* external links */}
        <div className="flex flex-col gap-sm">
          <h3 className="text-lg text-accent">Community</h3>
          <div className="flex flex-col gap-xs">
            {[
              { label: "Discord", href: staticData.invite },
              { label: "GitHub", href: staticData.github },
              { label: "Email", href: staticData.email },
            ].map((nav) => (
              <Link
                href={nav.href}
                target="_blank"
                key={nav.label}
                rel="noopener noreferrer"
                className="text-text-secondary  whitespace-nowrap"
              >
                {nav.label}
                <ArrowRightUp
                  size={14}
                  className="inline-block align-middle ml-xxs"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* highlights */}
        <div className="flex flex-col gap-sm">
          <h3 className="text-lg text-accent">Highlights</h3>
          <div className="flex flex-col gap-xs">
            {[
              { label: "Privacy Policy", href: "/pages/privacy-policy" },
              { label: "Security Notice", href: "/pages/security-notice" },
              { label: "Code of Conduct", href: "/pages/code-of-conduct" },
              {
                label: "Acknowledgements",
                href: "/pages/acknowledgements",
              },
            ].map((nav) => (
              <Link
                href={nav.href}
                key={nav.label}
                className="text-text-secondary whitespace-nowrap"
              >
                {nav.label}
                <ArrowRightUp
                  size={14}
                  className="inline-block align-middle ml-xxs"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* bottom section (copyright and a smol msg) */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-text-tertiary w-full py-md border-t border-accent-muted whitespace-nowrap">
        <span>© 2026 Open DevHub. All rights reserved.</span>
        <span className="flex gap-xxs items-center">
          Built with <Heart className="text-accent" weight="Filled" size={16} />{" "}
          by the community, for the community.
        </span>
      </div>
    </footer>
  );
}
