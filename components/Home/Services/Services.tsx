import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import { servicesDatas } from "@/types/types";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" className="py-16 text-white bg-[#0f0715] ">
      <SectionHeading>Services</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-10  mt-20 items-center ">
        {servicesData.map((service: servicesDatas, i) => (
          <div
            data-aos="fade-left"
            data-aos-anchor-palcement="top-center"
            data-aos-delay={`${i * 150}`}
            key={service.id}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
