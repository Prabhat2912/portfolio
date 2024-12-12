import { skills } from "@/types/types";
import Image from "next/image";
import React from "react";
type Props = {
  skill: skills;
};
const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;

  return (
    <div className="p-6 flex flex-col justify-between h-44 hover:bg-blue-900 transition-all cursor-pointer text-center rounded-lg bg-gray-900 text-white  ">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 font-[600] ">{title}</h1>
    </div>
  );
};

export default SkillCard;
