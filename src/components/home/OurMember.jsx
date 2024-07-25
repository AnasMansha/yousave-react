import React from 'react';

const OurMember = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white text-center">
      <h1 className="text-2xl font-bold mb-6">Our members <span className="text-red-500">❤️</span> saving money with YouSave.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 md:p-10 lg:p-20">
        
        <div className="p-4 rounded shadow-md w-full h-[200px]">
          <p className="text-sm md:text-l lg:text-sm">"YouSave has become my go-to platform for me every time I shop. It has saved me over 100$ with 2 extra clicks on my last purchase"</p>
          <p className="mt-2 text-xs md:text-[14px] lg:text-sm text-gray-500">- Devon</p>
        </div>
        
        <div className="p-4 rounded shadow-md w-full h-[200px] md:transform md:-translate-y-10">
          <p className="text-center text-sm md:text-l lg:text-sm">YouSave’s users have saved a whopping </p>
          <p className="text-4xl md:text-3xl lg:text-4xl font-bold py-4">$498,638</p>
          <p className="mt-2 text-xs md:text-[14px] lg:text-sm">and counting</p>
        </div>
        
        <div className="p-4 rounded shadow-md w-full h-[200px]">
          <p className="text-sm md:text-xs lg:text-l">"I always make my purchases through YouSave, it's the easiest and fastest way to maximize savings when shopping for anything"</p>
          <p className="mt-2 text-xs md:text-[14px] lg:text-sm text-gray-500">- Vanessa Watson</p>
        </div>
        
      </div>
      <div className="flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px]">
        Login/Register
      </div>
    </div>
  );
};

export default OurMember;
