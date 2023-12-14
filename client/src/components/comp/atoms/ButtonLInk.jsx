import { Link } from "react-router-dom";

const ButtonLink = ({ text }) => {
  return (
    <Link to={"/login"} replace>
      <button
        type="button"
        className="w-full bg-primary py-3 rounded-full text-white text-base font-bold cursor-pointer"
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonLink;
