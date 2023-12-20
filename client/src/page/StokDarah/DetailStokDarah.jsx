import { BloodStokDarah } from "../../components/item/BloodStokDarah";
import { TableStokDarah } from "../../components/item/TableStokDarah";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useStock } from "../../libs/tanstack/pub";
export const DetailStokDarah = () => {
  const { pmiId } = useParams();
  const { data, isLoading } = useStock(pmiId);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          <div className="my-5 mx-5">
            <h1 className="font-bold text-4xl ml-20">Stok Darah PMI A</h1>

            {/* Vector Stok Darah */}
            <div className="w-[90%] relative flex items-center mx-auto mt-20 ">
              <img src="/assets/blood-line-vector.svg" alt="" />

              {/* Blood Vector */}
              <div className="absolute flex bottom-16 left-[3%] gap-10">
                {data?.stock.map((stk, index) => (
                  <BloodStokDarah
                    key={index}
                    bloodType={stk.golongan_darah}
                    total={stk.total_stok}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 mx-20">
              <h2 className="font-bold text-primary text-2xl">
                Detail Stok Darah
              </h2>

              <div className="my-5 mx-auto">
                <TableStokDarah data={data.details} total={data.stock} />
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};
