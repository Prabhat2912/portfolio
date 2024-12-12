import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-16 bg-[#050709] text-white ">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 ">
        <div data-aos="fade-left" data-aos-anchor-palcement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 ">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500 ">
            {aboutInfo.description}
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-palcement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center mx-auto "
        >
          {aboutInfo.stats.map((stat, i) => (
            <div key={i}>
              <Image
                src={stat.image}
                width={80}
                height={80}
                alt={stat.name}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-center">{stat.value}</p>
              <p className="text-base sm:text-lg text-gray-400 text-center ">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-anchor-palcement="top-center"
        data-aos-delay="200"
        className=" mt-8 mx-auto   flex max-sm:flex-wrap justify-between  gap-16 w-[80%]"
      >
        {aboutInfo.skills.map((skill, i) => (
          <div key={i} className="flex items-center   space-x-6 mb-6 ">
            <div
              className={`w-7 h-7 ${skill.color}  flex flex-col items-center justify-center `}
            >
              <FaCheck />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
