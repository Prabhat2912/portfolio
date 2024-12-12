import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import { skills } from "@/types/types";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="py-16 text-white bg-[#0f0715] ">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mx-auto w-[80%] mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center ">
        {skillsData.map((skill: skills, i) => (
          <div
            key={i}
            data-aos="flip-left"
            data-aos-anchor-palcement="top-center"
            data-aos-delay={`${i * 100}`}
          >
            <SkillCard key={i} skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
