import React from 'react';

const HomeFooter = () => {
  return (
    <footer className="bg-white py-8">
      <div className="flex flex-col items-center justify-center bg-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-gray-300 pb-4 mb-4">
          <div className="col-span-1 md:col-span-1">
            <a href="index.html" className="text-gray-600 hover:text-gray-900">Home</a>
          </div>
          <div className="col-span-1 md:col-span-2 text-center">
            <a href="contact-us.html" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </div>
          <div className="col-span-1 md:col-span-1">
            <a href="my_account.html" className="text-gray-600 hover:text-gray-900">Account</a>
          </div>
          <div className="col-span-1 md:col-span-4 flex justify-center my-4 md:my-0">
            <a href="index.html">
              <img className="footer-img mx-auto d-block h-12" src="assets/images/logo.svg" alt="YouSave Logo" />
            </a>
          </div>
          <div className="col-span-1 md:col-span-1">
            <a href="about-us.html" className="text-gray-600 hover:text-gray-900">About</a>
          </div>
          <div className="col-span-1 md:col-span-2 text-right">
            <a href="mailto:yousave@yousave.ai" className="text-gray-600 hover:text-gray-900">yousave@yousave.ai</a>
          </div>
       
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-center py-8">
          <div className="col-span-1 md:col-span-4">
            <a href="privacy-policy.html" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
          </div>
          <div className="col-span-1 md:col-span-4">
            <p className="text-gray-600">©2024 yousave.ai All rights reserved</p>
          </div>
          <div className="col-span-1 md:col-span-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
