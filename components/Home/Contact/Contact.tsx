import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div id="contact" className="py-16 mx-auto text-white bg-[#0f0715] ">
      <div className="w-[80%] items-center gap-10 mt-10 mx-auto grid grid-cols-1 xl:grid-cols-2 ">
        <div data-aos="fade-left" data-aos-anchor-palcement="top-center">
          <ContactForm />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-palcement="top-center"
          dos-fade-delay="100"
          className="xl:mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
