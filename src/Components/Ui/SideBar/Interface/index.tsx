import { PropsWithChildren, Dispatch, SetStateAction } from "react";
// add new workspace Interface
export interface INewWorkspace {
  name: string;
  color: string;
  members: string[];
}
// workspaceModals status Interface
export interface IModalsStatus {
  nameModal: boolean;
  colorModal: boolean;
  dataModal: boolean;
}
// SiderBar Component Interface
export interface ISiderBarMenu extends PropsWithChildren {
  workspaceData: INewWorkspace[];
  filteredWorkspace: INewWorkspace[];
  setFilteredWorkspace: Dispatch<SetStateAction<INewWorkspace[]>>;
  setWorkspaceData: Dispatch<SetStateAction<INewWorkspace[]>>;
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
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
}
// DisplayWorkspaceDataModal Component Interface
export interface IDisplayWorkspaceDataModalProps extends PropsWithChildren {
  newWorkspace: INewWorkspace;
  displayModals: IModalsStatus;
  setNewWorkspace: Dispatch<SetStateAction<INewWorkspace>>;
  setDisplayModals: Dispatch<SetStateAction<IModalsStatus>>;
  addWorkspaceHandler: () => void;
}
// select workspaceColor Component Interface
export interface IRenderSelectButtonColor extends PropsWithChildren {
  data: INewWorkspace;
  setData: Dispatch<SetStateAction<INewWorkspace>>;
}
