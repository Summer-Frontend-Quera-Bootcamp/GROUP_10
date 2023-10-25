import { useState } from "react";
import { ButtonPrimary } from "../../../../Components/Ui/Buttons";
import ToggleSwitch from "../../../../Components/Ui/ToggleSwitch";

const SettingForm = () => {
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

  const [isChecked, setIsChecked] = useState([
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

  const handleChecked = (index: number) => {
    const len = isChecked.length;
    const Arr = Array(len).fill(false);
    Arr[index] = true;
    setIsChecked(Arr);
  };

  return (
    <form className="w-[354px] flex flex-col items-end gap-l">
      <h1 className="text-[31px] text-right">تنظیمات</h1>
      <div className="flex flex-col gap-xs text-right">
        <span>انتخاب تم</span>
        <div className="flex flex-row-reverse items-center gap-[13px]">
          {colors.map((color, index) => {
            return isChecked[index] ? (
              <label
                key={index}
                className={
                  "flex justify-center items-center w-[28px] h-[28px] rounded-lg " +
                  "bg-" +
                  color
                }
              >
                <span className="w-[12px] h-[12px] rounded-lg bg-white inline-block" />
                <input
                  type="radio"
                  className="hidden w-full h-full"
                  checked={isChecked[index]}
                  onChange={() => {
                    handleChecked(index);
                  }}
                />
              </label>
            ) : (
              <label
                key={index}
                className={
                  "flex justify-center cursor-pointer items-center w-[20px] h-[20px] rounded-lg " +
                  "bg-" +
                  color
                }
              >
                <input
                  type="radio"
                  className="hidden w-full h-full"
                  checked={isChecked[index]}
                  onChange={() => {
                    handleChecked(index);
                  }}
                />
              </label>
            );
          })}
        </div>
      </div>
      <ToggleSwitch />
      <ButtonPrimary bigger onClick={() => {}}>
        ثبت تغییرات
      </ButtonPrimary>
      <div
        className="bg-red-primary bg-pink-primary bg-grape-primary
      bg-violet-primary bg-indigo-primary bg-blue-primary
       bg-cyan-primary bg-teal-primary bg-brand-primary 
       bg-green-primary bg-lime-primary bg-yellow-primary bg-orange-primary"
      ></div>
    </form>
  );
};

export default SettingForm;
