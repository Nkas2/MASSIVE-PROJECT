export const Home = () => {
  return (
    <>
      <div className="bg-background w-full mx-auto">
        <div className="min-h-screen">
          {/* top */}
          <div className="flex mx-28 items-start justify-start pt-40 w-full mb-[650px]">
            {/* section 1 */}
            <section className="flex ">
              <div className="z-10">
                <h3 className="text-black text-5xl">Welcome !</h3>
                <h1 className="text-primary text-9xl font-extrabold pt-7 tracking-tight">
                  Blood <span className="text-black">Bags</span>
                </h1>
                <div className="mt-14 flex items-center">
                  <button className=" bg-primary rounded-3xl py-3 px-7 text-white text-base font-bold">
                    Gabung Sekarang
                  </button>
                  <h4 className="pl-9 text-xl">
                    Gabung bersama kami dan temukan fitur <br />
                    menarik lainya !
                  </h4>
                </div>
              </div>

              {/* img */}
              <img
                src="./assets/tangan-kantong darah.svg"
                alt=""
                className="absolute right-0 top-32"
              />

              {/* <img
                src="./assets/kantong-darah.svg"
                alt=""
                className="absolute right-0 top-[100px] pr-[2px] z-10"
              />

              <img
                src="./assets/selang.svg"
                alt=""
                className="-z-0 absolute pl-[120px] pr-[224px] top-[140px] pt-[100px]"
              /> */}
            </section>
          </div>

          {/* <div>
            <img
              src="./assets/perban.svg"
              alt=""
              className="absolute pl-[174px] pt-[175px]"
            />

            <div>
              <img src="./assets/tangan.svg" alt="" className="w-[1348px]" />
            </div>
          </div> */}

          {/* section 2*/}
          <section className="flex mt-64">
            <div className="pt-16 ml-24">
              <h1 className="text-[60px] font-bold">
                Infromasi Donor <br />
                Darah yang Lengkap
              </h1>

              <h3 className="py-14 text-xl">
                Infromasi tempat dan event donor darah yang detail <br />
                disertai dengan lokasi dan jadwal.
              </h3>
            </div>

            <div className="right-0">
              <img src="./assets/Ilustration-sec2.svg" alt="" />
            </div>

            {/* assets sec 2-3 */}
            <img
              src="./assets/assets-sec2.svg"
              alt=""
              className="absolute mt-96 z-0"
            />
          </section>

          {/* section 3*/}
          <section className="relative z-20 mt-16 mb-40">
            <div className="flex ml-24 my-52">
              <div>
                <img src="./assets/Ilustration-sec3.svg" alt="" />
              </div>

              <div className="flex-col">
                <div className="pl-12 pt-12">
                  <h1 className="text-[75px] font-bold">Fitur Stok Darah</h1>
                </div>

                <div className="pl-12 pt-3 ">
                  <h3 className="text-xl font-[500] ">
                    Menampilkan stok darah dengan detail mulai dari tipe <br />
                    darah dan jumlah dari berbagai PMI
                  </h3>
                </div>

                <div className="pl-12 pt-8">
                  <button className="px-9 py-3 bg-primary rounded-[30px] font-bold text-[20px] text-white">
                    Stok Darah
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* section 4*/}
          <section className="">
            {/* logo */}
            <div className="pl-28 relative">
              <div className="flex items-center relative ">
                <img
                  src="./assets/logo.svg"
                  alt=""
                  className="w-[33px] h-[44px]"
                />
                <div className="pl-2">
                  <p className="font-logoFont text-3xl text-primary font-bold">
                    Blood<span className="text-secondary">Bags</span>
                  </p>
                </div>
              </div>

              {/* text */}
              <div className="pt-6 z-30 relative">
                <h1 className="text-6xl font-bold leading-tight">
                  Download Aplikasi <br />
                  BLOODBAGS Sekarang
                </h1>
              </div>

              <div className="pt-5 relative z-20">
                <p className="text-xl font-[500]">
                  Aplikasi yang memberikan edukasi tentang donor darah <br />
                  dan membantu serta memudahkan pendonor darah <br />
                  untuk mendonorkan darah
                </p>
              </div>
            </div>

            {/* img */}
            <img
              src="./assets/Ilustration-sec4.svg"
              alt=""
              className="absolute z-0 w-[807px] ml-[500px] right-0 top-[2541px]"
            />

            {/* google play */}
            <div className="pl-24 pt-7">
              <button>
                <img src="./assets/google-play-badge 1.svg" alt="" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
