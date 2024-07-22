import React from 'react';

const OurMember = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center p-20  bg-white text-center">
      <h1 className="text-2xl font-bold mb-6">Our members <span className="text-red-500">❤️</span> saving money with YouSave.</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-20 grid grid-cols-3 gap-4">
            <div className=" p-4 rounded shadow-md">
            <p className="">"YouSave has become my go-to platform for me every time I shop. It has saved me over 100$ with 2 extra clicks on my last purchase"</p>
            <p className="mt-2 text-sm text-gray-500">- Devon</p>
            </div>
            <div className="p-4 rounded shadow-md">
            <p className="textcenter">YouSave’s users have saved a whopping </p>
            <p className="text-4xl font-bold">$498,638</p>
            <p className="mt-2 text-sm">and counting</p>
            </div>
            <div className="p-4 rounded shadow-md">
            <p className="">"I always make my purchases through YouSave, it's the easiest and fastest way to maximize savings when shopping for anything"</p>
            <p className="mt-2 text-sm text-gray-500">- Vanessa Watson</p>
            </div>
        </div>
      <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Login/Register</button>
    </div>

    </>
  )};

  export default OurMember;