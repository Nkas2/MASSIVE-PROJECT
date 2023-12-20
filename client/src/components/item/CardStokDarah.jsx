import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CardStokDarah = ({ id, name, location, img }) => {
  return (
    <>
      <Link to={`/stokDarah/${id}`}>
        <div className="flex gap-20 animate-slide-pmi-card-in">
          {/* card 1 */}
          <div className="relative h-[355px] w-[258px] group cursor-pointer">
            {/* background */}
            <div className="absolute rounded-2xl bg-gradient-to-b from-primary to-red-600 h-full w-full -rotate-6 group-hover:-rotate-12 transition-transform ease-in-out duration-300"></div>
            {/* img */}
            <img
              src={img}
              alt=""
              className="w-[251px] h-[345px] transform rounded-[18px] object-cover"
            />
            <div className="absolute top-0 left-0 w-[251px] h-[345px] rounded-[18px] bg-black opacity-30"></div>

            {/* place & city */}
            <div className="absolute bottom-20 left-2 transform text-white ">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="text-base">{location}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
