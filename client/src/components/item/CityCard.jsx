import { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// eslint-disable-next-line react/prop-types
export const CityCard = ({ name, location, img }) => {
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex gap-20">
        {/* card 1 */}
        <div
          className="relative h-[355px] w-[258px] group cursor-pointer"
          onClick={open}>
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src={img} alt="" className="transform" />
          <div className="absolute top-0 left-0 w-[251px] h-[345px] rounded-[18px] bg-black opacity-30"></div>

          {/* place & city */}
          <div className="absolute bottom-20 left-20 transform -translate-x-1/2 text-white ">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-base">{location}</p>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white max-w-7xl p-8 rounded-2xl flex">
              <div className="flex-1 ml-14">
                {/* btn */}
                <div className="flex justify-end">
                  <button
                    className="flex text-base font-bold text-primary"
                    onClick={close}>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam, et? Sint rerum vero soluta necessitatibus tenetur,
                    non perferendis quibusdam repudiandae, provident voluptatum
                    doloribus, obcaecati repellat reprehenderit tempora delectus
                    commodi mollitia!
                  </p>
                </div>
              </div>

              <div className="flex-2">
                <div className="ml-14">
                  <img src="./assets/Basemap image.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
