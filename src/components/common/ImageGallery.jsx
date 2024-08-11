import React, { useEffect, useRef, useState } from "react";
import Magnifier from "react-magnifier";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollIntoView from "scroll-into-view-if-needed";

const ImageGallery = ({ imageUrls, initialImage }) => {
  const [selectedImage, setSelectedImage] = useState(initialImage || 0);

  const imageRefs = useRef([]);
  imageRefs.current = imageUrls.map(
    (_, i) => imageRefs.current[i] ?? React.createRef(),
  );

  useEffect(() => {
    setSelectedImage(initialImage);
  }, [initialImage]);

  useEffect(() => {
    if (imageRefs.current[selectedImage]) {
      scrollIntoView(imageRefs.current[selectedImage].current, {
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-center pb-4 w-[70vw] relative">
      {/* Display the selected image with zoom effect */}
      <div className="flex flex-col">
        <div className="mb-10 flex justify-center">
          <Magnifier
            src={imageUrls[selectedImage]}
            className=" object-contain"
          />
        </div>
      </div>

      {/* Display thumbnail images at the bottom */}
      <div className="flex justify-start overflow-x-auto">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Thumbnail ${index}`}
            className={`h-24 w-24 mx-4 object-contain border-2 border-gray-400 rounded-lg cursor-pointer p-1 ${
              index === selectedImage
                ? "opacity-100"
                : "hover:opacity-70 opacity-50"
            }`}
            onClick={() => setSelectedImage(index)}
            ref={imageRefs.current[index]}
          />
        ))}
      </div>

      <div className="absolute left-0 top-[180px] w-[40px] h-[40px]">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="w-full h-full text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer select-none"
          onClick={() =>
            setSelectedImage(
              selectedImage === 0 ? imageUrls.length - 1 : selectedImage - 1,
            )
          }
        />
      </div>
      <div className="absolute left-[calc(100%-40px)] top-[180px] w-[40px] h-[40px]">
        <FontAwesomeIcon
          icon={faAngleRight}
          className="w-full h-full text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer select-none"
          onClick={() =>
            setSelectedImage((selectedImage + 1) % imageUrls.length)
          }
        />
      </div>
    </div>
  );
};

export default ImageGallery;
