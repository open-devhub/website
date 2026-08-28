"use client";

import ShinyText from "@/components/ui/ShinyText";
import { rules } from "@/content/site/rules";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Rules() {
  const [activeRule, setActiveRule] = useState("");

  useEffect(() => {
    const currentHash = window?.location?.hash?.replace("#", "") || "";

    if (currentHash) {
      setTimeout(() => {
        setActiveRule((prevRule) => {
          return prevRule !== currentHash ? currentHash : prevRule;
        });
      }, 0);
    }
  }, []);

  return (
    <div className="flex flex-col gap-md items-center py-lg">
      <h1 className="text-gradient font-bold text-4xl lg:text-5xl">
        Community <ShinyText>Rules</ShinyText>
      </h1>
      <div className="flex flex-col items-center gap-xxs text-text-secondary whitespace-nowrap text-sm md:text-md lg:text-lg">
        <span>
          DevHub is built on trust, respect, and a shared love of building.
          These rules
        </span>
        <span>
          exist to keep it that way. Everyone is welcome here, as long as
          everyone feels
        </span>
        <span>welcome here</span>
      </div>

      {/* rule cards */}
      <div className="flex flex-col gap-md max-w-240 p-lg">
        {rules.map((rule) => (
          <div
            key={rule.number}
            id={rule.number}
            className={`p-md gap-lg bg-bg-secondary flex rounded-md border ${rule.number === activeRule ? "border-accent" : "border-transparent"}`}
          >
            <span className="font-display text-4xl text-accent-muted">
              {rule.number}
            </span>
            <div className="flex flex-col gap-sm">
              <div>
                <Link href={`#${rule.number}`} className="inline">
                  <h3 className="text-2xl inline text-text-primary">
                    {rule.title}
                  </h3>
                </Link>
              </div>
              <p className="text-text-secondary">{rule.description}</p>
            </div>
          </div>
        ))}
        <div className={`p-md gap-lg bg-bg-secondary flex rounded-md`}>
          <div className="flex flex-col gap-md">
            <p className="text-text-secondary">
              Rules are subject to change. Moderators reserve the right to take
              action based on the spirit of these rules, not just the letter.
              Violations may result in warnings, mutes, kicks, or permanent bans
              depending on severity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
