export const ButtonSignOut = ({ text, func }) => {
    return (
      <button
        onClick={func}
        type="submit"
        className="w-[90%] mx-auto hover:bg-primary hover:font-bold hover:text-white py-1 text-black text-md font-medium cursor-pointer">
        {text}
      </button>
    );
  };
  