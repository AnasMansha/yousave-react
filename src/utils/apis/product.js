import axios from "utils/axiosInstance";

export const search = (
  query,
  pageNumber = 1,
  produtsPerPage = 60,
  filters = null
) =>
  new Promise((resolve, reject) => {
    const body = {
      product_name: query,
      page_number: pageNumber,
      products_per_page: produtsPerPage,
      ...(filters && { filters }),
    };
    axios
      .post("search", body)
      .then((response) => {
        debugger;
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
