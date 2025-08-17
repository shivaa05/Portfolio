import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrSend } from "react-icons/gr";
import { FaGithub, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xgvzbkzz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      navigate("/submit");
    } else {
      alert("Something went wrong, please try again!");
    }
  };
  return (
    <div className="contact-cont pt-28 pb-36 h-auto">
      <div className="contact flex gap-20 px-24">
        <div className="min-w-[45%] pt-10 flex flex-col ">
          <img src="five.svg" alt="image" className="h-96" />
          <div className=" icons-cont text-4xl flex gap-5 h-[100%] items-center-safe justify-center">
            <Link
              to="https://github.com/shivaa05?tab=repositories"
              className="bg-zinc-700 px-3 py-3 rounded-full"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shiva-verma-700b9228b/"
              className="bg-zinc-700 px-3 py-3 rounded-full"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://leetcode.com/u/shivaverma32/"
              className="bg-zinc-700 px-3 py-3 rounded-full"
            >
              <SiLeetcode />
            </Link>
            <Link
              to="https://www.instagram.com/itz_shiva_5/"
              className="bg-zinc-700 px-3 py-3 rounded-full"
            >
              <FaInstagram />
            </Link>
            <Link
              to="mailto:shivaverma3211.a@gmail.com"
              className="bg-zinc-700 px-3 py-3 rounded-full"
            >
              <BiLogoGmail />
            </Link>
            <Link
              to="tel:+917523924452"
              className="bg-zinc-700 px-3 py-3 rounded-full"
            >
              <FaPhoneAlt />
            </Link>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xgvzbkzz"
          method="POST"
          className="border-[1px] border-indigo-400 w-2/3 p-5 rounded-lg "
          onSubmit={submitHandler}
        >
          <h2 className="text-2xl mb-2">Send me a message</h2>
          <p className="text-zinc-400 mb-3">
            Please fill out the form to get in touch with me
          </p>
          <label htmlFor="full-name" className="text-xl mb-3 inline-block">
            First Name: <span className="text-red-400 text-2xl">*</span>
          </label>
          <input
            type="text"
            required
            name="Full Name"
            id="full-name"
            placeholder="Enter your name"
            className="w-full border-[1px] border-zinc-400 bg-[#0d1224] text-lg px-2 py-1 rounded-md outline-none mb-4"
          />
          <label htmlFor="email" className="text-xl mb-3 inline-block">
            Email: <span className="text-red-400 text-2xl ">*</span>
          </label>
          <input
            type="email"
            name="Email"
            id="last-name"
            required
            placeholder="Enter your email"
            className="w-full border-[1px] border-zinc-400 bg-[#0d1224] text-lg px-2 py-1 rounded-md outline-none mb-4"
          />
          <label htmlFor="contact" className="text-xl mb-3 inline-block">
            Phone:
          </label>
          <input
            type="text"
            name="Cntact"
            id="contact"
            placeholder="Contact no."
            className="w-full border-[1px] border-zinc-400 bg-[#0d1224] text-lg px-2 py-1 rounded-md outline-none mb-4"
          />
          <label htmlFor="message" className="text-xl mb-3 inline-block">
            Message:{" "}
          </label>
          <br />
          <textarea
            name="Message"
            id="message"
            className="w-full border-[1px] border-zinc-400 bg-[#0d1224] text-lg px-2 py-1 rounded-md outline-none mb-4"
            placeholder="Write here"
          ></textarea>
          <button className="flex justify-center align-middle w-52 items-center bg-blue-600 gap-2 py-2 rounded-md self-center mx-auto mt-4 cursor-pointer">
            Contact us
            <GrSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
