import { EventCard } from "../../item/EventCard";

const Events = () => {
  return (
    <div>
      <div className="pt-7 grid grid-cols-1 gap-3 w-full">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
