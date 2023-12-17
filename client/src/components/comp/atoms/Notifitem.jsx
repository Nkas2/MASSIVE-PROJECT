const Notifitem = () => {
  return (
    <div className="w-full rounded-lg hover:bg-[#F385961C] cursor-pointer">
      <div className="flex px-3 py-1 gap-3 items-center">
        <div className="rounded-full  bg-red-300 p-2 w-1/6 grow-1">
          <img src="/assets/notif-cal.svg" className="w-full" alt="" />
        </div>
        <div className=" h-12 flex flex-col w-[500px] grow-0">
          <p className="text-[9px] block font-light truncate max-w-[270px]">
            Event {"itc Cempaka Mas Donor Darah"} {"1"} hari lagi akan dimulai
          </p>
          <p className="text-red-500 text-[9px] font-thin">19 Nov, 3:11</p>
        </div>
      </div>
    </div>
  );
};

export default Notifitem;
