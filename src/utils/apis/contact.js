import axios from "utils/axiosInstance";

export const contact = (name, email, message) =>
  new Promise((resolve, reject) => {
    const body = {
      name,
      email,
      message,
    };
    axios
      .post("contact_form", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
