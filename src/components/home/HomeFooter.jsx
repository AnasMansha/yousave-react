import React from "react";
import { useNavigate } from "react-router-dom";

const HomeFooter = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-white py-8">
      <div className="flex flex-col items-center justify-center bg-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-gray-300 pb-4 mb-4">
          <div className="col-span-1 md:col-span-1">
            <div
              onClick={() => handleNavigation("/")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Home
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 text-center">
            <div
              onClick={() => handleNavigation("/contact")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact Us
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div
              onClick={() => handleNavigation("/account")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Account
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 flex justify-center my-4 md:my-0">
            <div
              onClick={() => handleNavigation("/")}
              className="cursor-pointer"
            >
              <img
                className="footer-img mx-auto d-block h-12"
                src="assets/images/logo.svg"
                alt="YouSave Logo"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div
              onClick={() => handleNavigation("/about")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              About
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 text-right">
            <a
              href="mailto:yousave@yousave.ai"
              className="text-gray-600 hover:text-gray-900"
            >
              yousave@yousave.ai
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-center py-8">
          <div className="col-span-1 md:col-span-4">
            <div
              onClick={() => handleNavigation("/privacy-policy")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Privacy Policy
            </div>
          </div>
          <div className="col-span-1 md:col-span-4">
            <p className="text-gray-600">
              ©2024 yousave.ai All rights reserved
            </p>
          </div>
          <div className="col-span-1 md:col-span-4">
            <div
              onClick={() => handleNavigation("/terms-and-conditions")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Terms Conditions
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
