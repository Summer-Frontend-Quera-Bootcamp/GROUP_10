import { PropsWithChildren, Dispatch, SetStateAction } from "react";
// add new workspace Interface
export interface INewWorkspace {
  id: number;
  name: string;
  color: string;
  members: string[];
}
export interface IWorkspaceData extends INewWorkspace {
  projects?: [];
}
// workspaceModals status Interface
export interface IModalsStatus {
  nameModal: boolean;
  colorModal: boolean;
  dataModal: boolean;
  projectModal: boolean;
}
// SiderBar Component Interface
export interface ISiderBarMenu extends PropsWithChildren {
  workspaceData: IWorkspaceData[];
  filteredWorkspace: IWorkspaceData[];
  setFilteredWorkspace: Dispatch<SetStateAction<IWorkspaceData[]>>;
  setWorkspaceData: Dispatch<SetStateAction<IWorkspaceData[]>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
// DisplayColorModal Component Interface
export interface IDisplayColorModal extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
// DisplayNameModal Component Interface
export interface IDisplayNameModal extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
// DisplayWorkspaceDataModal Component Interface
export interface IDisplayWorkspaceDataModalProps extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  addWorkspaceHandler: () => void;
}
export interface IDisplayProjectModal extends PropsWithChildren {
  displayModals: IModalsStatus;
  workspaceData: IWorkspaceData[];
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  setWorkspaceData: Dispatch<SetStateAction<IWorkspaceData[]>>;
}
// select workspaceColor Component Interface
export interface IRenderSelectButtonColor extends PropsWithChildren {
  data: INewWorkspace;
  setData: Dispatch<SetStateAction<INewWorkspace>>;
}

// Interface for every Workspace button in sidebar

export interface IWorkspace extends PropsWithChildren {
  workspace: INewWorkspace;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
}
