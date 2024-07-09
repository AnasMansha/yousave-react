import { useEffect, useState } from "react";
import { getScreenSize } from "utils/screenSize";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(
    getScreenSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newSize = getScreenSize(window.innerWidth);

      if (newSize !== screenSize) {
        setScreenSize(newSize);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return screenSize;
};

export default useScreenSize;
