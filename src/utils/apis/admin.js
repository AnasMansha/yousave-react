import axios from "utils/axiosInstance";

export const login = (email, password) =>
  new Promise((resolve, reject) => {
    const body = {
      email,
      password,
    };
    axios
      .post("login", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getAllUsers = () =>
  new Promise((resolve, reject) => {
    axios
      .get("get_all_users")
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
