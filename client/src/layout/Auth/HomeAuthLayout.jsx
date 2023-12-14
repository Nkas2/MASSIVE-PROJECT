// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router-dom";
import { NavbarAuth } from "../../components/NavbarAuth";
import { Navigate } from "react-router-dom";

export const HomeAuthLayout = () => {
  const user = false;
  return (
    <>
      {!user ? <Navigate to={"/stokDarah"} replace /> : ""}
      <div>
        <NavbarAuth />
        <Outlet />
      </div>
    </>
  );
};
