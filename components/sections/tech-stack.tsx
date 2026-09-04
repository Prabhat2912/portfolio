import { TECH_STACK } from "@/Data/portfolio";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";
import { techIconFor } from "@/components/icons";

const ID = "stack";
const ORDER = ["Language", "Frontend", "Backend", "Data & Cloud", "AI", "Workflow & Tools"];

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-48 -z-[1] hidden w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {ORDER.map((category, index) => {
          const items = TECH_STACK.filter((t) => t.category === category);
          if (!items.length) return null;
          const categoryId = `${ID}-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[12rem_1fr]"
            >
              <div id={categoryId} className="pl-4 text-sm leading-6">
                <span className="mr-1.5 font-mono text-muted-foreground/80 select-none" aria-hidden>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category}
              </div>

              <ul aria-labelledby={categoryId} className="flex flex-wrap gap-1.5 px-4">
                {items.map((item) => {
                  const Brand = techIconFor(item.icon);
                  return (
                    <li key={item.key} className="flex">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="flex h-6 items-center justify-center gap-1.5 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground ring-1 ring-inset ring-border dark:bg-zinc-900/80 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80"
                      >
                        {Brand ? (
                          <Brand />
                        ) : (
                          <span className="font-sans font-bold">{item.title.charAt(0)}</span>
                        )}
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
