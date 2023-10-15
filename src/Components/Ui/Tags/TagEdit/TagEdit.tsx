import { MdOutlineColorLens } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { useState, useRef } from "react";

interface Props {
  onEdit: (text: string) => void;
  onColor: (
    color:
      | "red"
      | "pink"
      | "grape"
      | "violet"
      | "indigo"
      | "blue"
      | "cyan"
      | "teal"
      | "brand"
      | "green"
      | "yellow"
      | "lime"
      | "orange"
  ) => void;
  onDelete: () => void;
}

export const TagEdit = ({ onDelete, onColor, onEdit }: Props) => {
  const [showcolor, setShowColor] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const text = useRef<HTMLInputElement>(null);
  return (
    isOpen && (
      <div className="bg-gray-secondary w-[130px] absolute rounded-md left-[60px] top-[100px] shadow-2xl z-10">
        {showText && (
          <div className="flex flex-col p-xs">
            <input
              ref={text}
              className="border-2 border-gray-darker px-xs text-right"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (text.current !== null) {
                    onEdit(text.current.value);
                  }
                  setIsOpen(false);
                }
              }}
              autoFocus
            />
          </div>
        )}
        {showcolor && (
          <div className="flex flex-row-reverse flex-wrap gap-xs p-xs">
            <span
              onClick={() => {
                onColor("yellow");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-yellow-primary"
            />
            <span
              onClick={() => {
                onColor("orange");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-orange-primary"
            />
            <span
              onClick={() => {
                onColor("red");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-red-primary"
            />
            <span
              onClick={() => {
                onColor("pink");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-pink-primary"
            />
            <span
              onClick={() => {
                onColor("grape");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-grape-primary"
            />
            <span
              onClick={() => {
                onColor("violet");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-violet-primary"
            />
            <span
              onClick={() => {
                onColor("indigo");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-indigo-primary"
            />
            <span
              onClick={() => {
                onColor("blue");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-blue-primary"
            />
            <span
              onClick={() => {
                onColor("cyan");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-cyan-primary"
            />
            <span
              onClick={() => {
                onColor("teal");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-teal-primary"
            />
            <span
              onClick={() => {
                onColor("brand");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-brand-primary"
            />
            <span
              onClick={() => {
                onColor("green");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-green-primary"
            />
            <span
              onClick={() => {
                onColor("lime");
                setIsOpen(false);
              }}
              className="h-[20px] w-[20px] rounded-full cursor-pointer hover:border-2 border-gray-darker duration-100 bg-lime-primary"
            />
          </div>
        )}
        {!showcolor && !showText && (
          <div className="h-[100px] text-right text-sm flex flex-col ">
            <button
              onClick={() => {
                setShowText(true);
              }}
              className="flex flex-row-reverse items-center gap-xs w-full rounded-tr-md rounded-tl-md h-1/3 hover:bg-gray-300 px-xs"
            >
              <FiEdit size="19" /> ویرایش تگ
            </button>
            <button
              onClick={() => {
                setShowColor(true);
              }}
              className="flex flex-row-reverse items-center gap-xs w-full h-1/3 hover:bg-gray-300 px-xs"
            >
              <MdOutlineColorLens size="23" /> ویرایش رنگ
            </button>
            <button
              onClick={() => {
                onDelete();
                setIsOpen(false);
              }}
              className="flex flex-row-reverse items-center gap-xs w-full rounded-bl-md rounded-br-md h-1/3 hover:bg-gray-300 hover:text-red-primary px-xs"
            >
              <GoTrash size="19" />
              حذف تگ
            </button>
          </div>
        )}
      </div>
    )
  );
};
