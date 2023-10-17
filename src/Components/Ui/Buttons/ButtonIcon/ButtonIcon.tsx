import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoArrowForwardSharp } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";

interface IButtonIcon {
  useCase: "share" | "back" | "newTask";
  type?: "submit" | "reset" | "button";
  bigger?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const ButtonIcon = ({
  useCase,
  type = "button",
  bigger,
  onClick,
  disabled,
}: IButtonIcon) => {
  return (
    <button
      className={`${
        bigger && "w-full"
      } bg-brand-primary text-white px-xs py-xs rounded-md border-0 duration-300 cursor-pointer active:bg-gray-primary flex flex-row-reverse gap-xs text-right`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {useCase === "newTask" && (
        <>
          <AiOutlinePlusSquare size="22" /> تسک جدید{" "}
        </>
      )}
      {useCase === "back" && (
        <>
          <IoArrowForwardSharp size="22" />
          بازگشت{" "}
        </>
      )}
      {useCase === "share" && (
        <>
          <FiShare2 size="22" />
          اشتراک‌گذاری{" "}
        </>
      )}
    </button>
  );
};
