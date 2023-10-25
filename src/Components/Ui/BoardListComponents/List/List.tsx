import { PiCaretCircleDown } from "react-icons/pi";
import Task from "../Task/Task";
import { PropsWithChildren, useState } from "react";

interface IList extends PropsWithChildren {
  listStatus: string;
  listColor: string;
}
const List: React.FC<IList> = ({ listStatus, listColor }) => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col transition-all ${!showList ? "h-0" : "h-full"}`}
    >
      <div className="flex flex-row-reverse justify-between">
        {/* right side */}
        <div className="flex gap-xs flex-row-reverse items-center">
          <button
            className={`text-xl transition-all duration-300 ${
              !showList ? "" : "rotate-180"
            }`}
            onClick={() => setShowList((prevState) => !prevState)}
          >
            <PiCaretCircleDown />
          </button>
          <label
            className={`py-1.5 px-2 bg-${listColor}-primary rounded text-white`}
          >
            {listStatus}
          </label>
          <p>تسک 2</p>
        </div>
        {/* left side */}
        <div className="flex items-center">
          <ul className="flex gap-14 font-bold flex-row-reverse items-center">
            <li className="w-20 flex justify-center items-center">اعضا</li>
            <li className="w-20 flex justify-center items-center">ددلاین</li>
            <li className="w-20 flex justify-center items-center">اولویت</li>
            <li className="w-20 flex justify-center items-center">توضیحات</li>
          </ul>
        </div>
      </div>
      {/* tasks */}
      <div
        className={`flex flex-col transition-all duration-300 ${
          showList ? "visible opacity-100 " : "invisible opacity-0"
        }`}
      >
        {/* task */}
        <Task taskColor={listColor} taskText="test task ......" />
        {/* task */}
        <Task taskColor={listColor} taskText="tst2 task 2.3.2.32" />
      </div>
    </div>
  );
};

export default List;
