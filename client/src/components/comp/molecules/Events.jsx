import { useEvent } from "../../../libs/tanstack/pub";
import { formatJam } from "../../../libs/utils/formatJam";
import { dapatkanHari } from "../../../libs/utils/formatTanggal";
import { getToken } from "../../../store/tokenSlice/tokenSlice";
import { EventCard } from "../../item/EventCard";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { rf } from "../../../store/rf";
import { res, set } from "../../../store/activity/activitySlice";

const Events = () => {
  const token = useSelector(getToken);
  let rfa = useSelector(rf);
  const { data, isLoading, refetch } = useEvent(`${token} ${rfa}`);
  const dispatch = useDispatch();
  dispatch(res());
  dispatch(set(data));

  return (
    <div>
      <div className="pt-7 grid grid-cols-1 gap-3 w-full">
        {isLoading ? (
          <>
            <Skeleton variant="rounded" width={"100%"} height={120} />
            <Skeleton variant="rounded" width={"100%"} height={120} />
            <Skeleton variant="rounded" width={"100%"} height={120} />
          </>
        ) : (
          data?.map((ev) => {
            return (
              <EventCard
                key={ev.id}
                city={ev.city}
                date={ev.date}
                day={dapatkanHari(ev.date)}
                name={ev.name}
                id={ev.id}
                start={formatJam(ev.start)}
                end={formatJam(ev.end)}
                remind={ev.remind}
                rf={refetch}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Events;
