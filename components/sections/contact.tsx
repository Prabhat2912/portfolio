"use client";

import { useState } from "react";
import { Check, Copy, FileText, Mail } from "lucide-react";
import { SOCIALS, USER } from "@/Data/portfolio";
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";
import { copyText } from "@/lib/clipboard";
import { toast } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const ok = await copyText(USER.email);
    if (!ok) {
      toast.error("Copy failed");
      return;
    }
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>
          <a href="#contact">
            Let&apos;s work together<span className="text-muted-foreground">.</span>
          </a>
          <PanelTitleCopy id="contact" />
        </PanelTitle>
        <PanelDescription>
          Open to internships, freelance and collaborations. Fastest way to reach me is email.
        </PanelDescription>
      </PanelHeader>
      <PanelContent className="border-t border-line">
        <div className="card-lift flex flex-col items-start gap-4 rounded-xl border bg-gradient-to-b from-card to-muted/40 p-5 shadow-panel sm:flex-row sm:items-center">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-foreground text-background">
            <Mail className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email me at</p>
            <a href={`mailto:${USER.email}`} className="link-underline break-all font-medium">
              {USER.email}
            </a>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-2 text-sm font-medium shadow-panel transition-colors hover:bg-accent"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied" : "Copy (C)"}
            </button>
            <a
              href={USER.resumeUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <FileText className="size-4" /> Résumé
            </a>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener"
              className="rounded-full border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-panel transition-colors hover:text-foreground"
            >
              {s.title}: {s.handle}
            </a>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
