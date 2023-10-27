import { TbUserEdit } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
// import { ButtonIcon } from "../../Buttons";
import { ButtonIcon } from "../../../../Components/Ui/Buttons";
import "./index.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ProjectTitle from "../../../../Components/Ui/Titles/ProjectTitle/ProjectTitle";
const SideBarUi = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="grid grid-cols-5">
      <div className="grid col-span-4 mt-24 justify-end grid-rows-6 gap-s pt-l ps-xl h-screen me-l">
        <Outlet />
      </div>
      <div className="h-screen overflow-hidden flex pt-8 items-end flex-col pe-10 border-s-2 ps-s border-gray-300">
        <ProjectTitle />
        <div className="mt-20">
          <NavLink to="/boards/columnView">
            <ButtonIcon useCase="back" onClick={() => {}} bigger={false} />
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink
            to="account-user"
            className={({ isActive }) =>
              isActive ? " bg-brand-secondary font-extrabold" : ""
            }
          >
            <div
              className={`flex items-center mb-3 hover:bg-brand-secondary text-lg justify-end w-full rounded-s p-1 cursor-pointer mt-7 ${
                pathname === "/profile" && "bg-brand-secondary font-extrabold"
              } `}
            >
              اطلاعات فردی
              <div className="ms-1">
                <TbUserEdit />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive ? " bg-brand-secondary font-extrabold" : ""
            }
            to="account-info"
          >
            <div
              className={`flex items-center mb-3 hover:bg-brand-secondary text-lg justify-end w-full rounded-s p-1 cursor-pointer mt-3 `}
            >
              اطلاعات حساب
              <div className="ms-1">
                <TbUserCheck />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive ? " bg-brand-secondary font-extrabold" : ""
            }
            to="account-setting"
          >
            <div
              className={`flex items-center mb-3 hover:bg-brand-secondary text-lg justify-end w-full rounded-s p-1 cursor-pointer mt-3`}
            >
              تنظیمات
              <div className="ms-1">
                <TbSettings />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBarUi;
