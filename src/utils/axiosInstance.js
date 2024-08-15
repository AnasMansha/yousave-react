import axios from "axios";

const baseURL = "https://dev.yousave.ai/api/";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const instance = axios.create({ baseURL });

export default instance;
