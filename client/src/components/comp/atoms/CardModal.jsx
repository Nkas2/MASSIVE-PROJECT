import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Modal from "./Modals";
import { usePmiDetails } from "../../../libs/tanstack/pub";
import CircularProgress from "@mui/material/CircularProgress";
import { formatJam } from "../../../libs/utils/formatJam";
import Maps from "../molecules/Maps";

const CardModal = ({ closeModal, id }) => {
  const { data, isLoading } = usePmiDetails(id);

  return (
    <Modal isClose={closeModal}>
      {isLoading ? (
        <div className="w-[1196px] h-[545px] flex justify-center items-center ml-14">
          <CircularProgress disableShrink size={"50px"} color="error" />
        </div>
      ) : (
        <div className="flex px-10 gap-3">
          <div className="">
            {/* btn */}
            <div className="flex justify-end">
              <button
                className="flex text-base font-bold text-primary"
                onClick={() => {
                  closeModal();
                }}
              >
                <KeyboardBackspaceIcon /> Kembali
              </button>
            </div>
            {/* Konten modal */}
            <h2 className="text-[40px] font-bold mb-4">{data.name}</h2>
            <div className="border-b-2 w-[597px] mb-4">
              <ul className="list-none">
                <div className="flex flex-grow-1 gap-8 mb-10">
                  <div className="flex flex-col gap-3">
                    <li className="flex gap-2 font-bold text-primary">
                      <img src="./assets/kalender.svg" alt="" />
                      Jadwal
                    </li>
                    <li className="flex gap-2 font-bold text-primary">
                      <img src="./assets/time.svg" alt="" />
                      Jam
                    </li>
                    <li className="flex gap-2 font-bold text-primary">
                      <img src="./assets/location.svg" alt="" />
                      Lokasi
                    </li>
                  </div>

                  <div className="flex flex-col gap-3">
                    <li className="flex gap-2 font-bold capitalize">
                      {data.operational}
                    </li>
                    <li className="flex gap-2 font-bold">
                      {formatJam(data.start)} - {formatJam(data.end)} WIB
                    </li>
                    <li className="flex gap-2 font-bold capitalize">
                      {data.location}
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            {/* deskripsi */}
            <div className="mb-5">
              <h1 className="text-[40px] font-bold">Deskripsi</h1>
            </div>
            <div className="max-w-xl">
              <p className="h-40 overflow-y-scroll">{data.description}</p>
            </div>
          </div>

          <div className=" bg-blue-500">
            {/* <div className="ml-14">
              <img src="./assets/Basemap image.svg" alt="" />
            </div> */}
            <Maps lat={data.lat} lng={data.lng} />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CardModal;
