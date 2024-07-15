export const generateUrlName = (productName) => {
  let cleanedName = productName.replace(/[^a-zA-Z0-9\s]/g, "");
  const urlName = cleanedName.replace(/\s+/g, "-");
  return urlName;
};
