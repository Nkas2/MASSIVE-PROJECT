import { Footer } from '../../components/Footer';
import { CityCard } from '../../components/item/CityCard';
import { EventCard } from '../../components/item/EventCard';

export const JadwalDonor = () => {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-4xl font-[600] pl-24 pt-11">Jadwal Donor Darah</h1>
        <div className="pl-56 py-10">
          <CityCard />
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
