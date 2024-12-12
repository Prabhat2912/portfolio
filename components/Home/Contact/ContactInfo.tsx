import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaLinkedin, FaTree } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col  ">
          <FaEnvelope className="w-4 h-4 md:h-7 text-white" />
        </div>
        <div className="contact_us">
          <a href={`mailto:${contactData.email}`}>Email Us</a>
        </div>
      </div>
      <div className="flex mt-8 items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col ">
          <FaLinkedin className="w-4 h-4 md:h-7 text-white" />
        </div>
        <div className="contact_us">
          <a href={contactData.linkedIn} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex mt-8 items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col ">
          <FaTree className="w-4 h-4 md:h-7 text-white" />
        </div>
        <div className="contact_us">
          <a href={contactData.linkerTree} target="_blank">
            LinkrTree
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
