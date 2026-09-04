"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { copyText } from "@/lib/clipboard";

export function CopyButton({
  text,
  idleIcon,
  className,
  ...props
}: Omit<React.ComponentProps<"button">, "children" | "onClick"> & {
  text: string | (() => string);
  idleIcon?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-colors [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={async () => {
        const ok = await copyText(typeof text === "function" ? text() : text);
        if (!ok) return;
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      {...props}
    >
      {copied ? <Check /> : idleIcon}
    </button>
  );
}
