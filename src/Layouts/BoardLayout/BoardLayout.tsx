import { Fragment, PropsWithChildren, useRef, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import ProjectTitle from "../../Components/Ui/Titles/ProjectTitle/ProjectTitle";
import { ContainerModal } from "../../Components/Ui/Containers/ContainerModal/ContainerModal";
import { InputText } from "../../Components/Ui/Inputs";
import { ButtonPrimary } from "../../Components/Ui/Buttons";
import { useDetectClickOutside } from "react-detect-click-outside";

interface IBoardLayout extends PropsWithChildren {}
const BoardLayout = ({ children }: IBoardLayout): JSX.Element => {
  const [workspaceData, setWorkSpaceData] = useState({
    name: "",
    color: "",
    memebrs: [],
  });

  const [accordionStatus, setAccordionStatus] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [displayWorkSpaceNameeModal, setDisplayWorkSpaceNameModal] =
    useState<Boolean>(false);

  const [displayWorkSpaceColorModal, setDisplayWorkSpaceColorModal] =
    useState<Boolean>(false);

  const colorModalRef = useDetectClickOutside({
    onTriggered: () => {
      setDisplayWorkSpaceColorModal(false);
    },
    disableClick: true,
  });

  return (
    <>
      <div
        className={`grid grid-cols-4 transition duration-200
        ${showModal ? "blur-sm backdrop-contrast-50 " : ""}`}
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
                  onClick={() => setShowModal(true)}
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

      {showModal && (
        <div className="absolute inset-x-1/3 inset-y-1/4">
          <ContainerModal
            heading="ساختن ورک اسپیس جدید"
            onClose={() => setDisplayWorkSpaceNameModal(false)}
          >
            <div className="mt-l">
              <InputText label="نام ورک اسپیس" name="workSpaceName" />
            </div>
            <div className=" mt-l">
              <ButtonPrimary
                bigger={true}
                onClick={() => {
                  setDisplayWorkSpaceNameModal(false);
                  setDisplayWorkSpaceColorModal(true);
                }}
              >
                ادامه
              </ButtonPrimary>
            </div>
          </ContainerModal>
        </div>
      )}

      {displayWorkSpaceColorModal && (
        <div className="absolute inset-x-1/3 inset-y-1/4" ref={colorModalRef}>
          <ContainerModal
            heading="انتخاب رنگ ورک اسپیس"
            onClose={() => {
              setDisplayWorkSpaceColorModal(false);
            }}
            onBack={() => {
              setDisplayWorkSpaceNameModal(true);
              setDisplayWorkSpaceColorModal(false);
            }}
          >
            <div>test</div>
          </ContainerModal>
        </div>
      )}
      <ContainerModal heading="1" onClose={() => {}}>
        test
      </ContainerModal>
    </>
  );
};

export default BoardLayout;
