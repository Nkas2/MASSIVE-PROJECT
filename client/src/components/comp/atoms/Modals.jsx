import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { cls } from "../../../store/cls/cslSlice";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75" />
  );
};

const ModalOverlay = ({ children }) => {
  const close = useSelector(cls);
  return (
    <div
      className={`${
        close
          ? "animate-slide-pmi-details-card-in"
          : "animate-slide-pmi-details-card-out"
      } fixed top-0 left-0 animate-slide-pmi-details-card-in w-full h-screen flex items-center justify-center z-30`}
    >
      <div className="bg-white max-w-7xl p-8 rounded-2xl flex">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
