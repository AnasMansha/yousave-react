import axios from "utils/axiosInstance";

export const getPreferences = () =>
  new Promise((resolve, reject) => {
    axios
      .get("get_user_preferences")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const updatePreferences = (preferences) =>
  new Promise((resolve, reject) => {
    const body = {
      preferences,
    };
    axios
      .put("update_user_preferences", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
