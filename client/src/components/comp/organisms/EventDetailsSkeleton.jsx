import Skeleton from "@mui/material/Skeleton";

const EventDetailsSkeleton = () => {
  return (
    <div className="w-[1173px] h-[933px] mb-12 mx-auto">
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"200px"} />
      <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={"430px"} />
      <div className="flex gap-8 items-start">
        {/* card */}
        <div className="flex-2 flex">
          <div className="bg-white rounded-2xl">
            {/* img */}
            <div className="rounded-2xl mb-7">
              <Skeleton
                sx={{ height: 250 }}
                animation="wave"
                variant="rectangular"
              />
            </div>

            {/* detail */}
            <div className=" ml-8">
              <div>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={"200px"}
                />
                <ul className="list-none flex flex-col justify-center">
                  <li className=" mb-2">
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={"250px"}
                      height={"30px"}
                    />
                  </li>
                  <li className=" mb-2 pl-[3px]">
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={"250px"}
                      height={"30px"}
                    />
                  </li>
                  <li className=" mb-2">
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={"250px"}
                      height={"30px"}
                    />
                  </li>
                </ul>
              </div>
              <div className="w-[400px] flex flex-col items-start">
                <div className="mb-12">
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"200px"}
                    height={"50px"}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"350px"}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"350px"}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"350px"}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"350px"}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"350px"}
                  />
                </div>

                {/* button */}
                <Skeleton
                  width={"200px"}
                  height={50}
                  sx={{
                    borderRadius: "50px",
                    margin: "auto",
                    transform: "translateX(-25px)",
                    marginBottom: "20px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* maps */}
        <div className="w-full h-[837px]">
          <Skeleton
            sx={{ borderRadius: "25px" }}
            width={710}
            height={"100%"}
            animation="wave"
            variant="rectangular"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSkeleton;
