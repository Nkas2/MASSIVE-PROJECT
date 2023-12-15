import ReactDOM from "react-dom";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75" />
  );
};

const ToasterOverlay = ({ children }) => {
  return (
    <div className="fixed top-10 left-0 animate-slide-in animate-slide-out w-full h-screen flex items-start justify-center z-30">
      <div className="bg-white shadow-2xl shadow-black max-w-7xl p-8 rounded-2xl flex">
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("toaster");

const Toaster = ({ children }) => {
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

export default Toaster;
