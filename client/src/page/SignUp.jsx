import { Link } from "react-router-dom";
import { ButtonAuth } from "../components/item/ButtonAuth";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRegister } from "../libs/tanstack/pub";
import CardToaster from "../components/comp/atoms/CardToaster";
import { useState } from "react";
import AlertSignUpSuccessComp from "../components/comp/atoms/AlertSignUpSuccessComp";

export const SignUp = () => {
  const [showToaster, setShowToaster] = useState(false);
  const [showToasterSuccess, setShowToasterSuccess] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };
  const {
    mutate: registerUser,
    error: resError,
    isPending,
  } = useRegister({
    onSuccess: () => {
      reset();
      setShowToasterSuccess(true);
    },
    onError: () => {
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 3000);
    },
  });

  const handleClose = () => {
    setShowToaster(false);
  };

  const handleClose2 = () => {
    setShowToasterSuccess(false);
  };

  return (
    <>
      {showToasterSuccess ? (
        <AlertSignUpSuccessComp close={handleClose2} />
      ) : (
        ""
      )}
      {showToaster ? (
        <CardToaster
          closeToaster={handleClose}
          error={resError.response.data.errors}
        />
      ) : (
        ""
      )}
      <div className="w-full h-full flex justify-center bg-white">
        <div className="w-[600px] flex flex-col items-center">
          {/* img */}
          <div className="flex justify-center pt-4">
            <div className="flex mb-3 ">
              <img
                src="./assets/logo.svg"
                alt=""
                width={60}
                height={90}
                className="block"
              />
            </div>
          </div>

          <div className="flex mb-3">
            <h1 className="text-[30px] font-bold text-primary">
              BLOOD<span className="text-secondary">BAGS</span>
            </h1>
          </div>

          <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mb-3">
                <h1>Email</h1>
                <input
                  {...register("email", {
                    required: { value: true, message: "Please Input Email" },
                    pattern: {
                      value: emailRegex,
                      message: "Input valid email",
                    },
                  })}
                  type="email"
                  name="email"
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
                <h1>Username</h1>
                <input
                  {...register("name", {
                    required: { value: true, message: "Please Input Username" },
                    maxLength: 30,
                  })}
                  type="text"
                  name="name"
                  className={`w-96 block outline-none h-11 rounded-[15px] border-2 pl-4 ${
                    errors.name ? "border-red-300" : "border-slate-300"
                  } `}
                  autoComplete="off"
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <small className="text-red-500">{message}</small>
                  )}
                />
              </div>

              <div className="mb-3">
                <h1>No Telepon</h1>
                <input
                  {...register("phone_number", {
                    required: { value: true, message: "Please Input No Telp" },
                    pattern: {
                      value: /^08\d{10}$/,
                      message: "Input valid phone number",
                    },
                  })}
                  type="number"
                  name="phone_number"
                  className={` w-96 block outline-none h-11 rounded-[15px] border-2 pl-4 ${
                    errors.phone_number ? "border-red-300" : "border-slate-300"
                  } `}
                  autoComplete="off"
                />
                <ErrorMessage
                  errors={errors}
                  name="phone_number"
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
                      message: "Input valid password",
                    },
                    minLength: {
                      value: 8,
                      message: "Minimal Password Length 8",
                    },
                    maxLength: {
                      value: 25,
                      message: "Maximal Password Length 25",
                    },
                  })}
                  type="password"
                  name="password"
                  className={` w-96 block outline-none h-11 rounded-[15px] border-2 pl-4 ${
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

              <div className="mb-3">
                <h1>Konfirmasi Password</h1>
                <input
                  {...register("conf_password", {
                    required: {
                      value: true,
                      message: "Input valid confirmation password",
                    },
                    validate: (val) => {
                      if (val !== watch("password")) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  type="password"
                  name="conf_password"
                  className={` w-96 block outline-none h-11 rounded-[15px] border-2 pl-4 ${
                    errors.conf_password ? "border-red-300" : "border-slate-300"
                  } `}
                  autoComplete="off"
                />
                <ErrorMessage
                  errors={errors}
                  name="conf_password"
                  render={({ message }) => (
                    <small className="text-red-500">{message}</small>
                  )}
                />
              </div>

              <div className="flex gap-3 mb-3">
                <input type="checkbox" name="agreement" />
                <p>Agree to join</p>
              </div>

              <div className="">
                <ButtonAuth isPending={isPending} text={"Buat Akun"} />
              </div>
            </div>
          </form>

          <div className="flex items-center">
            <p className="font-bold">Sudah punya akun ? </p>{" "}
            <Link to={"/login"} className="text-primary font-bold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
