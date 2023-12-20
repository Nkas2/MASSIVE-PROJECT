import CloseIcon from "@mui/icons-material/Close";
import Notifitem from "./Notifitem";
import { useEffect, useState } from "react";

const CardNotifikasi = ({ close }) => {
  const notif = true;
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          !isOpen ? "animate-slide-notif-out-two" : ""
        } absolute animate-slide-notif z-40 w-96 top-12 right-0 max-h-[500px] h-[500px] rounded-lg bg-white px-4 py-5`}
      >
        <div className="relative">
          <button
            className="absolute top-0 right-0"
            onClick={() => {
              close();
              setIsOpen(false);
            }}
          >
            <CloseIcon fontSize="medium" />
          </button>
          <h1 className="text-lg">Notifikasi</h1>
          {notif ? (
            <div className="gap-2 mt-4 h-fit flex flex-col">
              <Notifitem />
              <Notifitem />
            </div>
          ) : (
            <>
              <div className="max-w-xs mx-auto mt-11">
                <img src="/assets/notif.svg" className="block mx-auto" alt="" />
              </div>
              <h1 className="text-center text-base mt-6">
                Belum ada Notifikasi
              </h1>
              <p className="text-xs font-normal w-56 mt-2 mx-auto text-[#969696] text-center">
                Tidak ada notifikasi saat ini. Notifikasi baru akan muncul di
                halaman ini
              </p>
            </>
          )}
        </div>
      </div>
      <CardNotificationOverlay close={close} setIsOpen={setIsOpen} />
    </>
  );
};

const CardNotificationOverlay = ({ close, setIsOpen }) => {
  return (
    <div
      className="fixed animate-slide-notif-back top-0 w-full h-screen z-30 left-0 bg-black/50"
      onClick={() => {
        close();
        setIsOpen(false);
      }}
    />
  );
};

export default CardNotifikasi;
