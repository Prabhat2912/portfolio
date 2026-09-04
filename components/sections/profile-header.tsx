"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { USER } from "@/Data/portfolio";
import { PkMark } from "@/components/pk-mark";
import { VerifiedIcon } from "@/components/verified-icon";
import { HandwrittenArrow, HandwrittenNote } from "@/components/handwritten-note";

// Motion-heavy pieces load in isolation: if their chunk ever fails,
// the rest of the page stays fully interactive.
const CoverArt = dynamic(
  () => import("@/components/cover-art").then((m) => m.CoverArt),
  { ssr: false, loading: () => <PkMark className="relative h-24 w-auto text-foreground" /> }
);
const TextFlip = dynamic(
  () => import("@/components/text-flip").then((m) => m.TextFlip),
  { ssr: false, loading: () => <p className="truncate font-mono text-sm text-muted-foreground">{USER.flipSentences[0]}</p> }
);

export function ProfileHeader() {
  return (
    <div className="relative grid grid-cols-[auto_1fr] overflow-visible border-x">
      {/* Cover — full width, avatar overlaps its bottom edge */}
      <figure className="relative col-span-2 flex min-h-52 items-center justify-center overflow-hidden p-6 sm:min-h-72">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 bg-glow"
          aria-hidden
        />
        <CoverArt className="relative w-full max-w-[480px]" />

        <span className="pointer-events-none absolute right-5 top-5 font-hand text-xl text-muted-foreground xl:hidden">
          tap for a sound ↓
        </span>
      </figure>

      {/* Avatar — circular, overlapping the cover boundary */}
      <div className="relative z-10 flex flex-col">
        <div className="shrink-0 border-r border-line px-3 pb-3 sm:px-4">
          <div className="relative -mt-14 size-28 overflow-hidden rounded-full border bg-muted shadow-panel ring-4 ring-background sm:-mt-[4.5rem] sm:size-36">
            <Image
              src={USER.avatar}
              alt={`${USER.displayName} avatar`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Name + rotating line */}
      <div className="flex min-w-0 flex-col">
        <div className="mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4 pt-3">
            <h1 className="truncate text-[2rem]/none font-medium tracking-tight">{USER.displayName}</h1>
            <VerifiedIcon className="size-5 shrink-0" aria-label="Verified" />
          </div>
          <p className="pb-1 pl-4 pt-1 font-mono text-sm text-muted-foreground">{USER.jobTitle}</p>
          <div className="flex h-10 items-center overflow-hidden border-t border-line pl-4">
            <TextFlip
              className="truncate font-mono text-sm text-muted-foreground"
              interval={3}
            >
              {USER.flipSentences.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </TextFlip>
          </div>
        </div>
      </div>

      {/* Gutter annotation */}
      <HandwrittenNote className="top-20 left-full ml-4 hidden w-36 flex-col items-start xl:flex" aria-hidden>
        <HandwrittenArrow className="-scale-y-100 -rotate-6" />
        <span className="ml-1 -rotate-6">
          it follows your cursor
          <span className="block">give it a tap ↓</span>
        </span>
      </HandwrittenNote>
    </div>
  );
}
