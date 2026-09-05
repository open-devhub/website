"use client";

import Button from "@/components/ui/Button";
import React from "react";
import { Check, Link as LinkIcon } from "reicon-react";

interface CopyLinkProps {
  link: string;
}

export default function CopyLink({ link }: CopyLinkProps) {
  const [copied, setCopied] = React.useState(false);
  const feedbackTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  React.useEffect(
    () => () => {
      if (feedbackTimeout.current) {
        clearTimeout(feedbackTimeout.current);
      }
    },
    [],
  );

  const handleCopy = async () => {
    setCopied(true);

    if (feedbackTimeout.current) {
      clearTimeout(feedbackTimeout.current);
    }

    feedbackTimeout.current = setTimeout(() => setCopied(false), 2000);

    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      if (feedbackTimeout.current) {
        clearTimeout(feedbackTimeout.current);
      }
      setCopied(false);
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <Button
      className="px-xs py-sm h-md"
      icon={copied ? Check : LinkIcon}
      onClick={handleCopy}
    />
  );
}
