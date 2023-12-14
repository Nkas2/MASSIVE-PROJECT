// eslint-disable-next-line react/prop-types
import CircularProgress from "@mui/material/CircularProgress";

export const ButtonAuth = ({ isPending, text }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-primary py-3 rounded-full text-white text-lg font-bold cursor-pointer ${
        isPending ? "cursor-not-allowed" : ""
      }`}
      disabled={isPending}
    >
      {isPending ? <CircularProgress color="inherit" size={20} /> : text}
    </button>
  );
};
