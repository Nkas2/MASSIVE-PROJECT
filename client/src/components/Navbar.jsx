import { NavLink } from 'react-router-dom';
import { ButtonSignIn } from './item/ButtonSignIn';

export const Navbar = () => {
  return (
    <>
      <div className="w-full px-12 bg-background flex justify-between items-center pb-3 pt-5">
        {/* logo */}
        <div className="w-[30px] h-[40px] flex">
          <img src="./assets/logo.svg" alt="" />

          <p className=" flex items-center font-logoFont font-bold text-[24px] pl-1 text-primary">
            Blood <span className="text-secondary">Bags</span>
          </p>
        </div>

        {/* navlink */}
        <div className="ml-[500px]">
          <ul className="flex gap-[38px]">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-[4px] decoration-primary '
                  : ''
              }>
              <li className="text-black text-lg cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-primary hover:text-primary active:text-primary">
                Home
              </li>
            </NavLink>
            <NavLink
              to={'/jadwalHonor'}
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-[4px] decoration-primary'
                  : ''
              }>
              <li className="text-black text-lg cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-primary hover:text-primary">
                Jadwal Donor
              </li>
            </NavLink>
            <NavLink
              to={'/stokDarah'}
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-[4px] decoration-primary'
                  : ''
              }>
              <li className="text-black text-lg cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-primary hover:text-primary">
                Stok Darah
              </li>
            </NavLink>
            <NavLink
              to={'/tentangKami'}
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-[4px] decoration-primary'
                  : ''
              }>
              <li className="text-black text-lg cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-primary hover:text-primary">
                Tentang Kami
              </li>
            </NavLink>
          </ul>
        </div>
        <ButtonSignIn />
      </div>
    </>
  );
};
