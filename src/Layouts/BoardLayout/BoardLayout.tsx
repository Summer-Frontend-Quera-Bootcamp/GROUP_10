import { useState } from "react";

import DisplayNameModal from "../../Components/Ui/SideBar/WorkspaceNameModal/DisplayNameModal";
import DisplayColorModal from "../../Components/Ui/SideBar/WorkspaceColorModal/DisplayColorModal";
import DisplayWorkspaceDataModal from "../../Components/Ui/SideBar/WorkspaceDataModal/DisplayworkspaceDataModal";
import SiderBarSection from "../../Components/Ui/SideBar/SideBarSection/SideBarSection";

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
const BoardLayout: React.FC = (): JSX.Element => {
  const [newWorkspace, setNewWorkspace] = useState<INewWorkspace>({
    name: "",
    color: "",
    members: [],
  });

  const [workspaceData, setWorkspaceData] = useState<INewWorkspace[]>([]);

  const [displayModals, setDisplayModals] = useState<IModalsStatus>({
    nameModal: false,
    colorModal: false,
    dataModal: false,
  });
  // add Workspace
  const addNewWorkspace = () => {
    setWorkspaceData((prevState) => [...prevState, newWorkspace]);
    setNewWorkspace({ name: "", color: "", members: [] });
    setDisplayModals({
      nameModal: false,
      colorModal: false,
      dataModal: false,
    });
    console.log(workspaceData);
  };
  //

  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-rows-2 pt-xl ps-xl h-screen">
          <div>navbar</div>
          <div>boardview</div>
        </div>
        {/* SideBar Section */}
        <SiderBarSection
          workspaceData={workspaceData}
          setWorkspaceData={setWorkspaceData}
          //
          setDisplayModals={setDisplayModals}
        />
      </div>
      <DisplayNameModal
        newWorkspace={newWorkspace}
        setNewWorkspace={setNewWorkspace}
        //
        displayModals={displayModals}
        setDisplayModals={setDisplayModals}
      />
      <DisplayColorModal
        newWorkspace={newWorkspace}
        setNewWorkspace={setNewWorkspace}
        //
        displayModals={displayModals}
        setDisplayModals={setDisplayModals}
      />
      <DisplayWorkspaceDataModal
        newWorkspace={newWorkspace}
        //
        displayModals={displayModals}
        setDisplayModals={setDisplayModals}
        addWorkspaceHandler={addNewWorkspace}
      />
    </>
  );
};

export default BoardLayout;
