import { Link2, Mail } from "lucide-react";
import { SOCIALS } from "@/Data/portfolio";
import { Panel, PanelContent } from "@/components/ui/panel";
import { HandwrittenArrow, HandwrittenNote } from "@/components/handwritten-note";
import { socialIconFor } from "@/components/icons";

export function SocialLinks() {
  return (
    <Panel className="relative">
      <h2 className="sr-only">Social links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIALS.map((item) => {
            const Brand = socialIconFor(item.name);
            const Icon = Brand ?? (item.name === "email" ? Mail : Link2);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener"
                  title={`${item.title} (${item.handle})`}
                  aria-label={`${item.title} profile`}
                  className="flex size-9 items-center justify-center rounded-lg border bg-card text-foreground/80 shadow-panel transition-colors hover:bg-accent hover:text-foreground [&_svg:not([class*='size-'])]:size-4"
                >
                  <Icon className="size-4" />
                  <span className="sr-only">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </PanelContent>

      <HandwrittenNote className="-top-4 right-full mr-4 hidden w-20 flex-col items-end lg:flex">
        <span className="-rotate-6">follow me</span>
        <HandwrittenArrow className="size-7 translate-x-4 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  );
}
