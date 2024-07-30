import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Scroller = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Adjust scroll threshold as needed
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={scrollToTop}
        className={`${
          visible ? "cursor-pointer" : ""
        } relative bg-white text-gray-800 px-[10px] py-[8px] rounded-full shadow-lg border-2 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 flex justify-center items-center`}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
      </div>
    </div>
  );
};

export default Scroller;
