import { Footer } from "../../components/Footer";
import EventsFull from "../../components/comp/organisms/EventsFull";
import JadwalDonorDarahFull from "../../components/comp/organisms/JadwalDonorDarahFull";

export const JadwalDonor = () => {
  return (
    <>
      <section id="jadwaldonor" className="w-full flex">
        <div className="mb-20 mx-auto max-w-[1440px] flex w-full">
          <div className="mx-auto max-w-[1440px] min-w-[1200px]">
            <JadwalDonorDarahFull />
            <EventsFull />
          </div>
        </div>
      </section>
      {/* footer */}

      <Footer />
    </>
  );
};
