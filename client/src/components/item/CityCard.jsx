export const CityCard = () => {
  return (
    <>
      <div className="flex gap-20">
        {/* card 1 */}
        <div className="relative h-[355px] w-[258px] group">
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src="./assets/kota 1.png" alt="" className="transform " />
        </div>

        {/* card 2 */}
        <div className="relative h-[355px] w-[258px] group">
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src="./assets/kota 2.png" alt="" className="transform " />
        </div>

        {/* card 3 */}
        <div className="relative h-[355px] w-[258px] group">
          {/* background */}
          <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
          {/* img */}
          <img src="./assets/kota 3.png" alt="" className="transform " />
        </div>
      </div>
    </>
  );
};
