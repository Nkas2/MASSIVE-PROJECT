import React from "react";
import NotLoginModal from "./notLoginModal";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const NotLogin = ({ close }) => {
  return (
    <NotLoginModal>
      <div className="w-80 relative">
        <button onClick={close} className="absolute -top-4 -right-4">
          <CloseIcon fontSize="large" />
        </button>
        <div className="w-fit mx-auto">
          <img src="/assets/question.svg" alt="" />
        </div>
        <h1 className="text-center text-3xl font-bold my-4">
          Belum Punya Akun ?
        </h1>
        <p className="text-xs text-center text-[#969696] mb-4">
          Bergabung dengan BLOODBAGS untuk bisa menikmati fitur ini
        </p>
        <Divider />
        <button
          type="button"
          className="px-6 py-3 bg-[#A21D21] text-center rounded-full block mx-auto font-semibold hover:bg-[#7E161A] mt-3 text-white "
        >
          <Link to={"/login"}>Buat Akun</Link>
        </button>
      </div>
    </NotLoginModal>
  );
};

export default NotLogin;
