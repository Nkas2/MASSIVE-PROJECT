import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        id="foot"
        className=" max-w-[1700px] mx-auto flex items-end justify-center gap-32 pb-10">
        {/* logo */}

        <div className=" ">
          <div className="flex items-center">
            <img src="/assets/logo.svg" alt="" className="w-[38px] h-[52px]" />
            <h1 className="pl-2 font-bold text-white text-3xl">BLOODBAGS</h1>
          </div>
          <div className="flex pt-6">
            <p className="flex items-center text-white text-l">
              Copyright&#169; 2023
            </p>
          </div>
        </div>

        {/* item */}

        <div className="">
          <div className="flex">
            <ul className="list-none">
              <div className="flex flex-grow-1 gap-32">
                <div className="flex flex-col items-start gap-3">
                  <NavLink to={'/'}>
                    <li className="border-l-2 border-white pl-3 text-left text-white">
                      Home
                    </li>
                  </NavLink>
                  <NavLink to={'/contactUs'}>
                    <li className="border-l-2 border-white pl-3 text-left text-white">
                      Contact Us
                    </li>
                  </NavLink>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <NavLink to={'/terms'}>
                    <li className="border-l-2 border-white pl-3 text-left text-white">
                      Terms & Condition
                    </li>
                  </NavLink>
                  <NavLink to={'/privacy'}>
                    <li className="border-l-2 border-white pl-3 text-left text-white">
                      Privacy Policy
                    </li>
                  </NavLink>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <NavLink to={'/jadwalDonor'}>
                    <li className="border-l-2 border-white pl-3 text-left text-white">
                      Jadwal Donor
                    </li>
                  </NavLink>
                  <NavLink to={'/stokDarah'}>
                    <li className="border-l-2 border-white pl-3 text-left text-white">
                      Stok Darah
                    </li>
                  </NavLink>
                </div>
              </div>
            </ul>
          </div>
          {/* sosmed */}
          <div className="mt-9 pt-3 w-[837px] border-t-[3px] flex justify-end gap-6">
            <div>
              <FacebookRounded fontSize="large" className="text-white" />
            </div>
            <div>
              <InstagramIcon fontSize="large" className="text-white" />
            </div>
            <div>
              <TwitterIcon fontSize="large" className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
