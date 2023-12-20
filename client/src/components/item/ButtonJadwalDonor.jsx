import { Link } from "react-router-dom";

export const ButtonJadwalDonor = () => {
  return (
    <>
      <div className="flex items-center">
        <Link
          to={"/jadwalDonor"}
          className="flex items-center rounded-3xl mt-8 mb-10 px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primaryHover focus:outline-none focus:bg-primary"
        >
          Jadwal Donor
        </Link>
      </div>
    </>
  );
};
