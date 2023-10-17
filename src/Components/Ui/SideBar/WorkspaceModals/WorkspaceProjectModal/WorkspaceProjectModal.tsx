import { ContainerModal } from "../../../Containers/ContainerModal/ContainerModal";
import { ButtonPrimary } from "../../../Buttons";
import { IDisplayProjectModal } from "../../Interface";
import { ChangeEvent, useState } from "react";

const DisplayProjectModal: React.FC<IDisplayProjectModal> = (props) => {
  const { workspaceData, setWorkspaceData, setDisplayModals, displayModals } =
    props;

  const [projectName, setProjectName] = useState<string>("");
  const handleClose = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      projectModal: !prevState.projectModal,
    }));
  };

  const handleBack = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      nameModal: !prevState.nameModal,
      projectModal: !prevState.projectModal,
    }));
  };

  const handleClick = () => {
    setDisplayModals((prevState) => ({
      ...prevState,
      projectModal: !prevState.projectModal,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
    console.log(projectName);
  };

  // {workspaceid}/{project}/{borad}/{task}

  return (
    displayModals.projectModal && (
      <>
        <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
          <ContainerModal
            heading="ساختن پروژه جدید"
            onClose={handleClose}
            onBack={handleBack}
          >
            <div>
              <div className="flex flex-col text-right  gap-xl">
                <div>
                  <label className="text-right" htmlFor={projectName}></label>
                  نام پروژه
                  <input
                    id={projectName}
                    type="text"
                    value={projectName}
                    onChange={handleChange}
                    placeholder="نام پروژه را وارد کنید"
                    className="border border-gray-primary rounded-md text-end p-xs my-xs w-full"
                  />
                </div>
                <div>
                  <ButtonPrimary onClick={handleClick} bigger={true}>
                    ادامه
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </ContainerModal>
        </div>
      </>
    )
  );
};

export default DisplayProjectModal;
