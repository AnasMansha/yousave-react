import axios from "utils/axiosInstance";

export const getGlobalSavings = () =>
  new Promise((resolve, reject) => {
    axios
      .get("get_total_money_saved")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const addToGlobalSavings = (amount) =>
  new Promise((resolve, reject) => {
    const body = {
      money_saved: amount,
    };
    axios
      .put("update_total_money_saved", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });