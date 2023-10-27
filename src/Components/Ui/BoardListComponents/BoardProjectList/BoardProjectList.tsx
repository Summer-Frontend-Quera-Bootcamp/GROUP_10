import { PiCaretCircleDown } from "react-icons/pi";
import List from "../List/List";
import { PropsWithChildren, useState } from "react";
import { NewTask } from "../../NewTask";
import { ButtonIcon } from "../../Buttons";

interface IBoardProjectList extends PropsWithChildren {
  projectName: string;
}
const BoardProjectList: React.FC<IBoardProjectList> = ({ projectName }) => {
  const [newTask, setNewTask] = useState(false);

  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col w-full  my-m items-end transition-all duration-300 ${
        !showList ? "h-0" : "h-max"
      }`}
    >
      {newTask && (
        <>
          <div className="fixed flex justify-center items-center top-[-250px] right-[-300px] w-[130vw] h-[130vh] bg-black opacity-30 z-10" />
          <div className="fixed top-[8%] right-[22%] z-20">
            <NewTask
              onClose={() => {
                setNewTask(false);
              }}
            />
          </div>
        </>
      )}
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
      <div className=" absolute bottom-[50px] left-[50px]">
        <ButtonIcon
          useCase="newTask"
          onClick={() => {
            setNewTask(true);
          }}
        ></ButtonIcon>
      </div>
    </div>
  );
};

export default BoardProjectList;
