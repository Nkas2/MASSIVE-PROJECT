export const CityCard = () => {
  return (
    <>
      <div className="flex gap-20">
        {/* card 1 */}
        <div className="relative h-[355px] w-[258px] group">
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src="./assets/kota 1.png" alt="" className="transform" />
          <div className="absolute top-0 left-0 w-[251px] h-[345px] rounded-[18px] bg-black opacity-30"></div>

          {/* place & city */}
          <div className="absolute bottom-20 left-20 transform -translate-x-1/2 text-white ">
            <h1 className="text-xl font-bold">Pmi Kota A</h1>
            <p className="text-base">Tangerang</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative h-[355px] w-[258px] group">
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src="./assets/kota 2.png" alt="" className="transform" />
          <div className="absolute top-0 left-0 w-[251px] h-[345px] rounded-[18px] bg-black opacity-30"></div>

          {/* place & city */}
          <div className="absolute bottom-20 left-20 transform -translate-x-1/2 text-white ">
            <h1 className="text-xl font-bold">Pmi Kota A</h1>
            <p className="text-base">Jakarta</p>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative h-[355px] w-[258px] group">
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src="./assets/kota 3.png" alt="" className="transform " />
          <div className="absolute top-0 left-0 w-[251px] h-[345px] rounded-[18px] bg-black opacity-30"></div>

          {/* place & city */}
          <div className="absolute bottom-20 left-20 transform -translate-x-1/2 text-white ">
            <h1 className="text-xl font-bold">Pmi Kota A</h1>
            <p className="text-base">Batam</p>
          </div>
        </div>
      </div>
    </>
  );
};
