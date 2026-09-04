import Link from "next/link";
import { NAV } from "@/Data/portfolio";

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-2 pb-[env(safe-area-inset-bottom,0)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-around">
        {NAV.slice(0, 5).map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="flex flex-1 items-center justify-center rounded-md px-2 py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
