import axios from "utils/axiosInstance";

export const addAlert = (productId) =>
  new Promise((resolve, reject) => {
    axios
      .put(`add_product_alert?product_id=${productId}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const removeAlert = (productId) =>
  new Promise((resolve, reject) => {
    axios
      .put(`delete_product_alert?product_id=${productId}`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
