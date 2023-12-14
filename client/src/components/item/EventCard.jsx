import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const EventCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [ConfirmationModal, setConfirmationModal] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setConfirmationModal(true);
    } else {
      setIsClicked(true);
    }
  };

  const handleCancelConfirmation = () => {
    setConfirmationModal(false);
  };

  const handleConfirmCancellation = () => {
    setIsClicked(false);
    setConfirmationModal(false);
  };

  const buttonText = isClicked ? "Tersimpan" : "Ingatkan Saya";

  return (
    <>
      <div className="flex flex-col ">
        <Link to="/jadwalDonor/detailEvent">
          <div className="flex items-center justify-around bg-white h-32 rounded-2xl ">
            {/* icon */}
            <div className="flex">
              <div className="flex items-center justify-center bg-secondary rounded-full w-16 h-16">
                <img src="./assets/icon-calendar.svg" alt="" />
              </div>
            </div>
            {/* place */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Itc Cempaka Mas Donor Darah</h1>
              <p className="text-sm text-customGray">Kamis, 20 November 2023</p>
            </div>

            {/* date */}
            <div>
              <p className="text-sm text-customGray">Kamis, 09:00 - 14:00</p>
            </div>

            {/* city */}
            <div>
              <p className="text-sm text-customGray">Jakarta Pusat</p>
            </div>

            {/* button */}
            <button
              className={`py-4 px-9 rounded-[30px] text-white ${
                isClicked ? "bg-primary" : "bg-customGray"
              }`}
              onClick={(e) => {
                handleClick();
                e.stopPropagation();
              }}
            >
              {buttonText}
            </button>
          </div>
        </Link>
      </div>

      {ConfirmationModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-10"
            onClick={handleCancelConfirmation}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="w-[560px] h-[230px] bg-white p-5 rounded-2xl">
              <div className="flex justify-end">
                <button onClick={handleCancelConfirmation}>
                  <CloseIcon fontSize="large" />
                </button>
              </div>
              <p className="text-4xl font-bold ml-12 py-6">
                Batalkan Penyimpanan
              </p>
              <div className="flex justify-center gap-16 pt-3">
                <button
                  onClick={handleCancelConfirmation}
                  className="mr-2 font-bold hover:bg-secondary px-4 rounded-xl"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmCancellation}
                  className="text-primary font-bold hover:bg-secondary px-4 rounded-xl"
                >
                  Ubah
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
