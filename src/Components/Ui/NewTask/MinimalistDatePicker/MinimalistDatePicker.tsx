import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  onData: (data: string) => void;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MinimalistDatePicker = ({ onData }: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handlePrevClick = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const handleNextClick = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

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

  const renderDaysOfWeek = () => {
    return (
      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDaysOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay();
    const endOffset = 6 - lastDay.getDay();

    const days: Date[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    for (let i = 0; i < startOffset; i++) {
      days.unshift(new Date(year, month, 0));
    }
    for (let i = 0; i < endOffset; i++) {
      days.push(new Date(year, month + 1, i + 1));
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          const isCurrentMonth =
            index >= startOffset &&
            index < startOffset + daysInMonth &&
            currentDate.getMonth() === month &&
            currentDate.getFullYear() === year;
          const isToday =
            isCurrentMonth &&
            date.getDate() === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();
          const isDisabled = date.getMonth() !== month;

          return (
            <div
              key={index}
              className={`flex items-center justify-center h-10 rounded-md cursor-pointer ${
                isToday
                  ? "bg-brand-primary text-white"
                  : "text-brand-primary hover:bg-brand-secondary"
              } ${isDisabled ? "text-gray-400 hover:bg-red-secondary" : ""}`}
              onClick={() => {
                if (!isDisabled) {
                  onData(date.toLocaleDateString());
                  setIsOpen(false);
                }
              }}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    isOpen && (
      <div
        className="flex flex-row-reverse w-fit p-xs bg-gray-darker rounded-xl border-2 border-gray-darker shadow-2xl"
        ref={ref}
      >
        <div className="w-[200px] bg-gray-100 p-s rounded-xl ml-xs flex flex-col justify-between">
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleTodayClick}
          >
            امروز
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleTomorrowClick}
          >
            فردا
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleNextFridayClick}
          >
            آخرهفته
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleNextWeekFridayClick}
          >
            هفته بعد
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleNextNextWeekFridayClick}
          >
            دو هفته بعد
          </button>
          <button
            className="w-full bg-brand-primary py-xs rounded-xl text-white"
            onClick={handleEndOfMonthClick}
          >
            آخر ماه
          </button>
        </div>
        <div className="w-[300px] h-[376px] bg-gray-100 p-s rounded-xl">
          <div className="flex justify-between font-extrabold mb-2">
            <FaChevronLeft
              onClick={handlePrevClick}
              className="cursor-pointer"
            />
            <div>
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </div>
            <FaChevronRight
              onClick={handleNextClick}
              className="cursor-pointer"
            />
          </div>
          {renderDaysOfWeek()}
          {renderDaysOfMonth()}
        </div>
      </div>
    )
  );
};
