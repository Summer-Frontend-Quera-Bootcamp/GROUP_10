import { ChangeEvent, useState } from "react";
import ProjectTitle from "../../Titles/ProjectTitle/ProjectTitle";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsSearch, BsSun, BsMoon } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { ISiderBarMenu } from "../Interface";
import Workspace from "../SideBarWorkspace/SideBarWorkspace";
import { FaCircleUser } from "react-icons/fa6";
import { GiExitDoor } from "react-icons/gi";
import { NavLink } from "react-router-dom";
type SideBarCondition = {
  accordionStatus: boolean;
  toggleDarkMode: boolean;
};
const SiderBarMenu: React.FC<ISiderBarMenu> = ({
  workspaceData,
  filteredWorkspace,
  setFilteredWorkspace,
  setDisplayModals,
}) => {
  const [sideBarConditions, setSideBarConditions] = useState<SideBarCondition>({
    accordionStatus: true,
    toggleDarkMode: false,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredData = workspaceData.filter((workspace) =>
      workspace.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredWorkspace(filteredData);
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen overflow-hidden flex flex-col pe-10 border-s-2 ps-s border-gray-100">
        <div className="text-center mt-l mb-m">
          <ProjectTitle />
        </div>
        <div
          className="flex w-full items-center hover:cursor-pointer "
          onClick={() =>
            setSideBarConditions((prevState) => ({
              ...prevState,
              accordionStatus: !prevState.accordionStatus,
            }))
          }
        >
          <span
            className={`font-black duration-300 transition ease-in-out ${
              !sideBarConditions.accordionStatus && "rotate-90"
            }`}
          >
            <IoChevronForwardSharp />
          </span>
          <p className="text-bold-m font-extrabold text-end ms-auto">
            ورک اسپیس ها
          </p>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out  ${
            sideBarConditions.accordionStatus
              ? "invisible opacity-0 h-0"
              : "visible opacity-100 h-auto"
          }`}
        >
          <div className="relative">
            <input
              className="bg-gray-100 w-full text-end text-body-s font-medium px-8 py-3 my-s rounded"
              type="text"
              placeholder="جست و جو کنید"
              onChange={(e) => handleChange(e)}
            />
            <span className="absolute top-7 right-2">
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
              className="flex items-center justify-center text-black bg-gray-100 hover:bg-gray-200 transition rounded-md w-transparent border-1 border-brand-primary p-2.5 text-body-sm my-xs w-full"
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
        <div className="mt-auto mb-l flex gap-s flex-col ">
          {/* User  */}
          <NavLink to="/profile/account-user">
            <div className="flex flex-row-reverse items-center ">
              <span className="ms-xs text-2xl">
                <FaCircleUser />
              </span>
              <p className="text-body-m font-bold">امیر عبدالعظیمی</p>
            </div>
          </NavLink>
          <div className="flex flex-row-reverse items-center justify-between">
            <button className="flex items-center text-gray-primary flex-start flex-row-reverse">
              <span className="text-3xl ">
                <GiExitDoor />
              </span>
              <span className="mr-xs text-body-m">خروج</span>
            </button>
            <button
              className={`transition-all  delay-75 duration-500 w-16 flex rounded-lg p-1 items-center gap-xs ${
                sideBarConditions.toggleDarkMode
                  ? "bg-gray-darker "
                  : "bg-gray-secondary "
              }`}
              onClick={() => {
                setSideBarConditions((prevState) => ({
                  ...prevState,
                  toggleDarkMode: !prevState.toggleDarkMode,
                }));
              }}
            >
              <span
                className={`p-1 transition-all duration-500 text-white flex items-center justify-center rounded bg-gray-primary text-lg ${
                  sideBarConditions.toggleDarkMode
                    ? "visible opacity-100"
                    : "invisible  opacity-0"
                }`}
              >
                <BsMoon />
              </span>
              <span
                className={`p-1 transition-all duration-500 text-black bg-white flex items-center justify-center rounded text-lg ${
                  sideBarConditions.toggleDarkMode
                    ? "invisible  opacity-0"
                    : "visible opacity-100"
                }`}
              >
                <BsSun />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiderBarMenu;
