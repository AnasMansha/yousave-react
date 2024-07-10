import axios from "utils/axiosInstance";

export const addToCart = (productId, product, productComparisons) =>
  new Promise((resolve, reject) => {
    const body = {
      product_id: productId,
      product,
      product_comparison: productComparisons,
    };
    axios
      .post("add_to_cart", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const removeFromCart = (productId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`delete_product_from_user_cart?product_id=${productId}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getCart = () =>
  new Promise((resolve, reject) => {
    axios
      .get("get_user_cart")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
