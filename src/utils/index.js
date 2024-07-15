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
