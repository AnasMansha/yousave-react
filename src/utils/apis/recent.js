import axios from "utils/axiosInstance";

export const getRecentlyViewed = () =>
  new Promise((resolve, reject) => {
    axios
      .get("get_user_recently_viewed_products")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const addToRecentlyViewed = (productId, product, productComparisons) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
      product,
      product_comparison: productComparisons,
    };
    axios
      .post("add_product_to_recently_viewed", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const deleteFromRecentlyViewed = (productId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(
        `delete_product_from_user_recently_viewed?product_id=${productId}`
      )
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
