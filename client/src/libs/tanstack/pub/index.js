import axiosJWT from "../../axios/axiosJwt";
import { axiosInstance } from "../../axios/axiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";

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
      const login = await axiosInstance.post("/users/login?type=mobile", body);
      return login;
    },
    onSuccess,
    onError,
  });
};

export const useAccessToken = () => {
  return useQuery({
    queryFn: async () => {
      const accessToken = await axiosInstance.get("/token", {
        headers: {
          Authorization: localStorage.getItem("token_user"),
        },
      });
      return accessToken;
    },
    queryKey: ["repoData"],
    retry: false,
  });
};

export const useLogout = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (token) => {
      const res = await axiosJWT.delete("/users?type=mobile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    },
    onSuccess,
  });
};

export const useJadwalDonor = () => {
  return useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get("/pmi");
      return res.data.data;
    },
    queryKey: ["pmi"],
  });
};

export const usePmiDetails = (pmiId) => {
  return useQuery({
    queryKey: ["pmiId", pmiId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/pmi/${pmiId}`);
      return res.data.data;
    },
  });
};

export const useEvent = (userToken) => {
  return useQuery({
    queryFn: async () => {
      if (userToken === null) {
        const res = await axiosInstance.get("/event");
        console.log("tidak login");
        return res.data.data;
      } else {
        const res = await axiosInstance.get("/event", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return res.data.data;
      }
    },
    queryKey: ["events"],
  });
};

export const useDeleteRemind = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (data) => {
      const [token, id] = data.split("   ");
      const res = await axiosInstance.delete("/reminder", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          event_id: id,
        },
      });
      console.log(res.data.data);
    },
    onSuccess,
  });
};

export const useRemind = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (data) => {
      const [token, id] = data.split("   ");
      // console.log(token);
      const res = await axiosInstance.post(
        "/reminder",
        {
          event_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
    },
    onSuccess,
  });
};
