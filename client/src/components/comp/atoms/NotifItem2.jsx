const Notifitem2 = ({ name, date, day }) => {
  return (
    <div className="w-full rounded-xl bg-white cursor-pointer py-5">
      <div className="flex px-10 py-1 gap-10 items-center">
        <div className="rounded-full  bg-red-300 p-2">
          <img src="/assets/notif-cal.svg" className="w-full" alt="" />
        </div>
        <div className=" h-12 flex flex-col w-[500px] grow-0">
          <p className="text-[18px] block truncate font-bold ">{name}</p>
          <p className="text-[#969696] text-[9px] font-thin">
            {day}, {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifitem2;
