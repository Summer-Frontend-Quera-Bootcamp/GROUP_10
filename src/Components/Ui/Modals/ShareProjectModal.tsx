import { FiLink } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { ContainerModal } from "../Containers/ContainerModal/ContainerModal";
import { InputInvite } from "../Inputs/InputInvite/InputInvite";

interface IShareModal {
  onClose: () => void;
}

const ShareProjectModal = ({ onClose }: IShareModal) => {
  //const [isPermissionModalOpen, setPermissionModalOpen] = useState(false);
  return (
    <div className="mr-[429px] mt-[50px] fixed backdrop-grayscale">
      <ContainerModal
        heading={"به اشتراک گذاری پروژه"}
        onClose={onClose}
        width="w-[470px]"
      >
        <div className="flex flex-col gap-m">
          <InputInvite onClick={() => {}} />
          <div className="flex flex-row-reverse justify-between">
            <label className="flex flex-row gap-xs items-center">
              لینک خصوصی
              <FiLink />
            </label>
            <button className="px-[12px] pt-[2px] pb-[3px] border rounded-md">
              کپی لینک
            </button>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="text-gray-primary text-right">
              اشتراک گذاشته شده با
            </span>
            <div className="grid grid-rows-2 gap-xs">
              <div className="flex flex-row-reverse items-center gap-xs">
                <div className="bg-[url('../src/assets/prof.jpg')] bg-cover bg-center w-[34px] h-[37px] rounded-full" />
                <label>من</label>
                <span className="bg-blue-secondary rounded-md text-blue-primary py-[4px] px-[8px]">
                  Workspace Owner
                </span>
                <button className="px-[12px] pt-[2px] pb-[3px] border rounded-md mr-auto">
                  دسترسی کامل
                </button>
              </div>
              <div className="flex flex-row-reverse items-center gap-xs">
                <div className="bg-orange-secondary w-[34px] h-[37px] rounded-full" />
                <span className="px-[8px]">smail@mail.com</span>
                <button className="flex flex-row gap-xs items-center px-[12px] pt-[2px] pb-[3px] border rounded-md mr-auto">
                  <IoIosArrowDown />
                  دسترسی کامل
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerModal>
    </div>
  );
};

export default ShareProjectModal;
