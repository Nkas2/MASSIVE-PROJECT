import axios from "axios";

const axiosJWT = axios.create({
  baseURL: "https://massive-project-production.up.railway.app/api",
});

export default axiosJWT;
