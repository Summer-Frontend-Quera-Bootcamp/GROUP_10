import { ChangeEvent, Fragment, useState } from "react";
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
      <Fragment>
        <div className=" border-s-2 ps-s border-gray-100">
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
            <div>
              <input
                className="bg-gray-100 w-full text-end text-body-s font-medium px-8 py-2 my-s rounded"
                type="text"
                placeholder="جست و جو کنید"
                onChange={(e) => handleChange(e)}
              />
              <span className="absolute top-40 end-14">
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
                className="flex items-center justify-center text-black bg-gray-100 hover:bg-gray-300 transition  rounded-md w-transparent border-1 border-brand-primary p-2.5 text-body-sm my-xs w-full"
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
                  <div className="flex flex-col w-full " key={workspace.name}>
                    <div className="flex justify-end select-none rounded-md p-1 items-center transition duration-200 hover:bg-slate-200 mt-s">
                      <p className="text-end text-body-m select-none">
                        {workspace.name}
                      </p>
                      <div
                        className={`w-5 h-5 bg-${workspace.color}-primary rounded ms-xs select-none`}
                      ></div>
                    </div>
                    {/* Projects */}
                    <div className="flex flex-col justify-end">
                      {/* <p className="py-1 px-1.5 text-end me-7 my-xs rounded-md transition duration-200 hover:cursor-pointer hover:animate-pulse hover:bg-blue-100 text-body-m text-body-m">
                      پروژه سوم
                    </p> */}
                    </div>
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
                  </div>
                ))}
              {/* static workspace */}
              {/* <div className="flex flex-col w-full">
              <div className="flex justify-end select-none rounded-md p-1 items-center transition duration-200 hover:bg-slate-200 mt-s">
                <p className="text-end text-body-m select-none">
                  درس مدیریت پروژه
                </p>
                <div className="w-5 h-5 bg-green-primary rounded ms-xs select-none"></div>
              </div>
              <div className="flex flex-col justify-end">
                <p className="py-1 px-1.5 text-end me-7 my-xs rounded-md transition duration-200 hover:cursor-pointer hover:animate-pulse hover:bg-blue-100 text-body-m text-body-m">
                  پروژه اول
                </p>
                <p className="py-1 px-1.5 text-end me-7 my-xs rounded-md transition duration-200 hover:cursor-pointer hover:animate-pulse hover:bg-blue-100 text-body-m text-body-m">
                  پروژه دوم
                </p>
                <p className="py-1 px-1.5 text-end me-7 my-xs rounded-md transition duration-200 hover:cursor-pointer hover:animate-pulse hover:bg-blue-100 text-body-m text-body-m">
                  پروژه سوم
                </p>
              </div>
              <button className="text-brand-primary bg-white hover:bg-brand-secondary transition rounded-md w-transparent border-2 border-brand-primary p-1 text-body-sm my-xs">
                ساختن پروژه جدید
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </Fragment>

      {/* <div className="relative">
        <button
          className="flex justify-between items-center w-full p-4 bg-gray-200 text-gray-700 font-semibold border-b border-gray-300 focus:outline-none"
          onClick={() => setAccordionStatus(!accordionStatus)}
        >
          <span>Accordion Title</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              accordionStatus ? "transform rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
        <div
          className={`${
            accordionStatus
              ? "max-h-96 opacity-100 transition-all duration-500 ease-in-out"
              : "max-h-0 opacity-0 transition-all duration-500 ease-in-out"
          } absolute w-full bg-white border border-gray-300 mt-2 py-2 overflow-hidden`}
        >
          <p className="px-4 py-2">Accordion Content</p>
        </div>
      </div> */}
    </>
  );
};

export default SiderBarMenu;
