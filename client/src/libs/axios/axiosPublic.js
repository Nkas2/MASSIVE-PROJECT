import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://massive-project-production.up.railway.app/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
