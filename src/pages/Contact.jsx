import React from "react";
import Form from "../components/ContactContainer/Form";
import { Github, Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="relative w-full h-full mt-5 md:mt-12 z-10">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="border px-4 py-1 md:py-1.5 md:px-4 rounded-full bg-[rgb(21,23,32)]">
          Willing to collaboration
        </div>

        <div className="mt-5 text-center text-[7vw] md:text-[4vw] font-bold md:leading-19 md:max-w-[70vw] lg:max-w-[50vw]">
          Let us build something extraordinary
        </div>

        <p className="md:text-3xl mt-2 md:mt-8 max-w-[90vw] text-center md:max-w-[70vw] font-normal md:text[25px]">
          If you have a project in mind, want to collaborate, or just want to
          discuss web development, I would like to hear from you.
        </p>
      </div>

      <div className="mt-8 md:mt-20 flex flex-col md:flex-row gap-8 ">
        <div className="md:w-[60vw]">
          <div className="font-semibold">MESSAGE</div>

          <div className="mt-3 font-bold text-3xl">Send me a note</div>
          <div className="mt-5">I typically respond within 24 hours.</div>

          <Form />
        </div>

        <div className=" md:w-[30vw] flex gap-8 flex-col">
          <div className=" px-2 rounded-xl border-[#17181C] border-xl">
            <div className="w-full border rounded-xl bg-[#121216] border-[#17181C] px-4 py-4">
              <div className="font-semibold text-sm">QUICK CONTACT</div>

              <div className="mt-2 font-bold text-xl md:text-3xl">
                Reach out directly
              </div>

              <a
                href="mailto:shivaverma3211.a@gmail.com"
                className="flex items-center gap-5 px-5 py-2 md:py-3 rounded-2xl border bg-[#03031420] border-[#17181E] mt-2 md:mt-5"
              >
                <Mail />
                <div>
                  <div className="font-semibold">Email:</div>
                  <div>shivaverma3211.a@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+917523934452"
                className="flex items-center gap-5 px-5 py-2 md:py-3 rounded-2xl border bg-[#03031420] border-[#17181E] mt-2 md:mt-5"
              >
                <Phone />
                <div>
                  <div className="font-semibold">Phone:</div>
                  <div>+91 7523924452</div>
                </div>
              </a>
            </div>
          </div>

          <div className=" px-2 rounded-xl border-[#17181C] border-xl">
            <div className="w-full border rounded-xl bg-[#121216] text-sm border-[#17181C] px-4 py-4">
              <div className="font-semibold text-sm">CONNECT</div>

              <div className="mt-2 font-bold text-xl md:text-3xl">
                Find me online
              </div>

              <a
                href="https://linkedin.com/in/shivaa05/"
                className=" flex items-center gap-5 px-5 py-2 md:py-3 rounded-2xl border bg-[#03031420] border-[#17181E] mt-2 md:mt-5"
              >
                <FaLinkedinIn className="text-xl" />
                <div>
                  <div className="font-semibold">Linkedin:</div>
                  <div>@shivaa05</div>
                </div>
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/shivaa05"
                  className="flex items-center gap-5 px-5 py-2 md:py-3 rounded-2xl border bg-[#03031420] border-[#17181E] mt-2 md:mt-5"
                >
                  <Github />
                  <div>
                    <div className="font-semibold">Github:</div>
                    <div>@shivaa05</div>
                  </div>
                </a>
                <a
                  href="https://github.com/shivaa05"
                  className="flex items-center gap-4 px-5 py-2 md:py-3 rounded-2xl border bg-[#03031420] border-[#17181E] mt-2 md:mt-5"
                >
                  <SiLeetcode className="text-2xl"  />
                  <div>
                    <div className="font-semibold">Leetcode:</div>
                    <div>@shivaa05</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
