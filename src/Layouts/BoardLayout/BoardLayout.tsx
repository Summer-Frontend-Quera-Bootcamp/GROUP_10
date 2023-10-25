import { PropsWithChildren } from "react";
import SideBarSection from "../../Components/Ui/SideBar/SideBarSection/SideBarSection";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/Ui/NavBar";

interface IBoardLayout extends PropsWithChildren {}
const BoardLayout: React.FC<IBoardLayout> = (): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname);
  ///boards/calendarView
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-rows-6  gap-s pt-l ps-xl h-screen me-s">
          {/* Navbar */}
          <NavBar />
          {/* Childrens */}
          <div
            className={`w-full h-full gap-[10px] ${
              pathname === "/boards/calendarView" && "mt-4"
            }  `}
          >
            <Outlet />
          </div>
        </div>
        {/* SideBar Section */}
        <div>
          <SideBarSection />
        </div>
      </div>
    </>
  );
};

export default BoardLayout;
