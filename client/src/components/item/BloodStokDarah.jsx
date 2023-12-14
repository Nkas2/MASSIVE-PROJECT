export const BloodStokDarah = ({ bloodType, total }) => {
  return (
    <>
      <div>
        <div className="relative w-3/4">
          <img src="/assets/blood-vector-stok-darah.svg" alt="" />
          <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 text-white text-center">
            <p className="text-3xl font-bold">{bloodType}</p>
          </div>
        </div>
        <div className="w-3/4 flex items-center mt-2">
          <h3 className="mx-auto font-bold text-3xl">{total}</h3>
        </div>
      </div>
    </>
  );
};
