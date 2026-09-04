"use client";

import { ChevronsUpDown, CodeXml, Infinity as InfinityIcon } from "lucide-react";
import { EXPERIENCES } from "@/Data/portfolio";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";
import { IconTile } from "@/components/ui/icon-tile";
import { Tag } from "@/components/ui/tag";
import { Collapsible } from "@/components/ui/collapsible";
import { periodDuration } from "@/lib/dates";
import { cn } from "@/lib/utils";

const ID = "experience";

export function Experience() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experience</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            id={`experience-${exp.id}`}
            className="group/experience screen-line-bottom scroll-mt-14 space-y-4 py-4"
          >
            <div className="flex items-start gap-3 sm:items-center">
              <div className="flex size-6 shrink-0 items-center justify-center font-mono text-sm font-bold text-muted-foreground select-none">
                {exp.company.charAt(0)}
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 pr-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl/6 font-medium">
                  {exp.website ? (
                    <a className="link" href={exp.website} target="_blank" rel="noopener">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>

                <dl className="flex min-w-0 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground">
                  <dt className="sr-only">Location</dt>
                  <dd className="truncate">{exp.location}</dd>
                  <dt className="sr-only">Location type</dt>
                  <dd>({exp.locationType})</dd>
                  {exp.current && (
                    <>
                      <dt className="sr-only">Employment status</dt>
                      <dd>
                        <span className="sr-only">Current</span>
                        <span className="relative flex size-2.5 translate-x-px translate-y-px items-center justify-center">
                          <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-info opacity-50" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-info" />
                        </span>
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>

            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
              {exp.positions.map((pos, pi) => {
                const duration = periodDuration(pos.start, pos.end);
                return (
                  <Collapsible
                    key={pos.title}
                    defaultOpen={pi === 0}
                    chevron={false}
                    className="group/experience-position relative"
                    triggerClassName={cn(
                      "group relative outline-none",
                      "before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:z-[-1] before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted"
                    )}
                    header={
                      <>
                        <div className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/experience-position:flex">
                          <span className="size-full -translate-y-[9px] rounded-bl-sm border-b border-l" />
                        </div>
                        <div className="relative z-[1] mb-1 flex items-start gap-3 text-base">
                          <IconTile>
                            <CodeXml />
                          </IconTile>
                          <h4 className="flex-1 font-medium text-balance">{pos.title}</h4>
                          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                            <ChevronsUpDown />
                          </div>
                        </div>
                        <dl className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                          <div>
                            <dt className="sr-only">Employment Type</dt>
                            <dd>{pos.employmentType}</dd>
                          </div>
                          <span className="h-4 w-px self-center bg-border" aria-hidden />
                          <div>
                            <dt className="sr-only">Employment Period</dt>
                            <dd className="flex items-center gap-0.5 tabular-nums">
                              <span>{pos.start}</span>
                              <span className="font-mono">—</span>
                              {pos.end ? (
                                <span>{pos.end}</span>
                              ) : (
                                <InfinityIcon className="size-[18px] translate-y-[0.5px]" aria-label="Present" strokeWidth={1.5} />
                              )}
                            </dd>
                          </div>
                          {duration && (
                            <>
                              <span className="h-4 w-px self-center bg-border" aria-hidden />
                              <div>
                                <dt className="sr-only">Duration</dt>
                                <dd className="tabular-nums">{duration}</dd>
                              </div>
                            </>
                          )}
                        </dl>
                      </>
                    }
                  >
                    <div className="pt-3 pb-1 pl-9">
                      <ul className="list-disc space-y-1.5 text-[15px] leading-relaxed marker:text-xs marker:text-muted-foreground">
                        {pos.description.map((d) => (
                          <li key={d.slice(0, 40)}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    {pos.skills.length > 0 && (
                      <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                        {pos.skills.map((s) => (
                          <li key={s} className="flex">
                            <Tag>{s}</Tag>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Collapsible>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
