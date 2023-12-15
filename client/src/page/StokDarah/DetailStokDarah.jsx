import { BloodStokDarah } from "../../components/item/BloodStokDarah";
import { TableStokDarah } from "../../components/item/TableStokDarah";
import { Footer } from "../../components/Footer";

export const DetailStokDarah = () => {
  return (
    <>
      <div className="my-5 mx-5">
        <h1 className="font-bold text-4xl ml-20">Stok Darah PMI A</h1>

        {/* Vector Stok Darah */}
        <div className="w-[90%] relative flex items-center mx-auto mt-20 ">
          <img src="/assets/blood-line-vector.svg" alt="" />

          {/* Blood Vector */}
          <div className="absolute flex bottom-16 left-[3%] gap-10">
            <BloodStokDarah bloodType={"A+"} total={"10"} />

            <BloodStokDarah bloodType={"A-"} total={"37"} />

            <BloodStokDarah bloodType={"B+"} total={"65"} />

            <BloodStokDarah bloodType={"B-"} total={"87"} />

            <BloodStokDarah bloodType={"AB+"} total={"34"} />

            <BloodStokDarah bloodType={"AB-"} total={"12"} />

            <BloodStokDarah bloodType={"O+"} total={"56"} />

            <BloodStokDarah bloodType={"O-"} total={"123"} />
          </div>
        </div>

        <div className="mt-5 mx-20">
          <h2 className="font-bold text-primary text-2xl">Detail Stok Darah</h2>

          <div className="my-5 mx-auto">
            <TableStokDarah />
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </>
  );
};
