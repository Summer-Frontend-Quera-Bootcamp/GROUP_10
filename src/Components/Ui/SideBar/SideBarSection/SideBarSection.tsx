import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import ProjectTitle from "../../Titles/ProjectTitle/ProjectTitle";
import { IoChevronForwardSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";

interface INewWorkspace {
  name: string;
  color: string;
  members: string[];
}
interface IModalsStatus {
  nameModal: boolean;
  colorModal: boolean;
  dataModal: boolean;
}

interface ISiderBarSection extends PropsWithChildren {
  workspaceData: INewWorkspace[];
  filteredWorkspace: INewWorkspace[];
  setFilteredWorkspace: Dispatch<SetStateAction<INewWorkspace[]>>;
  setWorkspaceData: Dispatch<SetStateAction<INewWorkspace[]>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}

const SiderBarSection: React.FC<ISiderBarSection> = ({
  workspaceData,
  setWorkspaceData,
  filteredWorkspace,
  setFilteredWorkspace,
  setDisplayModals,
}) => {
  const [accordionStatus, setAccordionStatus] = useState<boolean>(false);

  // TODO:
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredData = workspaceData.filter((workspace) =>
      workspace.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(e.target.value);
    setFilteredWorkspace(filteredData);
    console.log(workspaceData);
  };

  return (
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
          className={`transition duration-300 pe-12 ${
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
                  <button className="text-brand-primary bg-white hover:bg-brand-secondary transition rounded-md w-transparent border-2 border-brand-primary p-1 text-body-sm my-xs">
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
  );
};

export default SiderBarSection;
