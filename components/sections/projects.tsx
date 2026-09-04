"use client";

import { ArrowUpRight, ChevronsUpDown, Link2 } from "lucide-react";
import { PROJECTS, type Project } from "@/Data/portfolio";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "@/components/ui/panel";
import { PanelTitleCopy } from "@/components/panel-title-copy";
import { Tag } from "@/components/ui/tag";
import { CollapsibleList } from "@/components/collapsible-list";
import { Collapsible } from "@/components/ui/collapsible";

const ID = "projects";

function ProjectItem({ project }: { project: Project }) {
  return (
    <Collapsible
      defaultOpen={project.featured}
      chevron={false}
      triggerClassName="group/project flex w-full items-center text-left hover:bg-accent-muted"
      header={
        <span className="flex min-w-0 flex-1 items-center gap-2 p-4 pr-2">
          <span className="min-w-0 flex-1">
            <span className="mb-1 block leading-snug font-medium text-balance">
              {project.title}
            </span>
            {project.date && (
              <span className="block font-mono text-xs text-muted-foreground">{project.date}</span>
            )}
          </span>
          <a
            className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
            href={project.link}
            target="_blank"
            rel="noopener"
            title="Open project"
            aria-label={`Open ${project.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Link2 className="pointer-events-none size-4" />
          </a>
          <span className="shrink-0 text-muted-foreground">
            <ChevronsUpDown className="size-4" />
          </span>
        </span>
      }
    >
      <div className="space-y-4 border-t border-line p-4">
        <p className="text-[15px] leading-relaxed">{project.description}</p>
        {project.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {project.skills.map((s) => (
              <li key={s} className="flex">
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          className="link inline-flex items-center gap-1 text-sm"
        >
          Visit <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </Collapsible>
  );
}

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        keyExtractor={(p) => p.id}
        renderItem={(p) => <ProjectItem project={p} />}
      />
    </Panel>
  );
}
