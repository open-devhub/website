"use client";

import React from "react";
import { Check, IconComponent } from "reicon-react";

interface CopyLinkProps {
  children: React.ReactElement<{
    icon?: IconComponent;
    onClick?: () => void;
  }>;
  link: string;
}

export default function CopyLink({ children, link }: CopyLinkProps) {
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

  return React.cloneElement(children, {
    icon: copied ? Check : children.props.icon,
    onClick: handleCopy,
  });
}
