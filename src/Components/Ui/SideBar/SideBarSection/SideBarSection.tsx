import { useState } from "react";
import DisplayNameModal from "../Workspace/WorkspaceNameModal/DisplayNameModal";
import DisplayColorModal from "../Workspace/WorkspaceColorModal/DisplayColorModal";
import DisplayWorkspaceDataModal from "../Workspace/WorkspaceDataModal/DisplayworkspaceDataModal";
import SiderBarMenu from "../SideBarMenu/SideBarMenu";
import { IModalsStatus, INewWorkspace } from "../Interface";

const SideBarSection = () => {
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

  return (
    <>
      <SiderBarMenu
        workspaceData={workspaceData}
        setWorkspaceData={setWorkspaceData}
        filteredWorkspace={filteredWorkspace}
        setFilteredWorkspace={setFilteredWorkspace}
        //
        setDisplayModals={setDisplayModals}
      />
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
        setNewWorkspace={setNewWorkspace}
        //
        displayModals={displayModals}
        setDisplayModals={setDisplayModals}
        addWorkspaceHandler={addNewWorkspace}
      />
    </>
  );
};

export default SideBarSection;
