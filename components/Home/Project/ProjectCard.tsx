import { ProjectData } from "@/types/types";
import Link from "next/link";
import React from "react";
type Props = {
  projectData: ProjectData;
};
const ProjectCard = ({ projectData }: Props) => {
  return (
    <Link
      href={projectData.url}
      target="_blank"
      key={projectData.id}
      className="bg-blue-950 opacity-95 flex flex-col p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer  "
    >
      <div className=" w-full h-80">
        <iframe
          src={projectData.url}
          title={projectData.name}
          className=" w-[1100px] h-[1000px] max-md:w-[700px] max-lg:w-[750px]  max-xl:w-[800px]  rounded-lg shadow-md"
          style={{
            transform: "scale(0.3)",
            transformOrigin: "0 0",
            border: "none",
          }}
        ></iframe>
      </div>
      <h3 className="mt-4 ">{projectData.name}</h3>
    </Link>
  );
};

export default ProjectCard;
