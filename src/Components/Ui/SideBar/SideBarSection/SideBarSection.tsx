import { useState } from "react";
import DisplayNameModal from "../WorkspaceModals/WorkspaceNameModal/DisplayNameModal";
import DisplayColorModal from "../WorkspaceModals/WorkspaceColorModal/DisplayColorModal";
import DisplayWorkspaceDataModal from "../WorkspaceModals/WorkspaceDataModal/DisplayworkspaceDataModal";
import DisplayProjectModal from "../WorkspaceModals/WorkspaceProjectModal/WorkspaceProjectModal";
import SiderBarMenu from "../SideBarMenu/SideBarMenu";
import { IModalsStatus, INewWorkspace } from "../Interface";

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
        filteredWorkspace={filteredWorkspace}
        setWorkspaceData={setWorkspaceData}
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
      <DisplayProjectModal
        setWorkspaceData={setWorkspaceData}
        workspaceData={workspaceData}
        displayModals={displayModals}
        setDisplayModals={setDisplayModals}
      />
    </>
  );
};

export default SideBarSection;
