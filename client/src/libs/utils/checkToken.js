import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "../axios/axiosPublic";

export const checkToken = async (token) => {
  if (token === null) {
    return null;
  }
  const decoded = jwtDecode(token);
  const currentTime = new Date();
  if (decoded.exp * 1000 < currentTime.getTime()) {
    const accessToken = await axiosInstance.get("/token", {
      headers: {
        Authorization: localStorage.getItem("token_user"),
      },
    });
    return accessToken.data.data.accessToken;
  }

  return token;
};
