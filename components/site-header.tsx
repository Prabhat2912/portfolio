"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { GITHUB_USERNAME, NAV, SOCIALS } from "@/Data/portfolio";
import { GithubIcon } from "@/components/icons";
import { PkMark } from "@/components/pk-mark";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then((m) => m.ThemeToggle), {
  ssr: false,
});

export function openPalette() {
  window.dispatchEvent(new CustomEvent("cmdk:open"));
}

function formatCount(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : `${n}`;
}

function GitHubLink({ href }: { href: string }) {
  // Start null on both server and first client render (no hydration mismatch),
  // then hydrate from cache and revalidate in the background.
  const [followers, setFollowers] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    try {
      const raw = localStorage.getItem("gh-followers");
      if (raw) {
        const { value, at } = JSON.parse(raw) as { value: number; at: number };
        // Fresh for 24h — survives API rate limits on repeat visits.
        if (Date.now() - at < 24 * 3600 * 1000 && typeof value === "number") {
          setFollowers(value);
        }
      }
    } catch {
      // storage unavailable
    }
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((u) => {
        if (cancelled || !u || typeof u.followers !== "number") return;
        setFollowers(u.followers);
        try {
          localStorage.setItem("gh-followers", JSON.stringify({ value: u.followers, at: Date.now() }));
        } catch {
          // storage unavailable
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="GitHub profile"
      className="hidden size-9 items-center justify-center gap-1.5 rounded-md px-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
      style={followers !== null ? { width: "auto" } : undefined}
    >
      <GithubIcon className="size-4" />
      {followers !== null && (
        <span className="font-mono text-xs tabular-nums">{formatCount(followers)}</span>
      )}
    </a>
  );
}

export function SiteHeader() {
  const github = SOCIALS.find((s) => s.name === "github");

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/80 px-2 backdrop-blur-md">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-14 items-center gap-2 border-x px-2 pl-4 md:max-w-3xl">
        <Link href="#top" aria-label="Home" className="group flex shrink-0 items-center">
          <PkMark className="h-6 w-auto text-foreground transition-transform duration-300 group-hover:-rotate-6" />
        </Link>

        <div className="flex-1" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <span className="mx-2 hidden h-5 w-px bg-border sm:block" aria-hidden />
          <button
            type="button"
            onClick={openPalette}
            className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Open command menu (Ctrl+K)"
          >
            <Search className="size-4" />
            <span className="hidden items-center gap-1 sm:flex">
              <kbd className="kbd">⌘</kbd>
              <kbd className="kbd">K</kbd>
            </span>
          </button>
          <span className="mx-2 hidden h-5 w-px bg-border sm:block" aria-hidden />
          {github && <GitHubLink href={github.href} />}
          <span className="mx-2 h-5 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
