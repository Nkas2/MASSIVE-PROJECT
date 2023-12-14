import { NavLink } from "react-router-dom";
import { ButtonSignIn } from "./item/ButtonSignIn";

export const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1700px] mx-auto px-24 bg-background flex justify-between items-center pb-3 pt-5">
        {/* logo */}
        <div className="w-[30px] h-[40px] flex">
          <img src="./assets/logo.svg" alt="" />

          <p className=" flex items-center font-logoFont font-bold text-[24px] pl-1 text-primary">
            Blood <span className="text-secondary">Bags</span>
          </p>
        </div>

        {/* navlink */}
        <div className="flex gap-8">
          <ul className="flex gap-[25px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold"
              }
            >
              <div className="group relative">
                <li>Home</li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>

            <NavLink
              to={"/jadwalDonor"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold"
              }
            >
              <div className="group relative">
                <li>Jadwal Donor</li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>

            <NavLink
              to={"/stokDarah"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold"
              }
            >
              <div className="group relative">
                <li>Stok Darah</li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>
            <a
              href="#foot"
              className="font-bold text-lg  ease-in-out duration-300 hover:underline-offset-auto decoration-[4px] decoration-primary"
            >
              <div className="group relative">
                <li className="text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold">
                  Tentang Kami
                </li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </a>
          </ul>
          <ButtonSignIn />
        </div>
      </div>
    </div>
  );
};
