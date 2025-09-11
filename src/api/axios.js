import { BASE_URL } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Errors:", err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default axiosInstance;
