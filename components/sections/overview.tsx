"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Briefcase, Clock, Link2, Mail, MapPin, User } from "lucide-react";
import { JOBS, USER } from "@/Data/portfolio";
import { Panel, PanelContent } from "@/components/ui/panel";
import { IconTile } from "@/components/ui/icon-tile";

function IntroItem({
  icon: Icon,
  children,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <IconTile>
        <Icon />
      </IconTile>
      <p className="min-w-0 flex-1 truncate text-balance" aria-label={label}>
        {children}
      </p>
    </div>
  );
}

/** "05:31 PM // same time" — profile-tz time plus offset vs the visitor. */
function useRelativeTime(): string {
  const [text, setText] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: USER.timeZone,
      hour12: true,
    });
    const tick = () => {
      const now = new Date();
      const time = fmt.format(now);
      const tzDate = (d: Date, tz: string) =>
        new Date(d.toLocaleString("en-US", { timeZone: tz }));
      const diffH = Math.round(
        (tzDate(now, USER.timeZone).getTime() -
          tzDate(now, Intl.DateTimeFormat().resolvedOptions().timeZone).getTime()) /
          3_600_000
      );
      const rel = diffH === 0 ? "same time" : `${Math.abs(diffH)}h ${diffH > 0 ? "ahead" : "behind"}`;
      setText(`${time} // ${rel}`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return text;
}

export function Overview() {
  const time = useRelativeTime();

  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {JOBS.map((job) => (
          <IntroItem key={`${job.title}-${job.company}`} icon={Briefcase} label={`${job.title} at ${job.company}`}>
            <span className="font-medium">{job.title}</span>
            <span className="text-muted-foreground"> @{job.company}</span>
          </IntroItem>
        ))}

        <IntroItem icon={MapPin} label={`Location: ${USER.address}`}>
          <a
            className="link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.mapsQuery)}`}
            target="_blank"
            rel="noopener"
          >
            {USER.address}
          </a>
        </IntroItem>

        <IntroItem icon={Clock} label="Local time">
          {time || "—"}
        </IntroItem>

        <IntroItem icon={Mail} label={`Email: ${USER.email}`}>
          <a className="link" href={`mailto:${USER.email}`}>
            {USER.email}
          </a>
        </IntroItem>

        <IntroItem icon={Link2} label="Website">
          <a className="link" href={USER.website} target="_blank" rel="noopener">
            {USER.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        </IntroItem>

        <IntroItem icon={User} label={`Pronouns: ${USER.pronouns}`}>
          {USER.pronouns}
        </IntroItem>
      </PanelContent>

      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-[1] hidden w-px -translate-x-2 border-r border-dashed border-line max-sm:hidden"
        aria-hidden
      />
    </Panel>
  );
}
