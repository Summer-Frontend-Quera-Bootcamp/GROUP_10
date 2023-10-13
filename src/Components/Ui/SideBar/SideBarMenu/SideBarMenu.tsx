import { ChangeEvent, useState } from "react";
import ProjectTitle from "../../Titles/ProjectTitle/ProjectTitle";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { ISiderBarMenu } from "../Interface";

const SiderBarMenu: React.FC<ISiderBarMenu> = ({
  workspaceData,
  filteredWorkspace,
  setFilteredWorkspace,
  setDisplayModals,
}) => {
  const [accordionStatus, setAccordionStatus] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredData = workspaceData.filter((workspace) =>
      workspace.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredWorkspace(filteredData);
  };

  return (
    <>
      <div className="h-screen border-s-2 ps-s border-gray-100">
        <div className="text-center mt-xl mb-m">
          <ProjectTitle />
        </div>
        <div
          className="flex items-center hover:cursor-pointer pe-12"
          onClick={() => setAccordionStatus((prevState) => !prevState)}
        >
          <span
            className={`font-black duration-300 transition ease-in-out ${
              !accordionStatus && "rotate-90"
            }`}
          >
            <IoChevronForwardSharp />
          </span>
          <p className="text-bold-m font-extrabold text-end ms-auto">
            ورک اسپیس ها
          </p>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out pe-12 ${
            accordionStatus
              ? "invisible opacity-0 h-0"
              : "visible opacity-100 h-auto"
          }`}
        >
          <div className="relative">
            <input
              className="bg-gray-100 w-full text-end text-body-s font-medium px-8 py-2 my-s rounded"
              type="text"
              placeholder="جست و جو کنید"
              onChange={(e) => handleChange(e)}
            />
            <span className="absolute top-6 right-2">
              <BsSearch />
            </span>
          </div>
          <div>
            <button
              onClick={() => {
                setDisplayModals((prevState) => ({
                  ...prevState,
                  nameModal: true,
                }));
              }}
              className="flex items-center justify-center text-black bg-gray-100 hover:bg-gray-200 transition  rounded-md w-transparent border-1 border-brand-primary p-2.5 text-body-sm my-xs w-full"
            >
              ساختن اسپیس جدید
              <span className="ms-1.5 font-black text-xl">
                <FiPlusSquare />
              </span>
            </button>
          </div>
          <div>
            {/* WorkSpaces */}
            {filteredWorkspace &&
              filteredWorkspace.map((workspace) => (
                <Workspace
                  workspace={workspace}
                  setDisplayModals={setDisplayModals}
                  key={workspace.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SiderBarMenu;

// immutable : taghir napazir
// mutable : taghiir pazir

// refrence type : object , array : mutable but dont mutate !

// objectAddress : 123astr3543ert

// singleThread

// memoryHeap , callStack

// function => function

// primitive type : but can reAssgin
// mutate : taghiir dadan
// immutate : taghir nadadan
