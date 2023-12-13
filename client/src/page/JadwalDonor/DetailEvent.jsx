import { Footer } from '../../components/Footer';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const DetailEvent = () => {
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

  const buttonText = isClicked ? 'Tersimpan' : 'Ingatkan Saya';

  return (
    <>
      <div className="mx-24 mb-12">
        <div className="mt-6 w-[462px]">
          <h2 className="text-primary font-bold text-lg">Event Donor Darah</h2>
          <h1 className="text-4xl font-bold">ITC Cempaka Mas Donor</h1>
        </div>

        <div className="flex gap-8">
          {/* card */}
          <div className="flex-2 flex mt-11">
            <div className="bg-white rounded-2xl">
              {/* img */}
              <div className="rounded-2xl mb-7">
                <img
                  src="..\assets\detailevent.png"
                  width={479}
                  height={219}
                  className="bg-cover bg-no-repeat rounded-t-2xl"
                />
              </div>

              {/* detail */}
              <div className=" ml-8">
                <div>
                  <h1 className="text-xl font-semibold mb-4">Detail Lengkap</h1>
                  <ul className="list-none flex flex-col justify-center">
                    <li className="flex gap-4 mb-5">
                      <img src="..\assets\kalender-detail-event.svg" alt="" />
                      Kamis, 20 November 2023
                    </li>
                    <li className="flex gap-4 mb-5 pl-[3px]">
                      <img src="..\assets\location-detail-event.svg" alt="" />
                      09 : 00 - 12 : 00 WIB
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src="..\assets\time-detail-event.svg" alt="" />
                      ITC Cempaka Mas
                    </li>
                  </ul>
                </div>
                <div className="w-[400px] flex flex-col items-center">
                  <div className="mb-12">
                    <h1 className="text-xl font-semibold mb-4">Deskripsi</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis dolore enim quaerat doloremque debitis? Eum
                      pariatur debitis quae totam? Totam, nobis iure? Facilis
                      incidunt fugit, placeat a autem ab facere.
                    </p>
                  </div>

                  {/* button */}
                  <button
                    className={`mb-10 py-4 px-9 rounded-[30px] text-white ${
                      isClicked ? 'bg-primary' : 'bg-customGray'
                    }`}
                    onClick={handleClick}>
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {ConfirmationModal && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-20 z-10"
                onClick={handleCancelConfirmation}></div>
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
                      className="mr-2 font-bold hover:bg-secondary px-4 rounded-xl">
                      Batal
                    </button>
                    <button
                      onClick={handleConfirmCancellation}
                      className="text-primary font-bold hover:bg-secondary px-4 rounded-xl">
                      Ubah
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* maps */}
          <div className="flex flex-1">
            <img
              src="../assets/Basemap image.svg"
              alt=""
              width={800}
              height={900}
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="">
        <Footer />
        <img src="../assets/waves-footer.svg" alt="" className="w-full" />
      </div>
    </>
  );
};
