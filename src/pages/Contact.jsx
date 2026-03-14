import React from "react";

const Contact = () => {
  return (
    <div className="relative w-full h-full mt-5 md:mt-12">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="border px-4 py-1 md:py-1.5 md:px-4 rounded-full bg-[rgb(21,23,32)]">
          Willing to collaboration
        </div>

        <div className="mt-5 text-center text-[7vw] md:text-[68px] font-bold md:leading-19 md:max-w-[70vw] lg:max-w-[50vw]">
          Let us build something extraordinary
        </div>

        <p className="md:text-3xl mt-2 md:mt-8 max-w-[90vw] text-center md:max-w-[70vw] font-normal md:text[25px]">
          If you have a project in mind, want to collaborate, or just want to
          discuss web development, I would like to hear from you.
        </p>
      </div>

      
    </div>
  );
};

export default Contact;
