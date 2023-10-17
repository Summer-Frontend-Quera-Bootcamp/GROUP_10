import { ContainerModal } from "../../../Containers/ContainerModal/ContainerModal";
import { ButtonPrimary } from "../../../Buttons";
import { CiNoWaitingSign } from "react-icons/ci";
import { IDisplayWorkspaceDataModalProps } from "../../Interface";

const DisplayWorkspaceDataModal: React.FC<IDisplayWorkspaceDataModalProps> = (
  props
) => {
  const {
    newWorkspace,
    displayModals,
    setDisplayModals,
    addWorkspaceHandler,
    setNewWorkspace,
  } = props;

  const handleBack = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      colorModal: !prevState.colorModal,
      dataModal: !prevState.dataModal,
    }));
  };
  const handleClose = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      dataModal: !prevState.dataModal,
    }));
    setNewWorkspace({ id: 0, name: "", color: "", members: [] });
  };
  return (
    displayModals.dataModal && (
      <>
        <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
          <ContainerModal
            heading="مرور اطلاعات"
            onClose={handleClose}
            onBack={handleBack}
          >
            <div className="border border-gray-400 flex flex-col gap-7 border-black rounded-lg px-3 py-4 mt-xl">
              <div className="flex justify-between flex-row-reverse text-body-m font-extrabold">
                <p>نام ورک اسپیس</p>
                <span>{newWorkspace?.name}</span>
              </div>
              <div className="flex justify-between flex-row-reverse">
                <p className=" text-body-m font-extrabold">رنگ ورک اسپیس</p>
                {newWorkspace.color === "default" ||
                newWorkspace.color === "" ? (
                  <CiNoWaitingSign />
                ) : (
                  <label
                    className={`w-4 h-4 rounded-sm bg-${newWorkspace?.color}-primary`}
                  ></label>
                )}
              </div>
              <div className="flex justify-between flex-row-reverse">
                <p className=" text-body-m font-extrabold">اعضا</p>
                <span>khodam</span>
              </div>
            </div>
            <div className="px-s mt-10">
              <ButtonPrimary bigger={true} onClick={addWorkspaceHandler}>
                ساختن ورک اسپیس
              </ButtonPrimary>
            </div>
          </ContainerModal>
        </div>
      </>
    )
  );
};

export default DisplayWorkspaceDataModal;
