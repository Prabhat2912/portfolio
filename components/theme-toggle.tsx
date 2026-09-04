"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onToggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
    window.addEventListener("theme:toggle", onToggle);
    return () => window.removeEventListener("theme:toggle", onToggle);
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <span className="inline-flex size-9 items-center justify-center rounded-md border border-transparent" aria-hidden />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme (T)" : "Switch to dark theme (T)"}
      title="Toggle theme (T)"
      className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
