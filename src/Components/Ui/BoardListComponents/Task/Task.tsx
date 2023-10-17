import { FiFlag } from "react-icons/fi";
import { ImParagraphRight } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";

const Task = ({ taskColor, taskText }) => {
  return (
    <div className="flex flex-row-reverse my-s pe-1 justify-between py-xs">
      {/* right side */}
      <div className="flex gap-xs flex-row-reverse items-center mr-m">
        <label className={`w-4 h-4 bg-${taskColor}-primary rounded-sm`}></label>
        <p>{taskText}</p>
      </div>
      {/* left side */}
      <div className="flex gap-14 font-bold flex-row-reverse">
        <div className="px-3.5 w-20 flex justify-center items-center text-2xl">
          <span>
            <FaCircleUser />
          </span>
          <span>
            <FaCircleUser />
          </span>
        </div>
        <div className="px-3.5 w-20 flex text-body-sm font-normal justify-center items-center">
          6آبان
        </div>
        <div className="px-3.5 w-20 flex text-xl justify-center text-red-primary items-center">
          <FiFlag />
        </div>
        <div className="px-3.5 w-20 flex  justify-center items-center text-gray-primary">
          <ImParagraphRight />
        </div>
      </div>
    </div>
  );
};

export default Task;
