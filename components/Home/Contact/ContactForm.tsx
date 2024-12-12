"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error sending the message: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10 ">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold ">
        Let&apos;s Work Together
      </h1>
      <p className="text-gray-200 mt-6 lg:text-base text-xs md:text-sm ">
        I am open to exciting opportunities as a web development intern or
        freelance projects. Whether you’re looking for someone to build dynamic
        web applications, optimize user experiences, or create scalable
        solutions, I’d love to collaborate. Feel free to reach out, and let’s
        bring your ideas to life!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-black flex-1 text-white placeholder:text-fray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 outline-none w-full border-opacity-15 "
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="bg-black flex-1 text-white placeholder:text-fray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 outline-none w-full border-opacity-15 "
          />
        </div>
        <div className="flex mt-5 gap-4 flex-col md:flex-row items-center justify-center">
          <input
            type="text"
            value={formData.email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="bg-black flex-1 text-white placeholder:text-fray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 outline-none w-full border-opacity-15 "
          />
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            placeholder="Phone Number"
            className="bg-black flex-1 text-white placeholder:text-fray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 outline-none w-full border-opacity-15 "
          />
        </div>
        <div>
          <select
            name="option"
            onChange={handleChange}
            value={formData.option}
            className="w-full mt-5 bg-black placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none "
          >
            <option value="volvo">Select a option</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="fullstack">Full Stack Development</option>
          </select>
        </div>
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-5 bg-black placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none "
          rows={7}
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            className={`bg-[#7947df] hover:bg-[#5c2fb7] transition-all duration-300 px-6 py-3 rounded-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
