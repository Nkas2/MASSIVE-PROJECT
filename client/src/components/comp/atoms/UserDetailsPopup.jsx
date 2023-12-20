import { useSelector } from "react-redux";
import { getUser, resetUser } from "../../../store/userSlice/userSlice";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import { getToken, resetToken } from "../../../store/tokenSlice/tokenSlice";
import { useLogout } from "../../../libs/tanstack/pub";
import { Link, useNavigate } from "react-router-dom";
import { checkToken } from "../../../libs/utils/checkToken";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

const UserDetailsPopup = ({ close }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const { mutate: logOutFunc } = useLogout({
    onSuccess: () => {
      localStorage.clear("token_user");
      dispatch(resetToken());
      dispatch(resetUser());
      navigate("/login", { replace: true });
    },
  });
  const logOut = async () => {
    logOutFunc(await checkToken(token));
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          !isOpen ? "animate-slide-user-out" : ""
        } px-7 animate-slide-user-in py-3 z-40 shadow-2xl rounded-lg bg-white absolute -bottom-40 right-0`}
      >
        <div className="">
          <button type="button">
            <Link to={"/profile"}>
              <div className="w-fit mx-auto">
                <Avatar
                  src={
                    user.image === null
                      ? ""
                      : `https://massive-project-production.up.railway.app/images/${user.image}`
                  }
                  sx={{ height: 50, width: 50 }}
                />
              </div>
              <h1 className="capitalize w-36 text-center truncate font-light text-sm my-2">
                {user.name}
              </h1>
            </Link>
          </button>
          <Divider />
          <button onClick={logOut}>
            <h1 className="capitalize w-36 text-center truncate font-light text-base my-2">
              Sign Out
            </h1>
          </button>
        </div>
      </div>
      <CardOverlay close={close} setIsOpen={setIsOpen} />
    </>
  );
};

const CardOverlay = ({ close, setIsOpen }) => {
  return (
    <div
      className="fixed animate-slide-notif-back top-0 w-full h-screen z-20 left-0 "
      onClick={() => {
        close();
        setIsOpen(false);
      }}
    />
  );
};

export default UserDetailsPopup;
