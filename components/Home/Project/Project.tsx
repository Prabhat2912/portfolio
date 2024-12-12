import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/Data/data";
import { ProjectData } from "@/types/types";

const Project = () => {
  return (
    <div id="projects" className="py-16 bg-[#050709] text-white ">
      <SectionHeading>My Project</SectionHeading>

      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center ">
        {projectData.map((project: ProjectData, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-anchor-palcement="top-center"
            data-aos-delay={`${i * 150}`}
          >
            <ProjectCard key={project.id} projectData={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
