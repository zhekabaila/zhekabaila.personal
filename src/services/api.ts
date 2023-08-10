import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.PUBLIC_API_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
