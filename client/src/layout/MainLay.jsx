import { Outlet } from "react-router-dom";
import { useAccessToken } from "../libs/tanstack/pub";
import { useDispatch } from "react-redux";
import { setToken } from "../store/tokenSlice/tokenSlice";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../store/userSlice/userSlice";
import CircularProgress from "@mui/material/CircularProgress";

const MainLay = () => {
  const { data: res, isSuccess, isLoading } = useAccessToken();
  const dispatch = useDispatch();

  if (isSuccess) {
    dispatch(setToken(res.data.data.accessToken));
    const decode = jwtDecode(res.data.data.accessToken);
    dispatch(setUser(decode));
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen grid justify-center content-center">
          <CircularProgress disableShrink color="error" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MainLay;
