// eslint-disable-next-line no-unused-vars
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../store/tokenSlice/tokenSlice";

export const AuthLayout = () => {
  const token = useSelector(getToken);
  const isLoggin = token === null ? false : true;

  return !isLoggin ? (
    <>
      <div className="flex">
        {/* form */}
        <div className=" items-center">
          <Outlet />
        </div>

        {/* img */}
        <div className="">
          <img
            src="./assets/login-img1.svg"
            alt=""
            className="object-cover w-[765px] h-full"
          />
        </div>
      </div>
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
};
