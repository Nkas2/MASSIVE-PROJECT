import { Link } from "react-router-dom";
import { ButtonEditProfile } from "../../components/item/ButtonEditProfile.jsx";
import { ButtonJadwalDonor } from "../../components/item/ButtonJadwalDonor.jsx";
import { Footer } from "../../components/Footer";
import { useSelector } from "react-redux";
import { getUser } from "../../store/userSlice/userSlice.js";
import { getToken } from "../../store/tokenSlice/tokenSlice.js";
import { useUser } from "../../libs/tanstack/pub/index.js";
import { activity } from "../../store/activity/activitySlice.js";
import Notifitem2 from "../../components/comp/atoms/NotifItem2.jsx";
import { dapatkanHari } from "../../libs/utils/formatTanggal.js";

export const Profile = () => {
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const activity2 = useSelector(activity);
  console.log(activity2);
  const { data } = useUser(token);

  console.log(data);

  return (
    <>
      <section className="container mt-10 mx-auto px-6">
        <div className="h-80 w-7/12 mx-auto overflow-hidden bg-cover bg-center">
          <div
            className={`flex items-center rounded-2xl h-64 bg-cover bg-center bg-no-repeat`}
            style={{
              backgroundImage: `url('${
                data?.image !== null
                  ? `https://massive-project-production.up.railway.app/images/${user.image}`
                  : "https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?w=996&t=st=1702910548~exp=1702911148~hmac=eb5b55c2fdd519ae31956b6d7a4aedf327038168393ac52e54821dae360edf1f"
              }')`,
            }}
          >
            <div className="ps-14 w-2/6">
              <h2 className="text-4xl text-[#242424] capitalize font-bold font-bodyFont">
                {user.name}
              </h2>
              <p className="mt-1 text-white">
                {data?.city == null ? "-" : data?.city}
              </p>
              <ButtonEditProfile />
            </div>
            {/* Profile Picture */}
            <img
              className="w-2/6 rounded-full"
              //   src={`https://massive-project-production.up.railway.app/images/${user.image}`}
              alt=""
            />
            {/* Blood Vector */}
            <div className="relative w-20 mt-56 ms-20">
              <img
                className="w-full h-full"
                src="./assets/blood-vector.svg"
                alt=""
              />
              <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 text-white text-center">
                <p className="text-4xl font-bodyFont font-medium">
                  {data?.blood_type == null ? "-" : data?.blood_type}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktivitas */}
      <section className="container mx-auto mb-10">
        <h2 className="text-center font-bold text-3xl text-primary">
          Aktivitas
        </h2>

        {/* List Aktivitas */}
        <div className="w-7/12 flex h-[400px] flex-col items-center mt-5 mx-auto border border-customGray rounded-xl">
          {activity2.length === 0 ? (
            <>
              {/* Warning Vector */}
              <div className="mx-auto w-64 mt-10">
                <img src="./assets/warningActivity.png" alt="" />
              </div>
              {/* Text */}
              <div className="mx-auto mt-5 w-60">
                <h3 className="text-center text-2xl font-bodyFont font-bold">
                  Tidak Ada Aktivitas
                </h3>
                <p className="text-center mt-4 text-xs text-customGray font-bodyFont">
                  Cari aktivitas melalui fitur jadwal donor darah
                </p>
              </div>
              <ButtonJadwalDonor />
            </>
          ) : (
            <div className="w-11/12 mt-3 grid grid-cols-1 gap-3 overflow-y-scroll">
              {activity2?.map((act) => (
                <Notifitem2
                  key={act?.id}
                  date={act?.date}
                  day={dapatkanHari(act?.date)}
                  name={act?.name}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};
