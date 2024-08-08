import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-white py-12 relative" style={{paddingBottom:"7rem"}}>
      <div className="flex flex-col items-center justify-center bg-white text-center">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 items-center border-b border-gray-300 pb-4 mb-4">
          <div className="col-span-1">
            <div
              onClick={() => handleNavigation("/")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Home
            </div>
          </div>
          <div className="col-span-2 text-center">
            <div
              onClick={() => handleNavigation("/contact")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact Us
            </div>
          </div>
          <div className="col-span-1">
            <div
              onClick={() => handleNavigation("/account")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Account
            </div>
          </div>
          <div className="col-span-4 flex justify-center my-4 md:my-0">
            <div
              onClick={() => handleNavigation("/")}
              className="cursor-pointer"
            >
              <img
                className="footer-img mx-auto d-block h-12"
                src="https://yousave.ai/img/new-logo.webp"
                alt="YouSave Logo"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div
              onClick={() => handleNavigation("/about")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              About
            </div>
          </div>
          <div className="col-span-2 text-right">
            <a
              href="mailto:yousave@yousave.ai"
              className="text-gray-600 hover:text-gray-900"
            >
              yousave@yousave.ai
            </a>
          </div>
          <div className="col-span-1 flex justify-between">
            <div
              onClick={() => handleNavigation("/blog")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer mr-2 flex items-center"
            >
              Blog
            </div>
            <a
              href="https://x.com/YouSave_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <img src="https://yousave.ai/img/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-12 gap-4 text-center py-8">
          <div className="col-span-4">
            <div
              onClick={() => handleNavigation("/privacy-policy")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Privacy Policy
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-gray-600">
              ©2024 yousave.ai All rights reserved
            </p>
          </div>
          <div className="col-span-4">
            <div
              onClick={() => handleNavigation("/terms-and-conditions")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Terms Conditions
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="grid md:hidden grid-cols-12 gap-4 items-center border-b border-gray-300 pb-4 mb-4 p-1">
          <div className="col-span-3">
            <ul>
              <li
                onClick={() => handleNavigation("/")}
                className="footer-li text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => handleNavigation("/about-us")}
                className="footer-li text-gray-600 hover:text-gray-900 cursor-pointer"
                style={{ lineHeight: "4" }}
              >
                About
              </li>
            </ul>
          </div>
          <div className="col-span-6 flex justify-center my-4 md:my-0">
            <div
              onClick={() => handleNavigation("/")}
              className="cursor-pointer"
            >
              <img
                className="footer-img mx-auto d-block h-12"
                src="https://yousave.ai/img/new-logo.webp"
                alt="YouSave Logo"
              />
            </div>
          </div>
          <div className="col-span-3">
            <ul>
              <li
                onClick={() => handleNavigation("/contact-us")}
                className="footer-li text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Contact Us
              </li>
              <li
                className="footer-li text-gray-600 hover:text-gray-900 cursor-pointer flex items-center"
                style={{ lineHeight: "4" }}
              >
                Blog
                <a
                  href="https://x.com/YouSave_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 cursor-pointer ml-2"
                >
                  <img
                    src="https://yousave.ai/img/twitter.svg"
                    style={{ width: "15px", height: "15px" }}
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:hidden grid-cols-12 gap-4 text-center py-8">
          <div className="col-span-3">
            <div
              onClick={() => handleNavigation("/privacy-policy")}
              className="footer-tt text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Privacy Policy
            </div>
          </div>
          <div className="col-span-6">
            <p
              onClick={() => handleNavigation("/")}
              className="footer-tt text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              ©2024 yousave.ai All rights reserved
            </p>
          </div>
          <div className="col-span-3">
            <div
              onClick={() => handleNavigation("/terms-and-conditions")}
              className="footer-tt text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Terms Conditions
            </div>
          </div>
        </div>
      </div>
      {/* Save Money Text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center opacity-10 text-center">
        <img
          src="/assets/images/footer-Save Money.png"
          alt="Save Money"
          className="justify-center"
         
        />
      </div>
    </footer>
  );
};

export default Footer;
