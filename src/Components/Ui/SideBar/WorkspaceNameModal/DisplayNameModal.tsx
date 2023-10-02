import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { ButtonPrimary } from "../../Buttons";
import { ContainerModal } from "../../Containers/ContainerModal/ContainerModal";
import { ChangeEvent } from "react";
interface INewWorkspace {
  name: string;
  color: string;
  members: string[];
}

interface IDisplayNameModal extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
}

interface IModalsStatus {
  nameModal: boolean;
  colorModal: boolean;
  dataModal: boolean;
}

const DisplayNameModal: React.FC<IDisplayNameModal> = (props) => {
  const { newWorkspace, setNewWorkspace, displayModals, setDisplayModals } =
    props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewWorkspace((prevState) => ({ ...prevState, name: e.target.value }));
    // console.log(newWorkspace);
  };

  const handleClick = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      colorModal: !prevState.colorModal,
      nameModal: !prevState.nameModal,
    }));
  };
  const handleClose = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      nameModal: !prevState.nameModal,
    }));
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
