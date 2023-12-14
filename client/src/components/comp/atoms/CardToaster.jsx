import CloseIcon from "@mui/icons-material/Close";
import Toaster from "./ToasterError";

const CardToaster = ({ closeToaster, error }) => {
  return (
    <Toaster>
      <div className="flex gap-3">
        <div className="flex-none">
          <img src="./assets/alert-error-signup-login.svg" alt="error icon" />
        </div>
        <div className="w-[500px]">
          <h1 className="font-bold text-lg text-red-700">Error !</h1>
          <p className="text-[#404040] text-sm">{error}</p>
        </div>
        <button onClick={closeToaster} type="button" className="self-center">
          <CloseIcon fontSize="large" className="text-[#404040]" />
        </button>
      </div>
    </Toaster>
  );
};

export default CardToaster;
