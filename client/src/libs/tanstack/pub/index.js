import { axiosInstance } from "../../axios/axiosPublic";
import { useMutation } from "@tanstack/react-query";

export const useRegister = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      const register = await axiosInstance.post("/users", body);
      return register;
    },
    onSuccess,
    onError,
  });
};

export const useLogin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      const login = await axiosInstance.post(
        "/users/login?type=website",
        body,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(login);
      return login;
    },
    onSuccess,
    onError,
  });
};
