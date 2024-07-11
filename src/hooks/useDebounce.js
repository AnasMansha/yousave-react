import { useEffect, useState } from "react";

const useDebounce = (callback, delay) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [callback, delay]);

  const debounceFunction = (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimer(newTimer);
  };

  return debounceFunction;
};

export default useDebounce;
