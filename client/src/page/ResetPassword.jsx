import { Form, Link } from 'react-router-dom';
import { ButtonAuth } from '../components/item/ButtonAuth';

export const ResetPassword = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-white mr-56 pl-16">
        <div className="mt-10 mb-8">
          <h1 className="text-4xl font-bold mb-5">Buat Password Baru</h1>

          <p className="text-customGray">
            Password baru kamu harus berbeda <br />
            dengan password lama kamu !
          </p>
        </div>

        <div>
          <Form method="post">
            <div className="mb-3">
              <h1>Password</h1>
              <input
                type="password"
                name="password"
                className="w-[450px]  outline-none h-14 rounded-[15px] border-2 pl-4 border-slate-300"
                autoComplete="off"
              />
            </div>
            <div>
              <h1>Konfirmasi Password</h1>
              <input
                type="password"
                name="password"
                className="w-[450px]  outline-none h-14 rounded-[15px] border-2 pl-4 border-slate-300"
                autoComplete="off"
              />
            </div>
          </Form>
          <Link to={'/verifikasiEmail'}>
            <div className="w-[450px] pt-8">
              <ButtonAuth text={'Submit'} />
            </div>
          </Link>
        </div>

        <div className="flex justify-center pt-8 mr-56">
          <p className="text-[15px] font-[600]">
            Kembali ke{' '}
            <Link to={'/login'} className="text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
