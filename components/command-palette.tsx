"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Copy,
  Download,
  FileText,
  Link2,
  Mail,
  Moon,
  Search,
  Sun,
  Monitor,
} from "lucide-react";
import { toast } from "sonner";
import { NAV, PROJECTS, SOCIALS, USER } from "@/Data/portfolio";
import { socialIconFor } from "@/components/icons";
import { PkMark, getPkMarkSVG } from "@/components/pk-mark";
import { copyText } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

type Action = {
  id: string;
  group: string;
  title: string;
  hint?: string;
  keywords: string;
  run: () => void;
  icon: ReactNode;
};

function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.location.hash = id;
}

export function CommandPalette() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setQuery("");
      setActive(0);
    };
    const onClose = () => setOpen(false);
    window.addEventListener("cmdk:open", onOpen);
    window.addEventListener("cmdk:close", onClose);
    return () => {
      window.removeEventListener("cmdk:open", onOpen);
      window.removeEventListener("cmdk:close", onClose);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open ]);

  const copyEmail = useCallback(() => {
    copyText(USER.email).then((ok) =>
      ok ? toast.success("Email copied to clipboard") : toast.error("Copy failed")
    );
    setOpen(false);
  }, []);

  const actions: Action[] = useMemo(
    () => [
      ...NAV.map((n) => ({
        id: `go-${n.href}`,
        group: "Navigate",
        title: `Go to ${n.title}`,
        hint: n.href,
        keywords: `${n.title} go section navigate`,
        icon: <ArrowUpRight className="size-4" />,
        run: () => {
          setOpen(false);
          scrollToId(n.href);
        },
      })),
      ...SOCIALS.map((s) => {
        const Brand = socialIconFor(s.name);
        const Icon = Brand ?? (s.name === "email" ? Mail : Link2);
        return {
          id: `social-${s.name}`,
          group: "Social links",
          title: `Open ${s.title} — ${s.handle}`,
          hint: "↗",
          keywords: `${s.title} ${s.handle} social link`,
          icon: <Icon className="size-4" />,
          run: () => {
            setOpen(false);
            window.open(s.href, "_blank", "noopener");
          },
        };
      }),
      ...PROJECTS.slice(0, 6).map((p) => ({
        id: `project-${p.id}`,
        group: "Projects",
        title: `Open ${p.title}`,
        hint: "↗",
        keywords: `${p.title} project ${p.skills.join(" ")}`,
        icon: <ArrowUpRight className="size-4" />,
        run: () => {
          setOpen(false);
          window.open(p.link, "_blank", "noopener");
        },
      })),
      {
        id: "copy-email",
        group: "Actions",
        title: `Copy email — ${USER.email}`,
        hint: "C",
        keywords: "copy email contact mail",
        icon: <Copy className="size-4" />,
        run: copyEmail,
      },
      {
        id: "resume",
        group: "Actions",
        title: "Open résumé (PDF)",
        hint: "↗",
        keywords: "resume cv pdf download",
        icon: <FileText className="size-4" />,
        run: () => {
          setOpen(false);
          window.open(USER.resumeUrl, "_blank", "noopener");
        },
      },
      {
        id: "vcard",
        group: "Actions",
        title: "Download contact card (.vcf)",
        hint: ".vcf",
        keywords: "vcard contact download",
        icon: <Download className="size-4" />,
        run: () => {
          setOpen(false);
          const vcf = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${USER.displayName}`,
            `TITLE:${USER.jobTitle}`,
            `EMAIL:${USER.email}`,
            `URL:${USER.website}`,
            "END:VCARD",
          ].join("\n");
          const blob = new Blob([vcf], { type: "text/vcard" });
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = "prabhat-kumar.vcf";
          a.click();
          URL.revokeObjectURL(a.href);
          toast.success("Contact card downloaded");
        },
      },
      {
        id: "copy-mark",
        group: "Brand",
        title: "Copy mark as SVG",
        hint: "SVG",
        keywords: "mark logo svg brand copy pk",
        icon: <PkMark className="h-4 w-auto" />,
        run: () => {
          setOpen(false);
          copyText(getPkMarkSVG()).then((ok) =>
            ok ? toast.success("Mark as SVG copied") : toast.error("Copy failed")
          );
        },
      },
      {
        id: "theme-light",
        group: "Theme",
        title: "Switch to Light",
        keywords: "theme light",
        icon: <Sun className="size-4" />,
        run: () => {
          setTheme("light");
          setOpen(false);
        },
      },
      {
        id: "theme-dark",
        group: "Theme",
        title: "Switch to Dark",
        keywords: "theme dark",
        icon: <Moon className="size-4" />,
        run: () => {
          setTheme("dark");
          setOpen(false);
        },
      },
      {
        id: "theme-system",
        group: "Theme",
        title: "Use System theme",
        keywords: "theme system auto",
        icon: <Monitor className="size-4" />,
        run: () => {
          setTheme("system");
          setOpen(false);
        },
      },
    ],
    [setTheme, copyEmail]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => `${a.title} ${a.keywords} ${a.group}`.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => (a + 1) % Math.max(filtered.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[active]?.run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  let lastGroup = "";
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 p-4 pt-[12vh] backdrop-blur-[2px]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b px-4">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="kbd">esc</kbd>
        </div>
        <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">No results found.</p>
          )}
          {filtered.map((a, i) => {
            const showGroup = a.group !== lastGroup;
            lastGroup = a.group;
            return (
              <div key={a.id}>
                {showGroup && (
                  <p className="px-3 pb-1 pt-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {a.group}
                  </p>
                )}
                <button
                  type="button"
                  data-index={i}
                  onMouseMove={() => setActive(i)}
                  onClick={() => a.run()}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    i === active ? "bg-accent text-accent-foreground" : "text-foreground"
                  )}
                >
                  <span className="text-muted-foreground">{a.icon}</span>
                  <span className="line-clamp-1 flex-1">{a.title}</span>
                  {a.hint && (
                    <span className="font-mono text-xs text-muted-foreground">{a.hint}</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t px-4 py-2.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5 font-mono">
            <PkMark className="h-4 w-auto" /> menu
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="kbd">↑↓</kbd> navigate <kbd className="kbd">↵</kbd> select
          </span>
        </div>
      </div>
    </div>
  );
}
