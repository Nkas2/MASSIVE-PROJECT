// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom';
import { NavbarAuth } from '../../components/NavbarAuth';


export const HomeAuthLayout = () => {
  return (
    <>
      <div>
      <NavbarAuth />
      <Outlet />
    </div>
    </>
  );
};
