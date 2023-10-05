import { ButtonPrimary } from "../../../Buttons";
import { ContainerModal } from "../../../Containers/ContainerModal/ContainerModal";
import { ChangeEvent, useState } from "react";
import { IDisplayNameModal } from "../../Interface";

const DisplayNameModal: React.FC<IDisplayNameModal> = (props) => {
  const { newWorkspace, setNewWorkspace, displayModals, setDisplayModals } =
    props;
  const [validateName, setValidateName] = useState<boolean>(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewWorkspace((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleClick = () => {
    if (newWorkspace.name.length >= 4) {
      setDisplayModals((prevState) => ({
        ...prevState,
        colorModal: !prevState.colorModal,
        nameModal: !prevState.nameModal,
      }));
      setValidateName(true);
    } else {
      setValidateName(false);
    }
  };
  const handleClose = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      nameModal: !prevState.nameModal,
    }));
    setNewWorkspace({ name: "", color: "", members: [] });
    setValidateName(true);
  };
  return (
    displayModals.nameModal && (
      <>
        <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
          <ContainerModal heading="ساختن ورک اسپیس جدید" onClose={handleClose}>
            <div>
              <div className="mt-l">
                <div className="flex flex-col text-right">
                  <label className="text-right" htmlFor="workspaceName">
                    نام ورک اسپیس
                  </label>
                  <input
                    id="workspaceName"
                    type="text"
                    value={newWorkspace.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="border border-gray-primary rounded-md p-xs my-xs w-full"
                  />
                  {!validateName && (
                    <span className="text-xs text-red-primary">
                      ! وارد کردن نام ورک اسپیس اجباری است
                    </span>
                  )}
                </div>
              </div>
              <div className=" mt-l">
                <ButtonPrimary bigger={true} onClick={handleClick}>
                  ادامه
                </ButtonPrimary>
              </div>
            </div>
          </ContainerModal>
        </div>
      </>
    )
  );
};

export default DisplayNameModal;
