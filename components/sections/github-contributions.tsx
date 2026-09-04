"use client";

import { useEffect, useMemo, useState } from "react";
import { GITHUB_USERNAME, SOCIALS } from "@/Data/portfolio";

const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;
const WEEKS = 26;

type DayCount = Record<string, number>;

function lastFullWeeks(weeks: number): Date[][] {
  // Columns of Sun–Sat, ending with the current (partial) week.
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const end = new Date(today);
  end.setDate(end.getDate() + (6 - end.getDay()));
  const start = new Date(end);
  start.setDate(start.getDate() - (weeks * 7 - 1));
  const cols: Date[][] = [];
  for (let w = 0; w < weeks; w++) {
    const col: Date[] = [];
    for (let d = 0; d < 7; d++) {
      const dt = new Date(start);
      dt.setDate(dt.getDate() + w * 7 + d);
      col.push(dt);
    }
    cols.push(col);
  }
  return cols;
}

const key = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function level(count: number): number {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

const OPACITY = ["0.06", "0.3", "0.55", "0.8", "1"];

/**
 * Contribution heatmap built from the public GitHub events API
 * (push commits, last ~6 months). Hides itself when offline or
 * rate-limited — never renders fake activity.
 */
export function GitHubContributions() {
  const [counts, setCounts] = useState<DayCount | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const agg: DayCount = {};
        for (let page = 1; page <= 3; page++) {
          const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100&page=${page}`,
            { headers: { Accept: "application/vnd.github+json" } }
          );
          if (!res.ok) throw new Error(`GitHub ${res.status}`);
          const events = (await res.json()) as Array<{
            type: string;
            created_at: string;
            payload?: { commits?: unknown[] };
          }>;
          for (const e of events) {
            if (e.type !== "PushEvent") continue;
            const day = e.created_at.slice(0, 10);
            agg[day] = (agg[day] ?? 0) + (e.payload?.commits?.length || 1);
          }
          if (events.length < 100) break;
        }
        if (!cancelled) setCounts(agg);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const cols = useMemo(() => lastFullWeeks(WEEKS), []);
  const total = useMemo(
    () => (counts ? Object.values(counts).reduce((a, b) => a + b, 0) : 0),
    [counts]
  );

  const github = SOCIALS.find((s) => s.name === "github")?.href ?? "https://github.com";

  if (failed) return null;
  // No push activity in range (or brand-new account): hide rather than
  // flashing an empty "0 commits" grid.
  if (counts && total === 0) return null;

  // Month labels: first column index where the month changes.
  const labels: Array<{ index: number; name: string }> = [];
  let prev = "";
  cols.forEach((col, i) => {
    const name = col[0].toLocaleString("en-US", { month: "short" });
    if (name !== prev) {
      labels.push({ index: i, name });
      prev = name;
    }
  });

  return (
    <div className="border-x">
      <a
        href={github}
        target="_blank"
        rel="noopener"
        aria-label={`GitHub contributions (${total} commits recently)`}
        className="block overflow-x-auto px-4 py-3"
      >
        <div className="flex items-baseline justify-between gap-4">
          <div className="relative h-4 flex-1 font-mono text-[11px] text-muted-foreground" aria-hidden>
            {labels.map((l) => (
              <span key={`${l.index}-${l.name}`} className="absolute" style={{ left: l.index * STEP }}>
                {l.name}
              </span>
            ))}
          </div>
          {counts && (
            <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
              {total} commits · 6mo
            </span>
          )}
        </div>
        <div className="mt-1 flex" style={{ gap: GAP }} role="img" aria-label="Contribution graph">
          {cols.map((col, wi) => (
            <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
              {col.map((day, di) => {
                const c = counts?.[key(day)] ?? 0;
                const lv = level(c);
                const future = day.getTime() > Date.now();
                return (
                  <span
                    key={di}
                    title={counts ? `${c} commit${c === 1 ? "" : "s"} on ${key(day)}` : undefined}
                    className="rounded-[2px] border border-line/60"
                    style={{
                      width: CELL,
                      height: CELL,
                      backgroundColor: "var(--foreground)",
                      opacity: future ? 0 : counts ? OPACITY[lv] : 0.06,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </a>
    </div>
  );
}
