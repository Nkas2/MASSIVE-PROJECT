import { Link } from 'react-router-dom';

export const ButtonSignIn = () => {
  return (
    <>
      <Link
        to={'/login'}
        className="text-white ml-10 rounded-[15px] font-medium cursor-pointer bg-primary px-8 py-1 hover:bg-primaryHover focus:bg-primary">
        Sign in
      </Link>
    </>
  );
};
