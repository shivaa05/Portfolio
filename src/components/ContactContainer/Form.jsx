import React from 'react'

const Form = () => {
  return (
    <form className="mt-6 border rounded-xl border-[#17181C] px-5 py-6 md:px-8 md:py-10">
      <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Name*</div>
          <input
            type="text"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="Your Full Name"
            required={true}
          />
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Email*</div>
          <input
            type="Email"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Company</div>
          <input
            type="text"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="Your company/college (Optional)"
          />
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Project Type *</div>
          <input
            type="text"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="Your company/college (Optional)"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 text-[16px] mt-5 md:mt-8">
        <div className="font-bold">Message *</div>
        <textarea
          placeholder="Tell me about your project, goals and ideas..."
          className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white min-h-24"
          required
        ></textarea>
      </div>

      <div className="flex justify-center items-center w-full mt-6 md:mt-9">
        <button className="border py-2 rounded-full px-5 md:px-12 cursor-pointer">Send Message</button>
      </div>
    </form>
  );
}

export default Form