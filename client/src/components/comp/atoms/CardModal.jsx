import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Modal from "./Modals";

const CardModal = ({ closeModal, name, location }) => {
  return (
    <Modal>
      <div className="flex-1 ml-14">
        {/* btn */}
        <div className="flex justify-end">
          <button
            className="flex text-base font-bold text-primary"
            onClick={closeModal}
          >
            <KeyboardBackspaceIcon /> Kembali
          </button>
        </div>
        {/* Konten modal */}
        <h2 className="text-[40px] font-bold mb-4">{name}</h2>
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
                <li className="flex gap-2 font-bold">Senin - Jumat</li>
                <li className="flex gap-2 font-bold">09:00 - 12:00</li>
                <li className="flex gap-2 font-bold">{location}</li>
              </div>
            </div>
          </ul>
        </div>

        {/* deskripsi */}
        <div className="mb-5">
          <h1 className="text-[40px] font-bold">Deskripsi</h1>
        </div>
        <div className="max-w-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            et? Sint rerum vero soluta necessitatibus tenetur, non perferendis
            quibusdam repudiandae, provident voluptatum doloribus, obcaecati
            repellat reprehenderit tempora delectus commodi mollitia!
          </p>
        </div>
      </div>

      <div className="flex-2">
        <div className="ml-14">
          <img src="./assets/Basemap image.svg" alt="" />
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
