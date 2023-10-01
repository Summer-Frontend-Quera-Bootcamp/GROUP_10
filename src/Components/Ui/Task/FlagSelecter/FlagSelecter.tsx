import { FiFlag } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

interface IFlagSelecterProps {
  onData: (data: number) => void;
}

export const FlagSelecter = ({ onData }: IFlagSelecterProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (num: number) => {
    onData(num);
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="bg-gray-secondary w-[200px] h-[250px] absolute rounded-md left-[15px] top-[15px] shadow-xl text-right text-sm flex flex-col ">
        <button
          className="flex flex-row-reverse items-center gap-xs w-full rounded-tr-md rounded-tl-md h-1/5 hover:bg-gray-300 text-body-m px-xs"
          onClick={() => {
            handleClick(4);
          }}
        >
          <FiFlag size="19" className="text-red-primary" /> فوری
        </button>
        <button
          className="flex flex-row-reverse items-center gap-xs w-full h-1/5 hover:bg-gray-300 text-body-m px-xs"
          onClick={() => {
            handleClick(3);
          }}
        >
          <FiFlag size="19" className="text-orange-primary" /> بالا
        </button>
        <button
          className="flex flex-row-reverse items-center gap-xs w-full h-1/5 hover:bg-gray-300 text-body-m px-xs"
          onClick={() => {
            handleClick(2);
          }}
        >
          <FiFlag size="19" className="text-blue-primary" />
          متوسط
        </button>
        <button
          className="flex flex-row-reverse items-center gap-xs w-full rounded-bl-md rounded-br-md h-1/5 hover:bg-gray-300 text-body-m px-xs"
          onClick={() => {
            handleClick(1);
          }}
        >
          <FiFlag size="19" className="text-lime-primary" />
          پایین
        </button>
        <button
          className="flex flex-row-reverse items-center gap-xs w-full rounded-bl-md rounded-br-md h-1/5 hover:bg-gray-300 text-body-m px-xs"
          onClick={() => {
            handleClick(0);
          }}
        >
          <IoClose size="19" className="text-red-primary" />
          حذف اولویت
        </button>
      </div>
    )
  );
};
