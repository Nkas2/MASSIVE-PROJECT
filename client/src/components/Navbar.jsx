import { Link, NavLink } from "react-router-dom";
import { ButtonSignIn } from "./item/ButtonSignIn";
import { useSelector } from "react-redux";
import { getUser } from "../store/userSlice/userSlice";
import { getToken } from "../store/tokenSlice/tokenSlice";
import Avatar from "@mui/material/Avatar";
import CardNotifikasi from "./comp/atoms/CardNotifikasi";
import { useEffect, useState } from "react";
import UserDetailsPopup from "./comp/atoms/UserDetailsPopup";

export const Navbar = () => {
  const token = useSelector(getToken);
  const user = useSelector(getUser);

  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const openNotif = () => {
    setNotifOpen(true);
  };

  const closeNotif = () => {
    setTimeout(() => {
      setNotifOpen(false);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setNotifOpen(false);
      }, 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setUserOpen(false);
      }, 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-[1700px] mx-auto px-24 bg-background flex justify-between items-center pb-3 pt-5">
        {/* logo */}
        <div className="w-[30px] h-[40px] flex">
          <img src="./assets/logo.svg" alt="" />

          <Link to={"/"}>
            <p className=" flex items-center font-logoFont font-bold text-[24px] pl-1 text-primary">
              Blood <span className="text-secondary">Bags</span>
            </p>
          </Link>
        </div>

        {/* navlink */}
        <div className="flex gap-8 items-center">
          <ul className="flex gap-[25px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary"
              }
            >
              <div className="group relative">
                <li>Home</li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>

            <NavLink
              to={"/jadwalDonor"}
              replace
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary "
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary "
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
                  : "text-black text-lg font-medium cursor-pointer hover:text-primary"
              }
            >
              <div className="group relative">
                <li>Stok Darah</li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>
            {token === null ? (
              ""
            ) : (
              <div
                id="notifikasi"
                className={
                  "font-bold relative h-fit text-lg  ease-in-out duration-300 hover:underline-offset-auto decoration-[4px] decoration-primary"
                }
              >
                {notifOpen ? <CardNotifikasi close={closeNotif} /> : ""}
                <div onClick={openNotif} className="group relative">
                  <li className="text-black text-lg font-medium cursor-pointer hover:text-primary">
                    Notifikasi
                  </li>
                  <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
                </div>
              </div>
            )}

            <a
              href="#foot"
              className="font-bold text-lg ease-in-out duration-300 hover:underline-offset-auto decoration-[4px] decoration-primary"
            >
              <div className="group relative">
                <li className="text-black text-lg font-medium cursor-pointer hover:text-primary">
                  Tentang Kami
                </li>
                <div className="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </a>
          </ul>
          {token === null ? (
            <ButtonSignIn />
          ) : (
            <div className="relative">
              {userOpen ? (
                <UserDetailsPopup
                  close={() => {
                    setTimeout(() => {
                      setUserOpen(false);
                    }, 250);
                  }}
                />
              ) : (
                ""
              )}
              <button onClick={() => setUserOpen(true)}>
                <Avatar
                  src={
                    user.image === null
                      ? ""
                      : `https://massive-project-production.up.railway.app/images/${user.image}`
                  }
                  sx={{ height: 35, width: 35 }}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
