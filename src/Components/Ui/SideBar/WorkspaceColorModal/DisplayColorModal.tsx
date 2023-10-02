import { ContainerModal } from "../../Containers/ContainerModal/ContainerModal";
import { ButtonPrimary } from "../../Buttons";
import { PropsWithChildren } from "react";
import RenderSelectButtonColor from "../../../../Utils/SelectColorsButton";
import { Dispatch, SetStateAction } from "react";
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

interface IDisplayColorModal extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}

const DisplayColorModal: React.FC<IDisplayColorModal> = (props) => {
  const { setNewWorkspace, newWorkspace, setDisplayModals, displayModals } =
    props;

  const handleClose = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      colorModal: !prevState.colorModal,
    }));
    setNewWorkspace((prevData) => ({ ...prevData, name: "" }));
  };

  const handleBack = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      nameModal: !prevState.nameModal,
      colorModal: !prevState.colorModal,
    }));
    // setNameModalToggle(true);
    // setColorModalToggle(false);
  };

  const handleClick = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      colorModal: !prevState.colorModal,
      dataModal: !prevState.dataModal,
    }));
    // setColorModalToggle(false);
    // setFinalDataModalToggle(true);
  };

  const label = newWorkspace.name.split(" ");

  const words = [];
  for (let i = 0; i < label.length; i++) {
    if (words.length < 2) {
      words.push({ letter: label[i][0], id: i + 1 });
    }
  }

  return (
    displayModals.colorModal && (
      <>
        <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
          <ContainerModal
            heading="انتخاب رنگ ورک اسپیس"
            onClose={handleClose}
            onBack={handleBack}
          >
            <div className="flex flex-row-reverse mt-l">
              <div
                className={`bg-${
                  newWorkspace?.color === "default" ||
                  newWorkspace?.color === ""
                    ? "brand"
                    : newWorkspace?.color
                }-primary flex flex-row-reverse justify-center items-center w-16 h-16 p-2 rounded-lg`}
              >
                {words &&
                  words.map(
                    (w) =>
                      w && (
                        <span
                          className="text-heading-s mx-1 font-extrabold text-white"
                          key={w.id}
                        >
                          {w.letter}
                        </span>
                      )
                  )}
              </div>

              <div className="me-s flex flex-col items-end">
                <label className="text-body-s font-normal">رنگ ورک اسپیس</label>
                <div className="flex mt-s flex-wrap gap-y-3.5 items-center flex-row-reverse">
                  <RenderSelectButtonColor
                    data={newWorkspace}
                    setData={setNewWorkspace}
                  />
                </div>
              </div>
            </div>
            <div className="px-s mt-10">
              <ButtonPrimary bigger={true} onClick={handleClick}>
                ادامه
              </ButtonPrimary>
            </div>
          </ContainerModal>
        </div>
      </>
    )
  );
};

export default DisplayColorModal;
