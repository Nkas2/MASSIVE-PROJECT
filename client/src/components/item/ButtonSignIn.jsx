import { Link } from 'react-router-dom';

export const ButtonSignIn = () => {
  return (
    <>
      <Link
        to={'/login'}
        className="text-white rounded-[15px] cursor-pointer bg-primary px-8 py-1">
        Sign in
      </Link>
    </>
  );
};
