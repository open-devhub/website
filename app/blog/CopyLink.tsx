"use client";

import React from "react";

interface CopyLinkProps {
  children: React.ReactElement<{ onClick?: () => void }>;
  link: string;
}

export default function CopyLink({ children, link }: CopyLinkProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return React.cloneElement(children, {
    onClick: handleCopy,
  });
}
