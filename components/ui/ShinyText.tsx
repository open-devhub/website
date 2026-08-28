"use client";

import React from "react";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ children, className = "" }) => {
  return <span className={`shiny-text ${className}`}>{children}</span>;
};

export default ShinyText;
