import { CiCircleList } from "react-icons/ci";
import { MdOutlineViewQuilt, MdDateRange } from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { LiaFilterSolid } from "react-icons/lia";
import { useState } from "react";
import FilterModal from "../FilterView/FilterModal";
import ShareProjectModal from "../Modals/ShareProjectModal";
//import { ContainerModal } from "../Containers";

const NavBar = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [chosen, setChosen] = useState<string[]>([]);

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

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };
  return (
    <div className="gird w-[1034px] mt-[41px] ml-[50px] border-cyan-600">
      <div className="flex flex-row-reverse gap-x-s py-4 border-b-[1px]">
        <h1 className="pl-4 border-l-[2px] font-extrabold">پروژه اول</h1>
        <button className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px] hover:text-cyan-primary hover:font-extrabold">
          <CiCircleList />
          نمایش لیستی
        </button>
        <button className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px] hover:text-cyan-primary hover:font-extrabold">
          <MdOutlineViewQuilt />
          نمایش ستونی
        </button>
        <button className="flex flex-row-reverse gap-x-xs items-center pl-4 border-l-[2px] hover:text-cyan-primary hover:font-extrabold">
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

        {isShareModalOpen && <ShareProjectModal onClose={closeShareModal} />}
      </div>
      <div className="flex flex-row-reverse py-4 items-center border-b-[1px]">
        <div className="flex flex-row-reverse gap-x-xs items-center border-l-[2px] pl-4">
          <BsSearch />
          <input
            placeholder="جستجو در بین تسک ها"
            className=" text-xs text-right"
          ></input>
        </div>
        <button
          className="flex flex-row-reverse gap-x-xs items-center hover:text-cyan-primary hover:font-extrabold pr-4 pl-4"
          onClick={openFilterModal}
        >
          <LiaFilterSolid />
          فیلتر ها
        </button>
        {isFilterModalOpen && (
          <FilterModal
            onClose={(attributes) => {
              closeFilterModal(attributes);
            }}
          />
        )}
        <p className="bg-cyan-secondary text-cyan-primary px-2 py-1 text-xs">
          دسته بندی شده با {chosen.join(" و ")}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
