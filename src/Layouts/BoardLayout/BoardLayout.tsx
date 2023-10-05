import { PropsWithChildren } from "react";
import SideBarSection from "../../Components/Ui/SideBar/SideBarSection/SideBarSection";

interface IBoardLayout extends PropsWithChildren {}
const BoardLayout: React.FC<IBoardLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 grid-rows-2 pt-xl ps-xl h-screen">
          <div>navbar</div>
          {/* BoardView */}
          <div>{children}</div>
        </div>
        {/* SideBar Section */}
        <SideBarSection />
      </div>
    </>
  );
};

export default BoardLayout;
