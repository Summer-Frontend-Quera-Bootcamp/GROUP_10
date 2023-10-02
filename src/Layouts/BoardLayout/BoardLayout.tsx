import { PropsWithChildren, useState } from "react";

import DisplayNameModal from "../../Components/Ui/SideBar/WorkspaceModals/WorkspaceNameModal/DisplayNameModal";
import DisplayColorModal from "../../Components/Ui/SideBar/WorkspaceModals/WorkspaceColorModal/DisplayColorModal";
import DisplayWorkspaceDataModal from "../../Components/Ui/SideBar/WorkspaceModals/WorkspaceDataModal/DisplayworkspaceDataModal";
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
interface IBoardLayout extends PropsWithChildren {}
const BoardLayout: React.FC<IBoardLayout> = ({ children }): JSX.Element => {
  const [newWorkspace, setNewWorkspace] = useState<INewWorkspace>({
    name: "",
    color: "",
    members: [],
  });

  const [workspaceData, setWorkspaceData] = useState<INewWorkspace[]>([]);
  const [filteredWorkspace, setFilteredWorkspace] = useState<INewWorkspace[]>(
    []
  );
  const [displayModals, setDisplayModals] = useState<IModalsStatus>({
    nameModal: false,
    colorModal: false,
    dataModal: false,
  });
  // add Workspace
  const addNewWorkspace = () => {
    setWorkspaceData((prevState) => [...prevState, newWorkspace]);
    setFilteredWorkspace((prevState) => [...prevState, newWorkspace]);
    setNewWorkspace({ name: "", color: "", members: [] });
    setDisplayModals({
      nameModal: false,
      colorModal: false,
      dataModal: false,
    });
  };
  //

  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-rows-2 pt-xl ps-xl h-screen">
          <div>navbar</div>
          {/* BoardView */}
          <div>{children}</div>
        </div>
        {/* SideBar Section */}
        <SiderBarSection
          workspaceData={workspaceData}
          setWorkspaceData={setWorkspaceData}
          filteredWorkspace={filteredWorkspace}
          setFilteredWorkspace={setFilteredWorkspace}
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
