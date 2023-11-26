import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Form, Link } from 'react-router-dom';
import { ButtonAuth } from '../components/item/ButtonAuth';

export const Login = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-white">
        <div className="w-[600px] flex flex-col items-center">
          {/* btn */}
          <Link to={'/'} className="flex justify-end mt-5 pr-8 w-full">
            <button className=" text-base font-bold text-primary">
              <KeyboardBackspaceIcon /> Go Back
            </button>
          </Link>
          {/* img */}
          <div className="flex justify-center">
            <div className="flex mb-7 ">
              <img
                src="./assets/logo.svg"
                alt=""
                width={80}
                height={109}
                className="block"
              />
            </div>
          </div>

          <div className="flex">
            <h1 className="text-[40px] font-bold text-primary">
              BLOOD<span className="text-secondary">BAGS</span>
            </h1>
          </div>

          <Form method="post" className="mt-6">
            <div>
              <div className="mb-5">
                <h1>Email</h1>
                <input
                  type="email"
                  name="email"
                  className="w-96  outline-none h-14 rounded-[15px] border-2 pl-4 border-slate-300"
                  autoComplete="off"
                />
              </div>

              <div>
                <h1>Password</h1>
                <input
                  type="password"
                  name="password"
                  className="w-96  outline-none h-14 rounded-[15px] border-2 pl-4 border-slate-300"
                  autoComplete="off"
                />
              </div>

              <div className="mb-12 text-right">
                <p>Lupa Password?</p>
              </div>
            </div>

            <Link to={'/'} className="pt-4">
              <ButtonAuth text={'Log In'} />
            </Link>
          </Form>
          <div className="flex items-center pt">
            <p className="font-[600]">
              Belum punya akun ?{' '}
              <Link to={'/signup'} className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
