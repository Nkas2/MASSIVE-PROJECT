import { Footer } from "../../components/Footer";
import PmiCardSkeleton from "../../components/comp/atoms/PmiCardSkeleton";
import { CardStokDarah } from "../../components/item/CardStokDarah";
import { useJadwalDonor } from "../../libs/tanstack/pub";

export const StokDarah = () => {
  const { data, isLoading } = useJadwalDonor();

  return (
    <>
      <section id="stokdarah">
        <div className="flex justify-center pt-14 pb-14">
          <h1 className="text-[40px] font-bold">Daftar PMI</h1>
        </div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-10 w-fit   mx-auto mb-24">
          {isLoading ? (
            <>
              <PmiCardSkeleton />
              <PmiCardSkeleton />
            </>
          ) : (
            data?.map((pmi) => (
              <CardStokDarah
                key={pmi.id}
                name={pmi.name}
                location={pmi.location}
                img={`https://massive-project-production.up.railway.app/images/${pmi.image}`}
                id={pmi.id}
              />
            ))
          )}
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};
