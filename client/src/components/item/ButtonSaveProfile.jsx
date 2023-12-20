import { Link } from "react-router-dom";

export const ButtonSaveProfile = ({ text }) => {
  return (
    <>
      <button
        type="submit"
        className="w-[40%] mt-5 mx-auto bg-primary py-2 rounded-full text-white text-md font-bold cursor-pointer hover:bg-primaryHover focus:bg-primary"
      >
        {text}
      </button>
    </>
  );
};
