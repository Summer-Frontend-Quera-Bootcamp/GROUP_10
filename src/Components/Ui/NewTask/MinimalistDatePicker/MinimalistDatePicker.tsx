import FullCalendar from "@fullcalendar/react";
import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "moment/locale/fa";

interface Props {
  onData: (data: string) => void;
}

export const MinimalistDatePicker = ({ onData }: Props) => {
  const currentDate = new Date();
  const [isOpen, setIsOpen] = useState(true);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handleTodayClick = () => {
    onData(currentDate.toLocaleDateString());
    setIsOpen(false);
  };

  const handleTomorrowClick = () => {
    const tomorrow = new Date(currentDate.getTime());
    tomorrow.setDate(tomorrow.getDate() + 1);
    onData(tomorrow.toLocaleDateString());
    setIsOpen(false);
  };

  const handleNextFridayClick = () => {
    const nextFriday = new Date(currentDate.getTime());
    while (nextFriday.getDay() !== 5) {
      nextFriday.setDate(nextFriday.getDate() + 1);
    }
    onData(nextFriday.toLocaleDateString());
    setIsOpen(false);
  };

  const handleNextWeekFridayClick = () => {
    const nextWeekFriday = new Date(currentDate.getTime());
    nextWeekFriday.setDate(nextWeekFriday.getDate() + 7);
    while (nextWeekFriday.getDay() !== 5) {
      nextWeekFriday.setDate(nextWeekFriday.getDate() + 1);
    }
    onData(nextWeekFriday.toLocaleDateString());
    setIsOpen(false);
  };

  const handleNextNextWeekFridayClick = () => {
    const nextNextWeekFriday = new Date(currentDate.getTime());
    nextNextWeekFriday.setDate(nextNextWeekFriday.getDate() + 14);
    while (nextNextWeekFriday.getDay() !== 5) {
      nextNextWeekFriday.setDate(nextNextWeekFriday.getDate() + 1);
    }
    onData(nextNextWeekFriday.toLocaleDateString());
    setIsOpen(false);
  };

  const handleEndOfMonthClick = () => {
    const endOfMonth = new Date(currentDate.getTime());
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0);
    onData(endOfMonth.toLocaleDateString());
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div
        className="flex flex-row-reverse w-fit p-xs bg-gray-darker rounded-xl border-2 border-gray-darker shadow-2xl"
        ref={ref}>
        <div className="w-[200px] bg-gray-100 p-s rounded-xl ml-xs flex flex-col justify-between">
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleTodayClick}>
            امروز
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleTomorrowClick}>
            فردا
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleNextFridayClick}>
            آخرهفته
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleNextWeekFridayClick}>
            هفته بعد
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleNextNextWeekFridayClick}>
            دو هفته بعد
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleEndOfMonthClick}>
            آخر ماه
          </button>
        </div>
        <div className="w-[600px] h-[500px] bg-gray-100 p-s rounded-xl">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            selectable={true}
            select={() => {}}
            height={450}
            eventColor="#208D8E"
            locale="fa"
            dayHeaderFormat={{
              weekday: "long",
              omitCommas: true,
            }}
            initialView="dayGridMonth"
            headerToolbar={{
              end: "",
              center: "",
              start: "",
            }}
            buttonText={{
              today: "امروز",
            }}
            themeSystem="tailwind"
          />
        </div>
      </div>
    )
  );
};
