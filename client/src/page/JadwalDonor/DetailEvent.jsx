import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import {
  useDeleteRemind,
  useEventDetails,
  useRemind,
} from "../../libs/tanstack/pub";
import { getToken } from "../../store/tokenSlice/tokenSlice";
import { useSelector } from "react-redux";
import EventDetailsSkeleton from "../../components/comp/organisms/EventDetailsSkeleton";
import { dapatkanHari, formatDate } from "../../libs/utils/formatTanggal";
import { formatJam } from "../../libs/utils/formatJam";
import Maps2 from "../../components/comp/molecules/Maps2";
import NotLogin from "../../components/comp/atoms/NotLogin";
import { useDispatch } from "react-redux";
import { closed, opened } from "../../store/cls/csl2Slice";
import { change } from "../../store/rf";

export const DetailEvent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [ConfirmationModal, setConfirmationModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const token = useSelector(getToken);
  const { pmiId } = useParams();
  const { data, isLoading, refetch } = useEventDetails(`${token}   ${pmiId}`);
  const dispatch = useDispatch();
  const { mutate, isPending: remindPending } = useRemind({
    onSuccess: () => {
      refetch();
      dispatch(change());
    },
  });
  const { mutate: deleteRemind, isPending: deletePending } = useDeleteRemind({
    onSuccess: () => {
      refetch();
      dispatch(change());
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e) => {
    if (token !== null) {
      const [id, remind] = e.target.value.split(" ");
      if (remind === "0") {
        mutate(`${token}   ${id}`);
      } else {
        deleteRemind(`${token}   ${id}`);
      }
    } else {
      setShowWarning(true);
    }
  };

  const handleCancelConfirmation = () => {
    setConfirmationModal(false);
  };

  const handleConfirmCancellation = () => {
    setIsClicked(false);
    setConfirmationModal(false);
  };

  const buttonText = data?.remind ? "Tersimpan" : "Ingatkan Saya";

  return (
    <>
      {isLoading ? (
        <EventDetailsSkeleton />
      ) : (
        <div className="mx-auto max-w-[1173px] mb-12">
          <div className="mt-6 w-full">
            <h2 className="text-primary font-bold text-lg">
              Event Donor Darah
            </h2>
            <h1 className="text-4xl font-bold capitalize">{data.name}</h1>
          </div>

          <div className="flex gap-8 mt-11">
            {/* card */}
            <div className="flex-2 flex ">
              <div className="bg-white rounded-2xl">
                {/* img */}
                <div className="rounded-2xl mb-7">
                  <img
                    src={`https://massive-project-production.up.railway.app/images/${data.image}`}
                    width={479}
                    height={219}
                    className="bg-cover bg-no-repeat rounded-t-2xl w-full h-72 object-cover"
                  />
                </div>

                {/* detail */}
                <div className=" ml-8">
                  <div>
                    <h1 className="text-xl font-semibold mb-4">
                      Detail Lengkap
                    </h1>
                    <ul className="list-none flex flex-col justify-center">
                      <li className="flex gap-4 mb-5">
                        <img src="\assets\kalender-detail-event.svg" alt="" />
                        {dapatkanHari(data.date)}, {formatDate(data.date)}
                      </li>
                      <li className="flex gap-4 mb-5">
                        <img src="\assets\time-detail-event.svg" alt="" />
                        {formatJam(data.start)} - {formatJam(data.end)} WIB
                      </li>
                      <li className="flex gap-4 mb-5 capitalize">
                        <img src="..\assets\location-detail-event.svg" alt="" />
                        {data.location}
                      </li>
                    </ul>
                  </div>
                  <div className="w-[400px] flex flex-col items-start">
                    <div className="mb-12 pr-10">
                      <h1 className="text-xl font-semibold mb-4">Deskripsi</h1>
                      <p className="h-52  overflow-y-scroll">
                        {data.description}
                      </p>
                    </div>

                    {/* button */}
                    <button
                      className={`mb-10 mx-auto py-4 px-9 rounded-[30px] text-white ${
                        data.remind ? "bg-primary" : "bg-customGray"
                      } {${
                        deletePending | remindPending
                          ? "cursor-wait animate-pending"
                          : ""
                      }`}
                      value={`${data.id} ${data.remind}`}
                      onClick={handleClick}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* maps */}
            <div className="">
              <Maps2 lat={data.lat} lng={data.lng} />
            </div>
          </div>
          {ConfirmationModal && (
            <div>
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
            </div>
          )}
          {showWarning ? (
            <NotLogin
              close={() => {
                dispatch(closed());
                setTimeout(() => {
                  setShowWarning(false);
                  dispatch(opened());
                }, 400);
              }}
            />
          ) : (
            ""
          )}
        </div>
      )}

      {/* footer */}
      <Footer />
    </>
  );
};
