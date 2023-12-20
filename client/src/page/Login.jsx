import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import { ButtonAuth } from "../components/item/ButtonAuth";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useLogin } from "../libs/tanstack/pub";
import { useState } from "react";
import CardToaster from "../components/comp/atoms/CardToaster";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/tokenSlice/tokenSlice";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../store/userSlice/userSlice";

export const Login = () => {
  const [showToaster, setShowToaster] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
  };

  const {
    mutate: loginUser,
    error: resError,
    isPending,
  } = useLogin({
    onSuccess: (res) => {
      localStorage.setItem("token_user", res.data.data.token);
      dispatch(setToken(res.data.data.accessToken));
      const decode = jwtDecode(res.data.data.accessToken);
      dispatch(setUser(decode));
      navigate("/", { replace: true });
    },
    onError: () => {
      setShowToaster(true);
      document.getElementById("email").blur();
      document.getElementById("password").blur();
      setTimeout(() => {
        setShowToaster(false);
      }, 3000);
    },
  });

  const handleClose = () => {
    setShowToaster(false);
  };
  return (
    <>
      {showToaster ? (
        <CardToaster
          closeToaster={handleClose}
          error={resError.response?.data.errors}
        />
      ) : (
        ""
      )}
      <div className="w-full h-full flex justify-center bg-white">
        <div className="w-[600px] flex flex-col items-center">
          {/* btn */}
          <Link to={"/"} className="flex justify-end mt-5 pr-8 w-full">
            <button className=" text-base font-bold text-primary">
              <KeyboardBackspaceIcon /> Go Back
            </button>
          </Link>
          {/* img */}
          <div className="flex justify-center">
            <div className="flex mb-7 ">
              <img
                src="./assets/logo.svg"
                alt=""
                width={80}
                height={109}
                className="block"
              />
            </div>
          </div>

          <div className="flex">
            <h1 className="text-[40px] font-bold text-primary">
              BLOOD<span className="text-secondary">BAGS</span>
            </h1>
          </div>

          <form className="mt-6 mb-3" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mb-5">
                <h1>Email</h1>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please Input Email",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Input valid email",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className={`w-96 block outline-none h-11 rounded-[15px] border-2 pl-4 ${
                    errors.email ? "border-red-300" : "border-slate-300"
                  } `}
                  autoComplete="off"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <small className="text-red-500">{message}</small>
                  )}
                />
              </div>

              <div className="mb-3">
                <h1>Password</h1>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please Input Email",
                    },
                    minLength: { value: 8, message: "Minimum password 8" },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  className={`w-96 block outline-none h-11 rounded-[15px] border-2 pl-4 ${
                    errors.password ? "border-red-300" : "border-slate-300"
                  } `}
                  autoComplete="off"
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <small className="text-red-500">{message}</small>
                  )}
                />
              </div>

              <Link to={"/lupaPassword"}>
                <div className="mb-12 text-right">
                  <p>Lupa Password?</p>
                </div>
              </Link>
            </div>

            <ButtonAuth text={"Log In"} isPending={isPending} />
          </form>
          <div className="flex items-center pt">
            <p className="font-[600]">
              Belum punya akun ?{" "}
              <Link to={"/signup"} className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
