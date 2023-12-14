import { Footer } from "../../components/Footer";
import { CityCard } from "../../components/item/CityCard";

export const StokDarah = () => {
  return (
    <>
      <section id="stokdarah">
        <div className="flex justify-center pt-14 pb-14">
          <h1 className="text-[40px] font-bold">Daftar PMI</h1>
        </div>
        <div className="flex gap-20 pl-56 py-10 mb-24">
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
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};
