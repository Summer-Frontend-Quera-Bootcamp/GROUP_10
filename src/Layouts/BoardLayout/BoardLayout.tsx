import { PropsWithChildren } from "react";
import SideBarSection from "../../Components/Ui/SideBar/SideBarSection/SideBarSection";

interface IBoardLayout extends PropsWithChildren {}
const BoardLayout: React.FC<IBoardLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-rows-6 gap-s pt-xl ps-xl h-screen me-s">
          <div className="row-span-1 bg-red-500">navbar</div>
          <div>
            {/* BoardView */}
            {/* BoardList */}
            {/* CalendarView */}
            {children}
          </div>
        </div>
        {/* SideBar Section */}
        <SideBarSection />
      </div>
    </>
  );
};

export default BoardLayout;
