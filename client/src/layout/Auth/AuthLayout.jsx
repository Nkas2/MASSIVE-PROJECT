// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
      <div className="flex h-screen">
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
  );
};
