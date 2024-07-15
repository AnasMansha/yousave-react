import axios from "utils/axiosInstance";

export const signup = (email, name, password) =>
  new Promise((resolve, reject) => {
    const body = {
      email,
      name,
      password,
      "re-password": password,
    };
    axios
      .post("signup", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

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

export const adminLogin = (email, password) =>
  new Promise((resolve, reject) => {
    const body = {
      email,
      password,
    };
    axios
      .post("admin_login", body)
      .then((response) => {
        if (!response.data.token) reject(response.data.message);
        else resolve(response.data.token);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const requestPasswordReset = (email) =>
  new Promise((resolve, reject) => {
    const body = {
      email,
    };
    axios
      .post("forgot_password", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const verifyPasswordResetToken = (email, token) =>
  new Promise((resolve, reject) => {
    const body = {
      email,
      token,
    };
    axios
      .get("verify_reset_password_token", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const resetPassword = (email, password) =>
  new Promise((resolve, reject) => {
    const body = {
      email,
      password,
      re_password: password,
    };
    axios
      .get("verify_reset_password_token", body)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
