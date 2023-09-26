import "./styles.css";

import { FaPlus } from "react-icons/fa6";
import { TfiMoreAlt } from "react-icons/tfi";
interface IColumnHeaderProps {
  name: string;
  count: number;
  onAdd: () => void;
  onMore: () => void;
}

export const ColumnHeader = ({
  name,
  count,
  onAdd,
  onMore,
}: IColumnHeaderProps) => {
  return (
    <div className="w-full h-[44px] bg-blue-primary relative rounded-2xl shadow-xl">
      <div
        id="parent"
        className="ease-in-out duration-300 w-full h-[44px] bg-white absolute top-[3px] rounded-2xl flex flex-row items-center justify-between px-s"
      >
        <div
          id="child"
          className=" flex gap-xs text-gray-darker transition-opacity duration-300 ease-in-out"
        >
          <FaPlus onClick={onAdd} className="cursor-pointer" />
          <TfiMoreAlt onClick={onMore} className="cursor-pointer" />
        </div>
        <div className="flex gap-xs ml-auto">
          <span className="bg-gray-secondary text-lg px-xs rounded-full">
            {count}
          </span>
          <p className="font-bold text-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};
