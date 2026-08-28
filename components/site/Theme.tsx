"use client";

import { useTheme } from "@/states/theme";
import { useEffect } from "react";

export function Theme() {
  const { loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return <></>;
}
