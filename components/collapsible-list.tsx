"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** "Show more / Show less" list with hairline dividers, like the reference. */
export function CollapsibleList<T>({
  items,
  max = 4,
  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group/collapsible">
      <ul>
        {items.slice(0, max).map((item, index) => (
          <li
            key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
            className="border-b border-line"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>

      <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <ul className="overflow-hidden">
          {items.slice(max).map((item, index) => (
            <li
              key={typeof keyExtractor === "function" ? keyExtractor(item) : max + index}
              className="border-b border-line"
            >
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>

      {items.length > max && (
        <div className="screen-line-top -mt-px flex items-center justify-center py-4">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-lg border bg-muted/60 py-1.5 pr-2.5 pl-3 text-sm font-medium shadow-[inset_0_0_1px] shadow-foreground/20 transition-colors hover:bg-accent"
          >
            {open ? "Show less" : "Show more"}
            <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
          </button>
        </div>
      )}
    </div>
  );
}
