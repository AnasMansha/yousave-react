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
