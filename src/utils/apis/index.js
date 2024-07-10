import axios from "utils/axiosInstance";

export const getSuggestions = (query) =>
  new Promise((resolve, reject) => {
    axios
      .get(`get_search_suggestion?q=${query}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
