import axios from "axios";

const API_ROOT = "https://d2kfil3ctg.execute-api.eu-central-1.amazonaws.com"

const api = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
