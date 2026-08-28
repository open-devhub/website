"use client";

import { useTheme } from "@/states/theme";
import { useEffect } from "react";

export function Theme() {
  useEffect(() => {
    useTheme.getState().loadTheme();
  }, []);

  return <></>;
}
