import { NavLink } from 'react-router-dom';
import { ButtonSignIn } from './item/ButtonSignIn';

export const Navbar = () => {
  return (
    <>
      <div className="w-full px-24 bg-background flex justify-between items-center pb-3 pt-5">
        {/* logo */}
        <div className="w-[30px] h-[40px] flex">
          <img src="./assets/logo.svg" alt="" />

          <p className=" flex items-center font-logoFont font-bold text-[24px] pl-1 text-primary">
            Blood <span className="text-secondary">Bags</span>
          </p>
        </div>

        {/* navlink */}
        <div className="ml-[425px]">
          <ul className="flex gap-[25px]">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary '
                  : 'text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold'
              }>
              <div class="group relative">
                <li>Home</li>
                <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>
            
            <NavLink
              to={'/jadwalDonor'}
              className={({ isActive }) =>
                isActive
                  ? 'font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary '
                  : 'text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold'
              }>
              <div class="group relative">
                <li>Jadwal Donor</li>
                <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>

            <NavLink
              to={'/stokDarah'}
              className={({ isActive }) =>
                isActive
                  ? 'font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary '
                  : 'text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold'
              }>
              <div class="group relative">
                <li>Stok Darah</li>
                <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </NavLink>
            <a
              href="#foot"
              className={({ isActive }) =>
                isActive
                  ? 'font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary '
                  : ''
              }>
              <div class="group relative">
                <li className="text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold">Tentang Kami</li>
                <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
              </div>
            </a>
          </ul>
        </div>
        <ButtonSignIn />
      </div>
    </>
  );
};
