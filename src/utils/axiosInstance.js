import axios from "axios";

const baseURL = "https://www.yousave.ai/api/";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const instance = axios.create({ baseURL });

export default instance;
