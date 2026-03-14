import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Loader2 } from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(useGSAP)
const Form = ({ setMailSend }) => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [company,setCompany] = useState("")
  const [projectType, setProjectType] = useState("");
  const [sending,setSending] = useState(false)
  useGSAP(() => {
    gsap.from("form", {
      opacity: 0,
      duration: 0.5,
      scale: 0,
    });
  });

  const sendMailHandler = async (e) => {
    e.preventDefault();
    if (!email || !name || !message || !projectType) return;
    setSending(true)
    const data = new FormData();
    data.append("email",email)
    data.append("name",name)
    data.append("message",message)
    data.append("company",company)
    data.append("projectType",projectType)
    await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREEID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    
    setSending(false)
    setMailSend(true);
  }
  return (
    <form onSubmit={sendMailHandler} className="mt-6 border rounded-xl border-[#17181C] px-5 py-6 md:px-8 md:py-10">
      <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Name*</div>
          <input
            type="text"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="Your Full Name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
          />
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Email*</div>
          <input
            type="Email"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Company</div>
          <input
            type="text"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="Your company/college (Optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value.trim())}
          />
        </div>

        <div className="flex flex-col gap-3 text-[16px]">
          <div className="font-bold">Project Type *</div>
          <input
            type="text"
            className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white"
            placeholder="Your company/college (Optional)"
            required
            value={projectType}
            onChange={(e) => setProjectType(e.target.value.trim())}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 text-[16px] mt-5 md:mt-8">
        <div className="font-bold">Message *</div>
        <textarea
          placeholder="Tell me about your project, goals and ideas..."
          className="border w-full bg-[#121216] border-[#17181C] rounded-md py-1.5 md:py-2 px-4  outline-none placeholder-white min-h-24"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value.trim())}
        ></textarea>
      </div>

      <div className="flex justify-center items-center w-full mt-6 md:mt-9">
        <button className="border py-2 rounded-full w-50 flex justify-center items-center md:px-12 cursor-pointer">
          {sending ? <>
            <Loader2 className="size-6 animate-spin"/>
          </> : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default Form