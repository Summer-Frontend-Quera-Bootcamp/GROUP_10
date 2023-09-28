import { FiFlag } from "react-icons/fi";
import { GrTextAlignRight } from "react-icons/gr";
import { CgCheckR } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiMoreAlt } from "react-icons/tfi";

import { SimpleTag } from "../../Tags/SimpleTag/SimpleTag";

interface Itags {
  title: string;
  color:
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "brand"
    | "green"
    | "yellow"
    | "lime"
    | "orange";
}

interface ItaskStatus {
  allTasks: number;
  tasksDone: number;
}

interface IContainerColTaskProps {
  image?: string;
  listName: string;
  members?: string[];
  taskTitle: string;
  priority?: "important" | "high" | "mid" | "low";
  date: string;
  taskStatus: ItaskStatus;
  tags: Itags[];
  onMore: () => void;
  onCheck: () => void;
}
export const ContainerColTask = ({
  image,
  listName,
  members,
  taskTitle,
  priority,
  date,
  taskStatus,
  tags,
  onMore,
  onCheck,
}: IContainerColTaskProps) => {
  return (
    <div className="flex w-full bg-gray-secondary rounded-[16px] pb-[4px] shadow-xl">
      <div className="group flex flex-col w-full p-s rounded-[16px] shadow-xl bg-white justify-between ">
        {image && (
          <img src={image} className="rounded-md h-[135px] object-cover"></img>
        )}
        <div>
          {members && members.map((member: string) => <h2>{member}</h2>)}
          <p className="text-right text-gray-primary py-xs">{listName}</p>
        </div>
        <div className="flex overflow-hidden flex-row-reverse flex-wrap items-center gap-xs">
          <p className="text-right pm-xs"> {taskTitle}</p>
          <GrTextAlignRight className="text-gray-primary " />
        </div>
        <div className="flex flex-row-reverse my-xs">
          {priority === "important" && (
            <span className="text-red-primary">
              <FiFlag size="20" />
            </span>
          )}
          {priority === "high" && (
            <span className="text-yellow-primary">
              <FiFlag size="20" />
            </span>
          )}
          {priority === "mid" && (
            <span className="text-blue-primary">
              <FiFlag size="20" />
            </span>
          )}
          {priority === "low" && (
            <span className="text-lime-primary">
              <FiFlag size="20" />
            </span>
          )}
          <p className="font-bold px-xs">{date}</p>
          <div className="text-gray-primary flex gap-xs items-center px-xs">
            {`${taskStatus.tasksDone} / ${taskStatus.allTasks}`}
            <CgCheckR />
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap">
          {tags &&
            tags.map((tag: Itags) => (
              <SimpleTag title={tag.title} color={tag.color} key={tag.title} />
            ))}
        </div>
        <div className="group-hover:block hidden pt-s">
          <hr className="text-gray-primary pb-s" />
          <div className="flex justify-between items-center">
            <TfiMoreAlt
              className="mt-[5px] ml-[2px] cursor-pointer"
              onClick={onMore}
            />
            <IoMdCheckmarkCircleOutline
              className="cursor-pointer"
              size="22"
              onClick={onCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
