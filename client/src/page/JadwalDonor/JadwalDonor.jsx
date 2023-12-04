import { Footer } from '../../components/Footer';
import { CityCard } from '../../components/item/CityCard';
import { EventCard } from '../../components/item/EventCard';

export const JadwalDonor = () => {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-4xl font-[600] pl-24 pt-11">Jadwal Donor Darah</h1>
        <div className="flex gap-20 pl-56 py-10">
          <CityCard
            name={'PMI Kota A'}
            location={'Tangerang'}
            img={'./assets/kota 1.png'}
          />

          <CityCard
            name={'PMI Kota A'}
            location={'Jakarta'}
            img={'./assets/kota 2.png'}
          />

          <CityCard
            name={'PMI Kota A'}
            location={'Batam'}
            img={'./assets/kota 3.png'}
          />
        </div>

        {/* event */}
        <h1 className="text-4xl font-[600] pl-24 pt-7">Event</h1>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      {/* footer */}
      <div className="">
        <Footer />
        <img src="./assets/waves-footer.svg" alt="" className="w-full" />
      </div>
    </>
  );
};
