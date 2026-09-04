"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Expandable block with an animated grid-rows reveal.
 * Controlled or uncontrolled; callers style the trigger.
 */
export function Collapsible({
  header,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  triggerClassName,
  chevron = true,
  className,
}: {
  header: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerClassName?: string;
  chevron?: boolean;
  className?: string;
}) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen);
  const open = controlledOpen ?? innerOpen;
  const setOpen = (v: boolean) => {
    setInnerOpen(v);
    onOpenChange?.(v);
  };

  return (
    <div className={cn("group/collapsible", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn("block w-full text-left", triggerClassName)}
      >
        <span className="flex w-full items-center gap-2">
          <span className="min-w-0 flex-1">{header}</span>
          {chevron && (
            <span className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <ChevronsUpDown />
            </span>
          )}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
