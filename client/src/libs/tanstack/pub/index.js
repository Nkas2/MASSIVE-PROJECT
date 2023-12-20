import axiosJWT from "../../axios/axiosJwt";
import { axiosInstance } from "../../axios/axiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkToken } from "../../utils/checkToken";

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

export const useEvent = (data) => {
  return useQuery({
    queryFn: async () => {
      const [userToken, rf] = data.split(" ");
      if (userToken !== "null") {
        const tkn = await checkToken(userToken);
        const res = await axiosInstance.get("/event", {
          headers: {
            Authorization: `Bearer ${tkn}`,
          },
        });
        return res.data.data;
      } else {
        const res = await axiosInstance.get("/event");
        return res.data.data;
      }
    },
    queryKey: ["events", data],
    refetchOnWindowFocus: true,
  });
};

export const useDeleteRemind = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (data) => {
      let [token, id] = data.split("   ");
      token = await checkToken(token);
      const res = await axiosInstance.delete("/reminder", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          event_id: id,
        },
      });
    },
    onSuccess,
  });
};

export const useRemind = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (data) => {
      let [token, id] = data.split("   ");
      token = await checkToken(token);
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
    },
    onSuccess,
  });
};

export const useEventDetails = (data) => {
  return useQuery({
    queryFn: async () => {
      let [token, pmiId] = data.split("   ");
      if (token === "null") {
        const res = await axiosInstance.get(`/event/${pmiId}`);
        return res.data.data;
      }
      token = await checkToken(token);
      const res = await axiosInstance.get(`/event/${pmiId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
    queryKey: ["event.details", data],
  });
};

export const useStock = (pmiId) => {
  return useQuery({
    queryKey: ["stock", pmiId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/pmi/stock/${pmiId}`);
      return res.data.data;
    },
  });
};

export const useUser = (token) => {
  return useQuery({
    queryFn: async () => {
      token = await checkToken(token);
      const user = await axiosInstance.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return user.data.data;
    },
    queryKey: ["user.details"],
  });
};

export const useDetailsUser = (token) => {
  return useQuery({
    queryFn: async () => {
      token = await checkToken(token);
      const user = await axiosInstance.get("/users/details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return user.data.data;
    },
    queryKey: ["user"],
  });
};

export const useEditUser = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async ({ token, body }) => {
      token = await checkToken(token);
      const res = await axiosInstance.put("/users", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    },
    onSuccess,
  });
};

export const useUploadImage = () => {
  return useMutation({
    mutationFn: async ({ formData, token }) => {
      token = await checkToken(token);
      const res = await axiosInstance.post("/image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    },
  });
};
