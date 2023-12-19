import { Form } from 'react-router-dom';
import { ButtonAuth } from '../../components/item/ButtonAuth';
import { Footer } from '../../components/Footer';

export const ContactUs = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center z-10">
          <p className="absolute text-7xl text-white font-bold z-20">
            Get in Touch!
          </p>
          <img src="./assets/asset-contactUs.svg" alt="" className="z-10" />
        </div>

        <div className="flex justify-center items-center z-10">
          <div className="absolute w-3/4 bg-white rounded-2xl drop-shadow-md mt-96">
            <Form method="post" className="mt-56">
              <div className="grid grid-rows-2 grid-flow-col place-items-center">
                <div className="mb-5 font-medium">
                  <h1>Nama</h1>
                  <input
                    type="password"
                    name="password"
                    className="w-96 mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5 font-medium">
                  <h1>Email</h1>
                  <input
                    type="password"
                    name="password"
                    className="w-96 mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5 font-medium">
                  <h1>Nama Perusahaan</h1>
                  <input
                    type="password"
                    name="password"
                    className="w-96 mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5 font-medium">
                  <h1>No Telepon</h1>
                  <input
                    type="password"
                    name="password"
                    className="w-96 mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="mx-16 ">
                <div className="mb-5 font-medium">
                  <h1>Pesan</h1>
                  <textarea
                    type="text"
                    name="password"
                    className="w-full h-36 resize-none mt-2 outline-none rounded-[15px] border-2 pt-1 pl-4 border-slate-300"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-44 mt-9 mb-14">
                  <ButtonAuth text={'Kirim'} />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="mt-[50%]">
        <Footer />
      </div>
    </>
  );
};
