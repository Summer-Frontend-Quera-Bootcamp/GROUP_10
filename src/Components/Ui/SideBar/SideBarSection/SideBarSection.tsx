import { useEffect, useState } from "react";
import DisplayNameModal from "../Workspace/WorkspaceNameModal/DisplayNameModal";
import DisplayColorModal from "../Workspace/WorkspaceColorModal/DisplayColorModal";
import DisplayWorkspaceDataModal from "../Workspace/WorkspaceDataModal/DisplayworkspaceDataModal";
import SiderBarMenu from "../SideBarMenu/SideBarMenu";
import { IModalsStatus, INewWorkspace } from "../Interface";
// import DisplayProjectModal from "../Workspace/WorkspaceProjectModal/DisplayProjectModal";

const SideBarSection = () => {
  const [newWorkspace, setNewWorkspace] = useState<INewWorkspace>({
    id: 0,
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
    projectModal: false,
  });
  // add Workspace
  const addNewWorkspace = () => {
    const workspace = {
      ...newWorkspace,
      id: Date.now(),
    };
    setWorkspaceData((prevState) => [...prevState, workspace]);
    setFilteredWorkspace((prevState) => [...prevState, workspace]);
    setNewWorkspace({ id: 0, name: "", color: "", members: [] });
    setDisplayModals({
      nameModal: false,
      colorModal: false,
      dataModal: false,
      projectModal: false,
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
      {/* <DisplayProjectModal
        setWorkspaceData={setWorkspaceData}
        workspaceData={workspaceData}
        displayModals={displayModals}
        setDisplayModals={setDisplayModals}
      /> */}
    </>
  );
};

export default SideBarSection;
