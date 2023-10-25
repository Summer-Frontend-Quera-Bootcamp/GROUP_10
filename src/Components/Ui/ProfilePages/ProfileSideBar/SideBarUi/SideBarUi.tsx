import { useState } from "react";
import { TbUserEdit } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
// import { ButtonIcon } from "../../Buttons";
import { ButtonIcon } from "../../../Buttons";
import "./index.css";
import { NavLink, Outlet } from "react-router-dom";
import ProjectTitle from "../../../Titles/ProjectTitle/ProjectTitle";
const SideBarUi = () => {
  const [clickedDiv, setClickedDiv] = useState<number>(0);
  const handleClick = (DivID: number) => {
    setClickedDiv(DivID);
  };

  return (
    <div className="flex flex-row-reverse p-10">
      <div className="flex flex-col items-end">
        <ProjectTitle />
        <div className="mt-16">
          <NavLink to="/boards/columnView">
            <ButtonIcon useCase="back" onClick={() => {}} bigger={false} />
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink to="account-user">
            <div
              className={`flex items-center mb-3 hover:bg-brand-secondary justify-end w-full rounded-s p-1 cursor-pointer mt-7 ${
                clickedDiv === 1 && "bg-brand-secondary font-extrabold"
              }`}
              onClick={() => {
                setClickedDiv(1);
              }}
            >
              اطلاعات فردی
              <div className="ms-1">
                <TbUserEdit />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink to="account-info">
            <div
              className={`flex items-center mb-3 hover:bg-brand-secondary justify-end w-full rounded-s p-1 cursor-pointer mt-3 ${
                clickedDiv === 2 && "bg-brand-secondary font-extrabold"
              }`}
              onClick={() => handleClick(2)}
            >
              اطلاعات حساب
              <div className="ms-1">
                <TbUserCheck />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink to="account-setting">
            <div
              className={`flex items-center mb-3 hover:bg-brand-secondary justify-end w-full rounded-s p-1 cursor-pointer mt-3 ${
                clickedDiv === 3 && "bg-brand-secondary font-extrabold"
              }`}
              onClick={() => handleClick(3)}
            >
              تنظیمات
              <div className="ms-1">
                <TbSettings />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="mr-44 mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBarUi;
