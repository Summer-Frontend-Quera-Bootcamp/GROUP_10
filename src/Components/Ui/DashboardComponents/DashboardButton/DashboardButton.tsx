import { PropsWithChildren } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { NavLink } from "react-router-dom";

interface IDashboardButton extends PropsWithChildren {
  classes: string;
  icon?: boolean;
  projectName: string;
}
const DashboardButton: React.FC<IDashboardButton> = ({
  classes,
  icon,
  projectName,
}) => {
  return !icon ? (
    <NavLink to="/boards/columnView">
      <button className={classes}>
        <p className="font-extrabold">{projectName}</p>
      </button>
    </NavLink>
  ) : (
    <button className="text-red-primary shadow-sm w-44 h-16">
      <div className="rounded-2xl w-full h-full bg-gradient-to-r from-red-300 via-red-400 to-red-600 p-1">
        <div className="bg-white rounded-2xl flex h-full w-full items-center justify-center gap-xs">
          <p className="font-extrabold">{projectName}</p>
          <BsPlusSquare />
        </div>
      </div>
    </button>
  );
};

export default DashboardButton;
