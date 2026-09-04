"use client";

import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";

export function PanelTitleCopy({ id, className }: { id: string; className?: string }) {
  return (
    <CopyButton
      className={cn(
        "absolute top-1 ml-1 size-7 shrink-0 border-none text-muted-foreground opacity-0 transition-opacity group-hover/panel-title:opacity-100",
        className
      )}
      text={() =>
        typeof window === "undefined" ? `#${id}` : `${window.location.origin}${window.location.pathname}#${id}`
      }
      idleIcon={<Link2 />}
      aria-label="Copy link to section"
    />
  );
}
