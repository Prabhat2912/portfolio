function parsePeriodDate(str: string, fallbackMonth: "first" | "last"): Date {
  if (str.includes(".")) {
    const [mm, yyyy] = str.split(".");
    return new Date(Number(yyyy), Number(mm) - 1, 1);
  }
  const mm = fallbackMonth === "last" ? 11 : 0;
  return new Date(Number(str), mm, 1);
}

/** "2y 7m" / "9m" / "1y" — same rules as the reference portfolio. */
export function periodDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".");
  const endHasMonth = end ? end.includes(".") : true;

  // Both year-only: granularity is years, no month arithmetic needed.
  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10);
    if (years <= 0) return "";
    return `${years}y`;
  }

  const startDate = parsePeriodDate(start, "first");
  const endDate = end ? parsePeriodDate(end, "last") : new Date();

  // +1 to count both the start and end months inclusively.
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;
  if (totalMonths <= 0) return "";

  if (totalMonths < 12) return `${totalMonths}m`;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (months === 0) return `${years}y`;
  return `${years}y ${months}m`;
}

/** "01.2024–∞" style range label. */
export function periodRange(start?: string, end?: string): string {
  return `${start ?? "?"}–${end ?? "∞"}`;
}
