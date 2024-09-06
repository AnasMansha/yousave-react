import axios from "axios";

const baseURL =
  process.env.REACT_APP_MODE === "LIVE"
    ? process.env.REACT_APP_LIVE_SERVER
    : process.env.REACT_APP_DEV_SERVER;

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const instance = axios.create({ baseURL });

export default instance;
