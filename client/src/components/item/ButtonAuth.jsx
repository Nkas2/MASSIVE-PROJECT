// eslint-disable-next-line react/prop-types
export const ButtonAuth = ({ text, func }) => {
  return (
    <button
      onClick={func}
      type="submit"
      className="w-full bg-primary py-3 rounded-full text-white text-lg font-bold cursor-pointer hover:bg-primaryHover focus:bg-primary">
      {text}
    </button>
  );
};
