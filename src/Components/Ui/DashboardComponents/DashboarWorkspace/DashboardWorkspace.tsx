import { PropsWithChildren } from "react";
import DashboardButton from "../DashboardButton/DashboardButton";

interface IDashboardWorkspace extends PropsWithChildren {
  workspaceName: string;
  workspaceColor: string;
  projects: projectType[];
}
type projectType = {
  id: number;
  projectName: string;
  icon: boolean;
};
const DashboardWorkspace: React.FC<IDashboardWorkspace> = ({
  workspaceName,
  projects,
  workspaceColor,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-end gap-m border-bottom border-slate-200">
      <h2 className="font-extrabold text-gray-darker text-xl">
        {workspaceName}
      </h2>
      <div className="flex-row-reverse flex flex-wrap gap-m border-bottom border-b-2 w-full pb-m">
        {projects.map((project) => (
          <DashboardButton
            key={project.id}
            projectName={project.projectName}
            icon={project.icon}
            classes={`rounded-2xl bg-gradient-to-r from-${workspaceColor} via-${workspaceColor} to-${workspaceColor} bg-opacity-50 shadow-sm w-44 h-16 bg-red-500`}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardWorkspace;
