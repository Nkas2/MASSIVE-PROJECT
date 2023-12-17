import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { clssa } from "../../../store/cls/csl2Slice";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-50" />
  );
};

const ToasterOverlay = ({ children }) => {
  const cls2a = useSelector(clssa);
  return (
    <div
      className={`${
        cls2a
          ? "animate-slide-pmi-details-card-in"
          : "animate-slide-pmi-details-card-out"
      } fixed top-0 w-full h-screen flex items-center justify-center z-30`}
    >
      <div className="bg-white shadow-2xl max-w-7xl p-8 rounded-2xl flex">
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const NotLoginModal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDOM.createPortal(
        <ToasterOverlay>{children}</ToasterOverlay>,
        portalElement
      )}
    </>
  );
};

export default NotLoginModal;
