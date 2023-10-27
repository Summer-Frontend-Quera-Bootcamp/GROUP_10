import { PropsWithChildren } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { NavLink } from "react-router-dom";

interface IDashboardButton extends PropsWithChildren {
  classes: string;
  icon?: boolean;
  projectName: string;
  color: string;
}
const DashboardButton: React.FC<IDashboardButton> = ({
  classes,
  icon,
  projectName,
  color,
}) => {
  return !icon ? (
    <NavLink to="/boards/columnView">
      <button
        className={classes}
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0) 10%, ${color} 80%)`,
        }}
      >
        <p className="font-extrabold">{projectName}</p>
      </button>
    </NavLink>
  ) : (
    <button className="text-red-primary shadow-sm w-48 h-20">
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
