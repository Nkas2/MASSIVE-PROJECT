import { Footer } from '../../components/Footer';
import { CityCard } from '../../components/item/CityCard';

export const StokDarah = () => {
  return (
    <>
      <section>
        <div className="flex justify-center pt-14 pb-14">
          <h1 className="text-[40px] font-bold">Daftar PMI</h1>
        </div>
        <div className="pl-56 py-10 mb-24">
          <CityCard />
        </div>
      </section>

      {/* footer */}
      <footer className="">
        <Footer />
        <img src="./assets/waves-footer.svg" alt="" className="w-full" />
      </footer>
    </>
  );
};
