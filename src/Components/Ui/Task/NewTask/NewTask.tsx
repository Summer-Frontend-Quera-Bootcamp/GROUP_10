import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiCheckboxBlankFill } from "react-icons/ri";
import Dropdown from "../../DropDown/DropDown";
import { FiUserPlus } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";
import { ButtonPrimary } from "../../Buttons";
import { FlagSelecter } from "..";

interface INewTaskProp {
  onClose: () => void;
}

const NewTask = ({ onClose }: INewTaskProp) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showPriority, setShowPriority] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="w-[1000px] h-[600px] flex flex-col justify-between rounded-lg shadow-xl p-m relative">
          <div className="flex flex-row-reverse items-center w-full">
            <RiCheckboxBlankFill size="20" className="ml-xs text-gray-300" />
            <h3 className="ml-auto text-heading-s font-bold">عنوان تسک</h3>
            <IoClose
              onClick={handleClose}
              size="22"
              className=" text-gray-300 cursor-pointer hover:text-gray-primary"
            />
          </div>
          <div className="flex flex-row-reverse items-center">
            <p className="ml-xs"> در </p>
            <div className="w-[150px] flex flex-col">
              <Dropdown
                options={[
                  { label: "hello", value: "hello" },
                  { label: "hello1", value: "hello1" },
                  { label: "hello2", value: "hello2" },
                ]}
              />
            </div>
            <p className="mx-xs"> برای </p>
            <span className="w-[35px] min-h-[35px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary">
              <FiUserPlus size="20" className="text-gray-300" />
            </span>
          </div>
          <textarea
            className="w-full h-[250px] border rounded-md p-s text-right flex"
            placeholder="توضیحاتی برای این تسک بنویسید"
          />
          <div className="flex flex-row-reverse items-center">
            <p className="ml-xs font-bold">افزودن پیوست </p>
            <button className="flex flex-row items-center gap-xs border-2 border-brand-primary rounded px-xs py-[3px] font-bold">
              آپلود فایل
              <BiLink size="20" className="text-brand-primary" />
            </button>
          </div>
          {showPriority && (
            <div className="absolute left-[930px] top-[530px] ">
              <FlagSelecter
                onData={(data) => {
                  console.log(data);
                  setShowPriority(false);
                }}
              />
            </div>
          )}
          <div className="flex flex-row-reverse items-center">
            <div className="flex gap-xs ml-auto">
              <span className="w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary">
                <BsTags size="25" className="text-gray-300" />
              </span>
              <span className="w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary">
                <BsCalendar3 size="23" className="text-gray-300" />
              </span>
              <span
                className="w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-dotted border-2 border-gray-300 cursor-pointer hover:border-gray-primary"
                onClick={() => {
                  setShowPriority(true);
                }}
              >
                <FiFlag size="25" className="text-gray-300" />
              </span>
            </div>
            <ButtonPrimary onClick={() => {}}> ساختن تسک </ButtonPrimary>
          </div>
        </div>
      )}
    </>
  );
};

export default NewTask;
