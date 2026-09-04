"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { SHORTCUTS, USER } from "@/Data/portfolio";
import { copyText } from "@/lib/clipboard";

/**
 * Global keyboard shortcuts (inspired by chanhdai.com):
 *  Ctrl/⌘+K or "/"  → command menu
 *  G then H/S/E/P/C → jump to sections
 *  T → toggle theme · C → copy email · ? → this help
 */
export function ShortcutsManager() {
  const { setTheme, resolvedTheme } = useTheme();
  const [helpOpen, setHelpOpen] = useState(false);
  const pendingG = useRef<number>(0);

  useEffect(() => {
    const onHelp = () => setHelpOpen(true);
    window.addEventListener("shortcuts:open", onHelp);
    return () => window.removeEventListener("shortcuts:open", onHelp);
  }, []);

  useEffect(() => {
    const isTyping = () => {
      const el = document.activeElement as HTMLElement | null;
      if (!el) return false;
      const tag = el.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable;
    };

    const go = (hash: string) => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onKey = (e: KeyboardEvent) => {
      // Cmd/Ctrl+K always works
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("cmdk:open"));
        return;
      }
      if (isTyping()) {
        if (e.key === "Escape") (document.activeElement as HTMLElement)?.blur();
        return;
      }

      // G-sequences (like vim / chanhdai "g h")
      if (e.key.toLowerCase() === "g" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        pendingG.current = Date.now();
        return;
      }
      if (pendingG.current && Date.now() - pendingG.current < 900) {
        const k = e.key.toLowerCase();
        const map: Record<string, string> = {
          h: "#top",
          a: "#about",
          s: "#stack",
          e: "#experience",
          p: "#projects",
          c: "#contact",
        };
        if (map[k]) {
          e.preventDefault();
          pendingG.current = 0;
          go(map[k]);
          return;
        }
      }
      pendingG.current = 0;

      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "/") {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("cmdk:open"));
      } else if (e.key === "?") {
        e.preventDefault();
        setHelpOpen(true);
      } else if (e.key.toLowerCase() === "t") {
        window.dispatchEvent(new CustomEvent("theme:toggle"));
        toast.success(`Theme: ${resolvedTheme === "dark" ? "light" : "dark"}`);
      } else if (e.key.toLowerCase() === "c") {
        copyText(USER.email).then((ok) =>
          ok ? toast.success("Email copied to clipboard") : toast.error("Copy failed")
        );
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    if (!helpOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHelpOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [helpOpen]);

  if (!helpOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      onClick={() => setHelpOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
    >
      <div
        className="w-full max-w-md rounded-xl border bg-popover p-5 text-popover-foreground shadow-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium">Keyboard shortcuts</h2>
          <kbd className="kbd">esc</kbd>
        </div>
        <ul className="mt-4 space-y-2.5">
          {SHORTCUTS.map((s) => (
            <li key={s.description} className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted-foreground">{s.description}</span>
              <span className="flex items-center gap-1">
                {s.keys.map((k) => (
                  <kbd key={k} className="kbd">
                    {k}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
          Tip: press <kbd className="kbd">G</kbd> then <kbd className="kbd">P</kbd> to jump to projects.
        </p>
      </div>
    </div>
  );
}

export function openShortcuts() {
  window.dispatchEvent(new CustomEvent("shortcuts:open"));
}
