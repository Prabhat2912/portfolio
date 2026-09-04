import { STATS, USER } from "@/Data/portfolio";
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>
          <a href="#about">
            Hello<span className="text-muted-foreground">.</span>
          </a>
          <PanelTitleCopy id="about" />
        </PanelTitle>
        <PanelDescription>
          {USER.about[0]}
        </PanelDescription>
      </PanelHeader>
      <PanelContent className="grid gap-4 border-t border-line pt-4">
        {USER.about.slice(1).map((p) => (
          <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
        <div className="grid grid-cols-3 gap-3 pt-1 max-sm:grid-cols-1">
          {STATS.map((s) => (
            <div key={s.label} className="card-lift rounded-xl border bg-card p-4 shadow-panel">
              <p className="text-2xl font-medium tracking-tight">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
