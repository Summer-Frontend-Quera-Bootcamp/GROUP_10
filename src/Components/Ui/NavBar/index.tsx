import { CiCircleList } from "react-icons/ci";
import {
  MdOutlineViewQuilt,
  MdDateRange,
  MdOutlineRestore,
} from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { LiaFilterSolid } from "react-icons/lia";
import { useState } from "react";
import FilterModal from "../FilterView/FilterModal";
import ShareProjectModal from "../Modals/ShareProjectModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NavBar = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [chosen, setChosen] = useState<string[]>([]);
  const [calenderFlag, setCalenderFlag] = useState(false);
  const [userPermission, setUserPermission] = useState(3);

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = (attributes: string[]) => {
    setIsFilterModalOpen(false);
    setChosen(attributes);
  };

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = (permissionId: number) => {
    setUserPermission(permissionId);
    setIsShareModalOpen(false);
  };

  const onCalenderClick = () => {
    setCalenderFlag(true);
  };

  const onBoardClick = () => {
    setCalenderFlag(false);
  };
  return (
    <div className="gird w-[1034px] mt-[41px] ml-[50px] border-cyan-600">
      <div className="flex flex-row-reverse gap-x-s py-4 border-b-[1px]">
        <h1 className="pl-4 border-l-[2px] font-extrabold">پروژه اول</h1>
        <button
          className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px] hover:text-cyan-primary hover:font-extrabold"
          onClick={onBoardClick}
        >
          <CiCircleList />
          نمایش لیستی
        </button>
        <button
          className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px] hover:text-cyan-primary hover:font-extrabold"
          onClick={onBoardClick}
        >
          <MdOutlineViewQuilt />
          نمایش ستونی
        </button>
        <button
          className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px] hover:text-cyan-primary hover:font-extrabold"
          onClick={onCalenderClick}
        >
          <MdDateRange />
          تقویم
        </button>
        <button
          className="flex flex-row-reverse gap-x-xs items-center mr-auto  hover:text-cyan-primary hover:font-extrabold"
          onClick={openShareModal}
        >
          <BiShareAlt />
          اشتراک گذاری
        </button>

        {isShareModalOpen && (
          <div className="fixed inset-0 z-10 bg-gray-darker bg-opacity-50">
            <ShareProjectModal
              onClose={(permissionId) => {
                closeShareModal(permissionId);
              }}
              userPermission={userPermission}
            />
          </div>
        )}
      </div>
      <div className="flex flex-row-reverse py-4 items-center border-b-[1px]">
        <div className="flex flex-row-reverse gap-x-xs items-center border-l-[2px] pl-4">
          <BsSearch />
          <input
            placeholder="جستجو در بین تسک ها"
            className=" text-xs text-right"
          ></input>
        </div>
        {!calenderFlag ? (
          <>
            <button
              className="flex flex-row-reverse gap-x-xs items-center hover:text-cyan-primary hover:font-extrabold pr-4 pl-4"
              onClick={openFilterModal}
            >
              <LiaFilterSolid />
              فیلتر ها
            </button>

            {isFilterModalOpen && (
              <div className="fixed inset-0 z-10 bg-gray-darker bg-opacity-50">
                <FilterModal
                  onClose={(attributes) => {
                    closeFilterModal(attributes);
                  }}
                />
              </div>
            )}
            <p className="bg-cyan-secondary text-cyan-primary px-2 py-1 text-xs">
              دسته بندی شده با {chosen.join(" و ")}
            </p>
            <button
              className="flex flex-row-reverse gap-x-xs items-center mr-auto px-[8px] py-[4px] border border-cyan-primary text-[13px] rounded-[8px]"
              onClick={() => {}}
            >
              <MdOutlineRestore />
              بازگردانی تسک های آرشیو شده
            </button>
          </>
        ) : (
          <div className="flex flex-row-reverse items-center gap-xs mr-[10px]">
            <span>امروز</span>
            <IoIosArrowForward className="cursor-pointer" onClick={() => {}} />
            <IoIosArrowBack className="cursor-pointer" onClick={() => {}} />
            <span>اردیبهشت 1402</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
