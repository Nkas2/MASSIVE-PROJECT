export const Footer = () => {
  return (
    <>
      <div>
        {/* logo */}
        <div>
          <div className="ml-14 absolute mt-96">
            <div className="flex items-center">
              <img
                src="./assets/logo.svg"
                alt=""
                className="w-[38px] h-[52px]"
              />
              <h1 className="pl-2 font-bold text-white text-3xl">BLOODBAGS</h1>
            </div>
            <div className="flex pt-6">
              <p className="flex items-center text-white text-l">
                Copyright&#169; 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
