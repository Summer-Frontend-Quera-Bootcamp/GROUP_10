import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MinimalistDatePicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);

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
                  : "hover:bg-brand-secondary"
              } ${isDisabled ? "text-gray-400" : ""}`}
              onClick={() => {
                if (!isDisabled) {
                  setIsOpen(false);
                  console.log(date.toLocaleDateString());
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
      <div className="w-64 p-xs bg-slate-100 rounded-xl border-2 border-gray-darker">
        <div className="flex justify-between mb-2">
          <FaChevronLeft onClick={handlePrevClick} className="cursor-pointer" />
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
    )
  );
};
