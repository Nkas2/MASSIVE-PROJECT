export const EventCard = () => {
  return (
    <>
      <div className="flex flex-col pl-24 pt-7">
        <div className="flex items-center justify-around bg-white w-11/12 h-32 rounded-2xl ">
          {/* icon */}
          <div className="flex">
            <div className="flex items-center justify-center bg-secondary rounded-full w-16 h-16">
              <img src="./assets/icon-calendar.svg" alt="" />
            </div>
          </div>

          {/* place */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Itc Cempaka Mas Donor Darah</h1>
            <p className="text-sm text-customGray">Kamis, 20 November 2023</p>
          </div>

          {/* date */}
          <div>
            <p className="text-sm text-customGray">Kamis, 09:00 - 14:00</p>
          </div>

          {/* city */}
          <div>
            <p className="text-sm text-customGray">Jakarta Pusat</p>
          </div>

          {/* button */}
          <button className="bg-customGray py-4 px-9 rounded-[30px] text-white">
            Ingatkan Saya
          </button>
        </div>
      </div>
    </>
  );
};
