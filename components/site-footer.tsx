"use client";

import { ArrowUp } from "lucide-react";
import { SOCIALS, USER } from "@/Data/portfolio";
import { socialIconFor } from "@/components/icons";
import { PkMark } from "@/components/pk-mark";
import { openShortcuts } from "@/components/shortcuts-manager";
import { Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider" aria-hidden />
        </div>

        {/* Identity strip + meta grid removed per request — socials + logotype only. */}

        {/* Social strip */}
        <div className="screen-line-top screen-line-bottom flex w-full items-center justify-between">
          <div className="flex items-center border-x border-line bg-background px-4 py-2.5">
            <PkMark className="h-5 w-auto text-muted-foreground" />
          </div>
          <div className="flex items-center border-x border-line bg-background px-2">
            {SOCIALS.slice(0, 4).map((s) => {
              const Brand = socialIconFor(s.name);
              const Icon = Brand ?? Mail;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${s.title} profile`}
                  className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Outline logotype */}
        <div className="overflow-hidden px-4 pt-10">
          <p
            aria-label="Prabhat"
            className="text-center text-[19vw] font-bold leading-[0.85] tracking-tighter text-transparent select-none [-webkit-text-stroke:1px_var(--border)] md:text-[10rem]"
          >
            PRABHAT
          </p>
          <p className="pb-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} {USER.displayName} · press <kbd className="kbd">?</kbd> ·{" "}
            <button type="button" onClick={openShortcuts} className="link-underline text-foreground">
              view all
            </button>
          </p>
        </div>
      </div>

      <ScrollTop />
    </footer>
  );
}

function ScrollTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed right-4 bottom-20 z-40 flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground shadow-panel transition-colors hover:text-foreground md:bottom-6"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
