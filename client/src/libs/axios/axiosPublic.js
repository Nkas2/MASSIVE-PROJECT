import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://massive-project-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});
