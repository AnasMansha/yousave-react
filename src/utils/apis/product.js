import axios from "utils/axiosInstance";

export const search = ({
  query,
  pageNumber = "1",
  produtsPerPage = 60,
  filters = null,
}) =>
  new Promise((resolve, reject) => {
    const body = {
      product_name: query,
      page_number: pageNumber.toString(),
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

export const getReviews = (productId) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
    };
    axios
      .post("get_product_reviews", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getComparison = (productId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`get_product_comparison_by_product_id?product_id=${productId}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getOffers = (productId, offerId) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `product_offers_by_product_id?product_id=${productId}&offer_id=${offerId}`
      )
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getSerpComparison = (productId, serpUrl) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
      serpapi_product_api_comparisons: serpUrl,
    };
    console.log(body);
    axios
      .get("get_product_comparison_by_product_id", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
