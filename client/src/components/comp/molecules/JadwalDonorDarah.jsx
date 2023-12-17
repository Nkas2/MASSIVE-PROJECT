import { useJadwalDonor } from "../../../libs/tanstack/pub";
import { CityCard } from "../../item/CityCard";
import PmiCardSkeleton from "../atoms/PmiCardSkeleton";

function JadwalDonorDarah() {
  const { data, isLoading } = useJadwalDonor();
  return (
    <>
      <div className="grid grid-cols-3 justify-center gap-y-10 place-items-center">
        {isLoading ? (
          <>
            <PmiCardSkeleton />
            <PmiCardSkeleton />
            <PmiCardSkeleton />
          </>
        ) : (
          data?.map((pmi) => {
            return (
              <CityCard
                key={pmi.id}
                id={pmi.id}
                name={pmi.name}
                location={pmi.location}
                img={`https://massive-project-production.up.railway.app/images/${pmi.image}`}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default JadwalDonorDarah;
