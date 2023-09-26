import "./styles.css";
import { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { TfiMoreAlt } from "react-icons/tfi";
import { FiEdit } from "react-icons/fi";
import { PiArchiveTray } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
interface IColumnHeaderProps {
  color: string;
  name: string;
  count: number;
  onAdd: () => void;
  onEdit: () => void;
  onArchive: () => void;
  onDelete: () => void;
}

export const ColumnHeader = ({
  name,
  count,
  onAdd,
  onArchive,
  onDelete,
  onEdit,
}: IColumnHeaderProps) => {
  const [moreDisplay, setMoreDisplay] = useState(false);

  const handleMoreClick = () => {
    console.log("click");
    setMoreDisplay(true);
  };

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
          <TfiMoreAlt onClick={handleMoreClick} className="cursor-pointer" />
        </div>
        <div className="flex gap-xs ml-auto">
          <span className="bg-gray-secondary text-lg px-xs rounded-full">
            {count}
          </span>
          <p className="font-bold text-lg">{name}</p>
        </div>
      </div>
      {moreDisplay && (
        <div className="bg-gray-secondary w-[160px] h-[150px] absolute rounded-md left-[15px] top-[15px] shadow-xl text-right text-sm flex flex-col">
          <button
            onClick={onEdit}
            className="flex flex-row-reverse items-center gap-xs w-full rounded-tr-md rounded-tl-md h-1/4 hover:bg-gray-300 px-xs"
          >
            <FiEdit size="19" /> ویرایش نام ستون
          </button>
          <button
            onClick={onAdd}
            className="flex flex-row-reverse items-center gap-xs w-full h-1/4 hover:bg-gray-300 px-xs"
          >
            <FaPlus size="16" className="pr-[4px]" /> افزودن تسک
          </button>
          <button
            onClick={onArchive}
            className="flex flex-row-reverse items-center gap-xs w-full h-1/4 hover:bg-gray-300 px-xs"
          >
            <PiArchiveTray size="20" />
            آرشیو تمام تسک‌ها
          </button>
          <button
            onClick={onDelete}
            className="flex flex-row-reverse items-center gap-xs w-full rounded-bl-md rounded-br-md h-1/4 hover:bg-gray-300 px-xs"
          >
            <GoTrash size="19" />
            حذف ستون
          </button>
        </div>
      )}
    </div>
  );
};
