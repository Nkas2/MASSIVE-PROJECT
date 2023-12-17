import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ButtonSignOut } from "./item/ButtonSignOut";

export const NavbarAuth = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    // Tutup dropdown jika klik di luar dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Tambahkan event listener saat komponen dimount
  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <>
      <div className="w-full px-24 bg-background flex justify-between items-center pb-3 pt-5">
        {/* logo */}
        <div className="w-[30px] h-[40px] flex">
          <img src="./assets/logo.svg" alt="" />

          <p className=" flex items-center font-logoFont font-bold text-[24px] pl-1 text-primary">
            Blood <span className="text-secondary">Bags</span>
          </p>
        </div>

        {/* navlink */}
        <div className="ml-[425px]">
          <ul className="flex items-center gap-[25px]">
            <NavLink
              to={"/auth"}
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
              to={"/"}
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
              to={"/auth/stokDarah"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold"
              }
            >
              <div class="group relative">
                <li>Stok Darah</li>
                <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>
            <a
              href="#foot"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : ""
              }
            >
              <div class="group relative">
                <li className="text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold">
                  Tentang Kami
                </li>
                <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </a>

            <div className="relative ml-3" ref={dropdownRef}>
              <button
                type="button"
                className="relative flex items-center text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary rounded-full"
                onClick={toggleDropdown}
              >
                <img
                  class="h-[45px] w-[45px] rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <ul className="flex flex-col">
                    <NavLink to={"/profile"}>
                      <div className="mt-3 mb-1 mx-3 py-3 border-b-2 border-opacity-40 border-customGray hover:shadow-xl flex flex-col items-center">
                        <img
                          className="h-[80px] w-[80px] rounded-full hover:shadow-xl"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <li className="text-center font-medium mt-1 hover:text-primary hover:font-bold">
                          Alam
                        </li>
                      </div>
                    </NavLink>

                    <NavLink to={"/"}>
                      <li className="flex items-center mb-1">
                        <ButtonSignOut text={"Keluar"} />
                      </li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
