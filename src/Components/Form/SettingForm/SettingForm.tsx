import { useState } from "react";

const SettingPage = () => {
  const colors = [
    "red-primary",
    "pink-primary",
    "grape-primary",
    "violet-primary",
    "indigo-primary",
    "blue-primary",
    "cyan-primary",
    "teal-primary",
    "brand-primary",
    "green-primary",
    "lime-primary",
    "yellow-primary",
    "orange-primary",
  ];

  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log("rendered");
  return (
    <form className="w-[450px] flex flex-col items-end gap-s">
      <h1 className="text-[31px] text-right">تنظیمات</h1>
      <span>انتخاب تم</span>
      <div className="flex flex-row-reverse items-center gap-[13px]">
        {colors.map((color, index) => {
          return isClicked[index] ? (
            <button
              key={index}
              className={
                "flex justify-center items-center w-[28px] h-[28px] rounded-lg " +
                "bg-" +
                color
              }
              onClick={() => {
                const theStateArray = Array(colors.length).fill(false);
                theStateArray[index] = true;
                setIsClicked(theStateArray);
              }}
            >
              <span className="w-[12px] h-[12px] rounded-lg bg-white inline-block" />
            </button>
          ) : (
            <button
              key={index}
              className={
                "flex justify-center items-center w-[20px] h-[20px] rounded-lg " +
                "bg-" +
                color
              }
              onClick={() => {
                const theStateArray = Array(colors.length).fill(false);
                theStateArray[index] = true;
                setIsClicked(theStateArray);
              }}
            />
          );
        })}
      </div>
    </form>
  );
};

export default SettingPage;
