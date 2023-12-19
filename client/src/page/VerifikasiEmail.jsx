import { Form, Link } from 'react-router-dom';
import { ButtonAuth } from '../components/item/ButtonAuth';

export const VerifikasiEmail = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-white mr-56 pl-16">
        <div className="mt-10 mb-8">
          <h1 className="text-4xl font-bold mb-5">Verifikasi Email</h1>

          <p className="text-customGray">
            Silahkan masukkan kode verifikasi email anda
          </p>
        </div>

        <div>
          <Form method="post">
            <div>
              <h1>Kode Verifikasi</h1>
              <input
                type="email"
                name="email"
                className="w-[450px]  outline-none h-14 rounded-[15px] border-2 pl-4 border-slate-300"
                autoComplete="off"
              />
            </div>
          </Form>
          <Link to={'/resetPassword'}>
            <div className="w-[450px] pt-8">
              <ButtonAuth text={'Submit'} />
            </div>
          </Link>
        </div>

        <div className="flex justify-center pt-8 mr-56">
          <p className="text-[15px] font-[600]">
            Tidak menerimak kode verivikasi?{' '}
            <Link className="text-primary">Kirim Ulang</Link>
          </p>
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
