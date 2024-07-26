import { SCREEN_SIZES } from "constants/index";
import useScreenSize from "hooks/useScreenSize";
import React from "react";

const DesktopFooter = () => {
  return (
    <div className="container  md:mx-auto">
      <footer className="hidden md:block">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1">
            <a href="index.html">Home</a>
          </div>
          <div className="col-span-2 text-center">
            <a href="contact-us.html">Contact Us</a>
          </div>
          <div className="col-span-1">
            <a href="my_account.html">Account</a>
          </div>
          <div className="col-span-4">
            <a href="index.html">
              <img
                className="footer-img mx-auto w-40"
                src="https://yousave.ai/img/new-logo.webp"
                alt="Logo"
              />
            </a>
          </div>
          <div className="col-span-1">
            <a href="about-us.html">About</a>
          </div>
          <div className="col-span-2">
            <a href="mailto:yousave@yousave.ai">yousave@yousave.ai</a>
          </div>
          <div className="col-span-1 flex justify-between">
            <a href="blog.html" className="mr-1">
              Blog
            </a>
            <a
              href="https://x.com/YouSave_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://yousave.ai/img/twitter.svg" alt="Twitter" />
            </a>
          </div>
          <div className="col-span-12 my-4"></div>
          <div className="col-span-4 text-center">
            <a href="privacy-policy.html">Privacy Policy</a>
          </div>
          <div className="col-span-4 text-center">
            ©2024 yousave.ai All rights reserved
          </div>
          <div className="col-span-4 text-center">
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div className="container  md:mx-auto">
      <footer className=" md:hidden">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <ul>
              <li className="">HOME</li>
              <li className=" mt-4">About</li>
            </ul>
          </div>
          <div className="col-span-6">
            <a href="index.html">
              <img
                className="w-20 mx-auto"
                src="https://yousave.ai/img/new-logo.webp"
                alt="Logo"
              />
            </a>
          </div>
          <div className="col-span-3">
            <ul>
              <li className="text-left">Contact us</li>
              <li className="mt-4 flex items-center">
                Blog
                <a
                  href="https://x.com/YouSave_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3"
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
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

          <div className="col-span-3">
            <a href="index.html">Privacy policy</a>
          </div>
          <div className="col-span-6">
            <a href="index.html">©2024 yousave.ai All rights reserved</a>
          </div>
          <div className="col-span-3">
            <a href="index.html">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Footer = () => {
  const screenSize = useScreenSize();
  const isMobileScreen = screenSize <= SCREEN_SIZES.md;
  return isMobileScreen ? <DesktopFooter /> : <MobileFooter />;
};

export default Footer;
