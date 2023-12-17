import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../store/tokenSlice/tokenSlice";
import NotLogin from "../comp/atoms/NotLogin";
import { useDispatch } from "react-redux";
import { closed, opened } from "../../store/cls/csl2Slice";
import { useDeleteRemind, useRemind } from "../../libs/tanstack/pub/index";
import { checkToken } from "../../libs/utils/checkToken";

export const EventCard = ({
  id,
  name,
  city,
  date,
  start,
  end,
  remind,
  day,
  rf,
}) => {
  const [ConfirmationModal, setConfirmationModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [eventIdDelete, setEventIdDelete] = useState("");
  const { mutate: deleteRemind, isPending: deletePending } = useDeleteRemind({
    onSuccess: () => {
      rf();
    },
  });
  const { mutate: remindMe, isPending: remindPending } = useRemind({
    onSuccess: () => {
      rf();
    },
  });
  const [reminder, setReminder] = useState(remind);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    if (token !== null) {
      const value = e.target.value;
      const [remind, id] = value.split(",");
      if (remind === "1") {
        setConfirmationModal(true);
        setEventIdDelete((prev) => (prev = id));
      } else {
        setReminder(!reminder);
        const tokena = await checkToken(token);
        const conf = `${tokena}   ${id}`;
        remindMe(conf);
      }
    } else {
      setShowWarning(true);
    }
  };

  const handleCancelConfirmation = () => {
    setConfirmationModal(false);
  };

  const handleConfirmCancellation = async () => {
    let tokena = await checkToken(token);
    const conf = `${tokena}   ${eventIdDelete}`;
    deleteRemind(conf);
    setReminder((prev) => !prev);
    setConfirmationModal(false);
  };

  const buttonText = reminder ? "Tersimpan" : "Ingatkan Saya";

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-center justify-around bg-white h-32 rounded-2xl ">
          {/* icon */}
          <div className="flex">
            <div className="flex items-center justify-center bg-secondary rounded-full w-16 h-16">
              <img src="./assets/icon-calendar.svg" alt="" />
            </div>
          </div>
          {/* place */}
          <div className="flex flex-col">
            <Link to="detailEvent">
              <h1 className="text-xl font-bold w-96 truncate">{name}</h1>
            </Link>
            <p className="text-sm text-customGray">
              {day}, {date}
            </p>
          </div>

          {/* date */}
          <div>
            <p className="text-sm text-customGray">
              {day}, {start} - {end}
            </p>
          </div>

          {/* city */}
          <div>
            <p className="text-sm text-customGray">{city}</p>
          </div>
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

          {/* button */}
          <button
            className={`${
              deletePending | remindPending ? "cursor-wait animate-pending" : ""
            }  py-4 px-9 rounded-[30px] text-white ${
              reminder ? "bg-primary" : "bg-customGray hover:bg-[#828282]"
            }`}
            value={`${remind},${id}`}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {deletePending | remindPending ? "Loading..." : buttonText}
          </button>
        </div>
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
