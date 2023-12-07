import { Form, Link } from 'react-router-dom';
import { ButtonAuth } from '../components/item/ButtonAuth';

export const SignUp = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-white">
        <div className="w-[600px] flex flex-col items-center">
          {/* img */}
          <div className="flex justify-center pt-4">
            <div className="flex mb-3 ">
              <img
                src="./assets/logo.svg"
                alt=""
                width={60}
                height={90}
                className="block"
              />
            </div>
          </div>

          <div className="flex mb-3">
            <h1 className="text-[30px] font-bold text-primary">
              BLOOD<span className="text-secondary">BAGS</span>
            </h1>
          </div>

          <Form method="post" className="mb-10">
            <div>
              <div className="mb-3">
                <h1>Email</h1>
                <input
                  type="email"
                  name="email"
                  className="w-96  outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <h1>Username</h1>
                <input
                  type="text"
                  name="username"
                  className="w-96  outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <h1>No Telepon</h1>
                <input
                  type="number"
                  name="number"
                  className="w-96  outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300 appearance-none"
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <h1>Password</h1>
                <input
                  type="password"
                  name="password"
                  className="w-96  outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <h1>Konfirmasi Password</h1>
                <input
                  type="password"
                  name="password"
                  className="w-96  outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                  autoComplete="off"
                />
              </div>

              <div className="flex gap-3 mb-3">
                <input type="checkbox" name="agreement" />
                <p>Agree to join</p>
              </div>

              <Link to={'/login'}>
                <div className="">
                  <ButtonAuth text={'Buat Akun'} />
                </div>
              </Link>
            </div>
          </Form>

          <div className="flex items-center">
            <p className="font-bold">Sudah punya akun ? </p>{' '}
            <Link to={'/login'} className="text-primary font-bold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
