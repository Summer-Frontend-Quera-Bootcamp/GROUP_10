import { PiCaretCircleDown } from "react-icons/pi";
import List from "../List/List";
import { useState } from "react";

const BoardProjectList = ({ projectName }) => {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col w-full my-m items-end transition-all duration-300 ${
        !showList ? "h-0" : "h-full"
      }`}
    >
      <div className="flex gap-xs items-center ">
        <h2 className="text-heading-xs font-extrabold">{projectName}</h2>
        <button
          className={`text-2xl transition duration-300 ${
            showList ? "rotate-0" : "rotate-90"
          }`}
          onClick={() => setShowList((prevState) => !prevState)}
        >
          <PiCaretCircleDown />
        </button>
      </div>
      <div
        className={`flex flex-col w-full gap-y-14 px-m mt-l transition-all ease-in-out duration-300 ${
          showList ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* pending */}
        <List listColor="pink" listStatus="Pending" />
        {/* in progress */}
        <List listColor="orange" listStatus="In Progress" />
        {/* Done */}
        <List listColor="green" listStatus="Done" />
      </div>
    </div>
  );
};

export default BoardProjectList;
