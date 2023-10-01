import {
  ChangeEvent,
  MouseEvent,
  Fragment,
  PropsWithChildren,
  useState,
} from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import ProjectTitle from "../../Components/Ui/Titles/ProjectTitle/ProjectTitle";
import { ContainerModal } from "../../Components/Ui/Containers/ContainerModal/ContainerModal";
import { ButtonPrimary } from "../../Components/Ui/Buttons";
import { CiNoWaitingSign } from "react-icons/ci";
interface IBoardLayout extends PropsWithChildren {}
const BoardLayout = ({ children }: IBoardLayout): JSX.Element => {
  interface IWorkSpaceData {
    name: string | undefined;
    color: string | undefined;
    members: string[] | undefined;
  }
  const [workspaceData, setWorkSpaceData] = useState<
    Partial<IWorkSpaceData> | undefined
  >({
    name: "",
    color: "",
    // memebrs: [],
  });

  //  TODO
  const addWorkSpaceHandler = () => {
    // if (workspaceData.name.length > 4) {
    //   setDisplayNameModal(false);
    //   setDisplayColorModal(true);
    //   // setWorkSpaceData((prevState) => ({ ...prevState, name: "" }));
    // }
    setDisplayNameModal(false);
    setDisplayColorModal(true);
    console.log(workspaceData);
  };
  const addWorkSpaceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkSpaceData((prevState) => ({ ...prevState, name: e.target.value }));
    console.log(workspaceData);
  };
  const [accordionStatus, setAccordionStatus] = useState<Boolean>(false);
  const [displayNameModal, setDisplayNameModal] = useState<Boolean>(false);
  const [displayColorModal, setDisplayColorModal] = useState<Boolean>(false);
  const [displayFinalWorkSpaceDataModal, setDisplayFinalWorkSpaceDataModal] =
    useState<Boolean>(false);

  const buttonsColor: string[] = [
    "default",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "brand",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "pink",
    "grape",
    "violet",
  ];
  const selectColorHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.dataset.color;
    setWorkSpaceData((prevData) => ({
      ...prevData,
      color: target ? target : "default",
    }));
    console.log(workspaceData);
  };
  return (
    <>
      <div
        className={`grid grid-cols-4 transition duration-200
        ${
          displayNameModal ||
          displayColorModal ||
          displayFinalWorkSpaceDataModal
            ? "blur-sm backdrop-contrast-50 "
            : ""
        }`}
      >
        <div className="grid col-span-3 grid-rows-2 pt-xl ps-xl h-screen">
          <div>navbar</div>
          <div>boardview</div>
        </div>
        {/* SideBar Section */}
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
                />
                <span className="absolute top-40 end-14">
                  <BsSearch />
                </span>
              </div>
              <div>
                <button
                  onClick={() => setDisplayNameModal(true)}
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
                <div className="flex flex-col w-full">
                  <div className="flex justify-end select-none rounded-md p-1 items-center transition duration-200 hover:bg-slate-200 mt-s">
                    <p className="text-end text-body-m select-none">
                      درس کامپایلر
                    </p>
                    <div className="w-5 h-5 bg-red-primary rounded ms-xs select-none"></div>
                  </div>
                  <button className="text-brand-primary bg-white hover:bg-brand-secondary transition rounded-md w-transparent border-2 border-brand-primary p-1 text-body-sm my-xs">
                    ساختن پروژه جدید
                  </button>
                </div>
                <div className="flex flex-col w-full">
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
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>

      {displayNameModal && (
        <div className="absolute inset-x-1/3 inset-y-1/4">
          <ContainerModal
            heading="ساختن ورک اسپیس جدید"
            onClose={() => setDisplayNameModal(false)}
          >
            <div className="mt-l">
              <div className="flex flex-col text-right">
                <label className="text-right" htmlFor="name">
                  نام ورک اسپیس
                </label>
                <input
                  name="name"
                  type="text"
                  value={workspaceData?.name}
                  onChange={(e) => {
                    addWorkSpaceChangeHandler(e);
                  }}
                  className="border border-gray-primary rounded-md p-xs my-xs w-full"
                />
              </div>
            </div>
            <div className=" mt-l">
              <ButtonPrimary bigger={true} onClick={addWorkSpaceHandler}>
                ادامه
              </ButtonPrimary>
            </div>
          </ContainerModal>
        </div>
      )}

      {displayColorModal && (
        <div className="absolute inset-x-1/3 inset-y-1/4">
          <ContainerModal
            heading="انتخاب رنگ ورک اسپیس"
            onClose={() => {
              setDisplayColorModal(false);
              setWorkSpaceData((prevState) => ({ ...prevState, name: "" }));
            }}
            onBack={() => {
              setDisplayNameModal(true);
              setDisplayColorModal(false);
            }}
          >
            <div className="flex flex-row-reverse mt-l">
              <div
                className={`bg-${
                  workspaceData?.color === "default" ||
                  workspaceData?.color === ""
                    ? "brand"
                    : workspaceData?.color
                }-primary flex justify-center items-center w-16 h-16 p-2 rounded-lg`}
              >
                <span className="text-heading-s mx-1 font-extrabold text-white">
                  ط
                </span>
                <span className="text-heading-s mx-1 font-extrabold text-white">
                  ت
                </span>
              </div>
              <div className="me-s flex flex-col items-end">
                <label className="text-body-s font-normal">رنگ ورک اسپیس</label>
                <div className="flex mt-s flex-wrap gap-y-3.5 items-center flex-row-reverse">
                  {buttonsColor &&
                    buttonsColor.map((color) => (
                      <button
                        key={color}
                        data-color={color}
                        onClick={selectColorHandler}
                        className={`w-5 h-5 mx-2 flex items-center justify-center rounded-lg bg-${color}-primary ${
                          color === workspaceData?.color &&
                          color !== "default" &&
                          "w-7 h-7 rounded-xl"
                        }  ${color === "default" && "text-xl"}`}
                      >
                        {color === "default" ? (
                          <CiNoWaitingSign />
                        ) : (
                          <span
                            className={`${
                              color === workspaceData?.color &&
                              "w-3.5 h-3.5 rounded-full bg-white z-10"
                            }`}
                          ></span>
                        )}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="px-s mt-10">
              <ButtonPrimary
                bigger={true}
                onClick={() => {
                  setDisplayColorModal(false);
                  setDisplayFinalWorkSpaceDataModal(true);
                }}
              >
                ادامه
              </ButtonPrimary>
            </div>
          </ContainerModal>
        </div>
      )}

      {displayFinalWorkSpaceDataModal && (
        <div className="absolute inset-x-1/3 inset-y-1/4">
          <ContainerModal
            heading="مرور اطلاعات"
            onClose={() => {
              setDisplayFinalWorkSpaceDataModal(false);
            }}
            onBack={() => {
              setDisplayColorModal(true);
              setDisplayFinalWorkSpaceDataModal(false);
            }}
          >
            <div className="border border-gray-400 flex flex-col gap-7 border-black rounded-lg px-3 py-4 mt-xl">
              <div className="flex justify-between flex-row-reverse text-body-m font-extrabold">
                <p>نام ورک اسپیس</p>
                <span>{workspaceData?.name}</span>
              </div>
              <div className="flex justify-between flex-row-reverse">
                <p className=" text-body-m font-extrabold">رنگ ورک اسپیس</p>
                {workspaceData?.color === "default" ? (
                  <CiNoWaitingSign />
                ) : (
                  <label
                    className={`w-4 h-4 rounded-sm bg-${workspaceData?.color}-primary`}
                  ></label>
                )}
              </div>
              <div className="flex justify-between flex-row-reverse">
                <p className=" text-body-m font-extrabold">اعضا</p>
                <span>khodam</span>
              </div>
            </div>
            <div className="px-s mt-10">
              <ButtonPrimary
                bigger={true}
                onClick={() => {
                  console.log(workspaceData);
                }}
              >
                ساختن ورک اسپیس
              </ButtonPrimary>
            </div>
          </ContainerModal>
        </div>
      )}
    </>
  );
};

export default BoardLayout;
