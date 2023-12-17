import { useState } from "react";
import CardModal from "../comp/atoms/CardModal";
import { useDispatch } from "react-redux";
import { closed, opened } from "./../../store/cls/cslSlice";
// eslint-disable-next-line react/prop-types
export const CityCard = ({ name, location, img, id }) => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const open = () => {
    dispatch(opened());
    setOpen(true);
  };

  const close = () => {
    dispatch(closed());
    setTimeout(() => {
      setOpen(false);
    }, 350);
  };

  return (
    <>
      <div className="flex animate-slide-pmi-card-in">
        {/* card 1 */}
        <div
          className="relative w-fit h-auto group cursor-pointer"
          onClick={open}
        >
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img
            src={img}
            alt=""
            className="transform w-[251px] h-[345px] object-cover rounded-[18px]"
          />
          <div className="absolute top-0 left-0 w-[251px] h-[345px] rounded-[18px] bg-black opacity-60"></div>

          {/* place & city */}
          <div className="absolute bottom-20 -right-14 transform -translate-x-1/2 text-white ">
            <h1 className="text-xl font-bold w-48 truncate capitalize">
              {name}
            </h1>
            <p className="text-base capitalize">{location}</p>
          </div>
        </div>

        {isOpen && (
          <CardModal
            location={location}
            name={name}
            closeModal={close}
            id={id}
          />
        )}
      </div>
    </>
  );
};
