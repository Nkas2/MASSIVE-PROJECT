import { CityCard } from "../../item/CityCard";

function JadwalDonorDarah() {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-10 place-items-center">
        <CityCard
          name={"PMI Kota A"}
          location={"Tangerang"}
          img={"./assets/kota 1.png"}
        />

        <CityCard
          name={"PMI Kota A"}
          location={"Jakarta"}
          img={"./assets/kota 2.png"}
        />

        <CityCard
          name={"PMI Kota A"}
          location={"Batam"}
          img={"./assets/kota 3.png"}
        />
        <CityCard
          name={"PMI Kota A"}
          location={"Batam"}
          img={"./assets/kota 3.png"}
        />
        <CityCard
          name={"PMI Kota A"}
          location={"Batam"}
          img={"./assets/kota 3.png"}
        />
        <CityCard
          name={"PMI Kota A"}
          location={"Batam"}
          img={"./assets/kota 3.png"}
        />
      </div>
    </>
  );
}

export default JadwalDonorDarah;
