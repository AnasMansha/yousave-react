import { OS_TYPES } from "constants/index";

let scrollTimeout = null;

export const generateUrlName = (productName) => {
  let cleanedName = productName.replace(/[^a-zA-Z0-9\s]/g, "");
  const urlName = cleanedName.replace(/\s+/g, "-");
  return urlName;
};

export const filterTopSearches = (searchData, amount) => {
  const sortedSearchData = searchData.sort(
    (a, b) => b.query_count - a.query_count
  );

  return sortedSearchData.slice(0, amount);
};

export const getOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return OS_TYPES.IOS;
  }

  if (/android/i.test(userAgent)) {
    return OS_TYPES.ANDROID;
  }

  return OS_TYPES.OTHER;
};

export const scrollToTop = (delay = 0) => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(
    () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
    delay
  );
};

export const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};

export const validateSignup = (name, email, password, confirmPassword) => {
  let error = null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name.trim()) error = "Please enter name";
  else if (!email.trim()) error = "Please enter email";
  else if (!emailRegex.test(email))
    error = "Please enter a valid email address";
  else if (!password.trim()) error = "Please enter password";
  else if (confirmPassword.trim() !== password.trim())
    error = "Passwords do not match!";

  return error;
};

export const findMessage = (obj, defaultMessage) => {
  let deepestMessage = defaultMessage;

  const searchDeep = (currentObj) => {
    if (currentObj !== null && typeof currentObj === "object") {
      if ("message" in currentObj) {
        deepestMessage = currentObj.message;
      }

      for (const key in currentObj) {
        if (
          currentObj.hasOwnProperty(key) &&
          typeof currentObj[key] === "object"
        ) {
          searchDeep(currentObj[key]);
        }
      }
    }
  };

  searchDeep(obj);

  return deepestMessage;
};

export const getAppBaseUrl = () => {
  const mode = process.env.REACT_APP_MODE;
  debugger;
  if (mode === "LOCAL") return process.env.REACT_APP_LOCAL_SERVER;
  else if (mode === "DEV") return process.env.REACT_APP_DEV_SERVER;
  else return process.env.REACT_APP_LIVE_SERVER;
};
