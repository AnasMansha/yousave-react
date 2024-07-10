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
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getProduct = (productId) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
    };
    axios
      .post("get_product", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getProductComparison = (productId) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
    };
    axios
      .get("product_comparison_by_product_id", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getProductComparisonWithSerp = (productId, serpUrl) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
      serpapi_product_api_comparisons: serpUrl,
    };
    axios
      .post("product_comparison", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
