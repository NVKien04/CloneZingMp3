import axios from "axios";

const API_URL = "https://api-zingmp3-vercel.vercel.app/api";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
