import { SERVICES } from "@/Data/portfolio";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <Panel id="services">
      <PanelHeader>
        <PanelTitle>
          <a href="#services">What I do</a>
          <PanelTitleCopy id="services" />
        </PanelTitle>
      </PanelHeader>
      <div>
        {SERVICES.map((s, i) => (
          <div key={s.title} className={cn("grid grid-cols-1 gap-1 border-t border-line px-4 py-3.5 sm:grid-cols-[48px_180px_1fr] sm:items-baseline sm:gap-3")}>
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[15px] font-medium">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

