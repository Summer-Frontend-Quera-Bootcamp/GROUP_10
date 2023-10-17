import { useState } from "react";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { BiPlus, BiPalette } from "react-icons/bi";
import { LuLink } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import ClickAwayListener from "react-click-away-listener";
import { IWorkspace } from "../Interface";

const columnMoreItems = [
  {
    title: "ساخت پروژه جدید",
    icon: <BiPlus />,
  },
  {
    title: "ویرایش نام ورک اسپیس",
    icon: <FiEdit />,
  },
  {
    title: "ویرایش رنگ",
    icon: <BiPalette />,
  },
  {
    title: "کپی لینک",
    icon: <LuLink />,
  },
  {
    title: "حذف",
    icon: <BsTrash3 />,
    textColor: true,
  },
  {
    title: "اشتراک گذاری",
    icon: <FiShare2 />,
    btnMode: true,
  },
];

const Workspace: React.FC<IWorkspace> = ({
  workspace,
  setDisplayModals,
}): JSX.Element => {
  const [columnMore, setColumnMore] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full " key={workspace.name}>
      <div
        className={`flex justify-end select-none rounded-md p-1 items-center transition duration-200 ${
          columnMore && "bg-slate-200"
        } hover:bg-slate-200 mt-s`}
      >
        <div className="flex relative  justify-between group/item items-center w-full">
          {/* ColumnMoreModal */}

          {/* TODO : write map function */}
          {columnMore && (
            <ClickAwayListener
              onClickAway={() => {
                setColumnMore((prevState) => !prevState);
              }}
            >
              <div className="absolute z-[50] group/edit top-7 bg-white w-max right-60 p-3 shadow-lg rounded-lg">
                <div className="flex flex-col gap-s items-end">
                  {columnMoreItems.map((column) => (
                    <button
                      className={`flex items-center gap-1 rounded w-full flex-row-reverse transition duration-300 ${
                        column.btnMode
                          ? "text-body-xs bg-brand-primary justify-center text-center py-1.5 px-3 text-white gap-1"
                          : "text-body-s p-1 hover:bg-slate-100"
                      } ${
                        column.textColor && "text-red-primary hover:bg-red-100"
                      }`}
                      key={column.title}
                    >
                      <span className="text-bold-m">{column.icon}</span>
                      <p>{column.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            </ClickAwayListener>
          )}

          {/* ColumnMoreModal */}

          <button
            className="invisible h-0 z-[10] transition-opacity duration-300 opacity-0 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:h-auto"
            onClick={() => {
              setColumnMore((prevState) => !prevState);
            }}
          >
            <HiEllipsisHorizontal />
          </button>
          <p className="text-end text-body-m select-none">{workspace.name}</p>
        </div>
        <div
          className={`w-5 h-5 bg-${workspace.color}-primary rounded ms-xs select-none`}
        ></div>
      </div>
      {/* Projects */}
      <button
        onClick={() =>
          setDisplayModals((prevState) => ({
            ...prevState,
            projectModal: !prevState.projectModal,
          }))
        }
        className="text-brand-primary bg-white hover:bg-brand-secondary transition rounded-md w-transparent border-2 border-brand-primary p-1 text-body-sm my-xs"
      >
        ساختن پروژه جدید
      </button>
      <div className="flex flex-col justify-end">
        {/* <p className="py-1 px-1.5 text-end me-7 my-xs rounded-md transition duration-200 hover:cursor-pointer hover:animate-pulse hover:bg-blue-100 text-body-m text-body-m">
                      پروژه سوم
                    </p> */}
      </div>
    </div>
  );
};

export default Workspace;
