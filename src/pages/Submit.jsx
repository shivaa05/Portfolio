import React from 'react'
import { NavLink } from 'react-router-dom';

const Submit = () => {
  return (
    <div className="h-full pt-40 w-screen flex justify-center items-center flex-col">
      <img src="success.png" alt="success" className="h-16 mb-3" />
      <h2 className="text-4xl font-bold mb-2">Thank you!</h2>
      <p className="text-xl">Your application was submitted successfully.</p>
      <p className="text-zinc-400 text-xl">I'll contact you soon</p>
      <NavLink to='/' className='bg-green-600 mt-5 px-3 py-1 text-xl rounded-md cursor-pointer' >Go to Home</NavLink>
    </div>
  );
}

export default Submit
