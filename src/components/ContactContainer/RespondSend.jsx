import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
const RespondSend = ({setMailSend}) => {
  useGSAP(() => {
    gsap.from(".submitted", {
      opacity: 0,
      duration: 0.5,
      scale: 0,
    });
  });
  return (
    <div className="submitted mt-6 border rounded-xl border-[#17181C] px-5 py-6 md:px-8 md:py-10 flex justify-center items-center flex-col ">
      <img src="./success.png" alt="Success" className="size-28" />
      <h1 className="text-xl md:text-[3vw] font-bold md:max-w-[40vw] text-center mt-4 text-green-300">
        Thank You for Reaching Out
      </h1>
      <p className="font-semibold">
        Thank you for contacting Shiva — I'll get back to you as soon as
        possible
      </p>

      <button
        className="px-3 md:px-5 border mt-4 py-2 rounded-xl border-green-200/50 bg-[#0E261A] cursor-pointer"
        onClick={() => setMailSend(false)}
      >
        Submit another response
      </button>
    </div>
  );
};

export default RespondSend;
