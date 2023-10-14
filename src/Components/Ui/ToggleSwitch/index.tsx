import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <label className="flex flex-row-reverse items-center cursor-pointer ">
      <div
        className={`relative w-[64px] h-[36px] rounded-[8px] transition-all duration-300 ${
          isToggled ? "bg-gray-darker" : "bg-gray-secondary"
        }`}
      />
      <div
        className={`flex items-center justify-center absolute w-[30px] h-[34px] rounded-[5px] transition-transform duration-300 ${
          isToggled
            ? "transform translate-x-[-32px] bg-gray-secondary"
            : "bg-white"
        }`}
      >
        {!isToggled && <BsSun className="w-[25px] h-[25px]" />}
        {isToggled && <BsMoon className="w-[25px] h-[25px]" />}
      </div>
      <input
        type="checkbox"
        className="hidden"
        onChange={toggle}
        checked={isToggled}
      />
    </label>
  );
};

export default ToggleSwitch;
