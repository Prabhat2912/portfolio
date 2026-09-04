import { EDUCATION } from "@/Data/portfolio";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";
import { IconTile } from "@/components/ui/icon-tile";
import { Tag } from "@/components/ui/tag";
import { GraduationCap } from "lucide-react";
import { periodRange } from "@/lib/dates";

const ID = "education";

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATION.map((ed) => (
          <div key={ed.id} className="screen-line-bottom space-y-4 py-4">
            <div className="flex items-start gap-3">
              <IconTile>
                <GraduationCap />
              </IconTile>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl/6 font-medium">{ed.school}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {[ed.degree, ed.field].filter(Boolean).join(" · ")}
                  {" · "}
                  {periodRange(ed.start, ed.end)}
                </p>
              </div>
            </div>
            <ul className="list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed marker:text-xs marker:text-muted-foreground">
              {ed.description.map((d) => (
                <li key={d.slice(0, 40)}>{d}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1.5">
              {ed.skills.map((s) => (
                <li key={s} className="flex">
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  );
}
