import { useState } from "react";
//import { PiCaretCircleDownBold } from "react-icons/pi";
//import { FaUserCircle } from "react-icons/fa";
//import { BsFlag } from "react-icons/bs";
//import { IoMdList } from "react-icons/io";
//import { PropsWithChildren } from "react";
import { PiCaretCircleDownBold } from "react-icons/pi";
interface BoardListComponents {
  Heading: {
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
    state: string;
  };
  Tasks: ITask[];
}
interface ITask {
  id: number;
  title: string;
  members: string[];
  deadline: string;
  priority: number;
  description: string;
}
const BoardListComponents = ({
  Heading: { color, state },
  Tasks,
}: BoardListComponents) => {
  //const [T] = useState<ITask[]>();
  const [toggle, setToggle] = useState<boolean>(false);
  //const [projectToggle, seTprojectToggle] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 ">
      {/* Header */}
      <div className="grid grid-cols-2 items-center">
        <div className="grid grid-cols-4 items-center text-center font-iranyekan text-base font-medium leading-28 tracking-normal text-right">
          <span className="mr-xl">توضیحات</span>
          <span className="mr-xl">اولویت</span>
          <span className="mr-xl">ددلاین</span>
          <span className="mr-xl">اعضا</span>
        </div>
        <div className="flex items-center justify-center w-[37]  h-[21] font-iranyekan text-xs font-normal leading-5 tracking-normal text-right ">
          <span className="text-center pr-s">{Tasks.length}تسک</span>
          <button
            className={`
    ${color === "red" && "bg-red-primary text-red-secondary "}
    ${
      color === "pink" &&
      "bg-pink-primary text-pink-secondary text-base px-1.5 py-2 rounded font-medium text-center"
    } 
    ${color === "grape" && "bg-grape-primary text-grape-secondary"}
    ${color === "violet" && "bg-violet-primary text-violet-secondary"}
    ${color === "indigo" && "bg-indigo-primary text-indigo-secondary"}
    ${color === "blue" && "bg-blue-primary text-blue-secondary"}
    ${color === "cyan" && "bg-cyan-primary text-cyan-secondary"}
    ${color === "teal" && "bg-teal-primary text-teal-secondary"}
    ${color === "yellow" && "bg-yellow-primary text-yellow-secondary"}
    ${color === "brand" && "bg-brand-primary text-brand-secondary"}
    ${
      color === "green" &&
      "bg-green-primary text-green-secondary rounded my-s text-base px-1.5 py-2 font-medium text-center "
    }
    ${color === "lime" && "bg-lime-primary text-lime-secondary"}
    ${
      color === "orange" &&
      "bg-orange-primary text-orange-secondary gap-2.5 rounded text-base px-1.5 py-2 my-s font-medium text-center"
    } 
    `}
          >
            {state}
          </button>

          <div>
            <div
              className={`text-xl transition duration-300 ms-1 ${
                toggle ? "rotate-0" : "rotate-90"
              }`}
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <PiCaretCircleDownBold />
            </div>
          </div>
        </div>
      </div>
      {/* Body */}

      {/* {allTask.map((task) => console.log(task))} */}

      <div
        className={`transition dration-300 ${
          toggle ? "visible opacity-100 h-auto" : "invisible opacity-0 h-0"
        }`}
      >
        {Tasks.map((task) => (
          <div key={task.id}>
            <div className="grid grid-cols-2 items-center mt-10 ">
              {/* right side */}
              <div className="grid grid-cols-4 items-center text-center ">
                <div className="mr-xl text-center flex flex-col w-[32] h-[28] font-iranyekan text-base font-medium leading-7 tracking-normal text-right">
                  {task.members.map((member) => (
                    <span key={member}>{member}</span>
                  ))}
                </div>
                <div className="mr-xl text-center w-[45] h-[28] font-iranyekan text-base font-medium leading-[28px] tracking-normal text-right">
                  {task.deadline}
                </div>
                <div className="mr-xl text-center w-[48] h-[28] font-iranyekan text-base font-medium leading-[28px] tracking-tight text-right">
                  {/* <BsFlag /> */}
                  {task.priority}
                </div>
                <div className="mr-xl text-center w-[66] h-[28] font-iranyekan text-base font-medium leading-[28px] tracking-tight text-right">
                  {task.description}
                </div>
              </div>
              {/* left side */}
              <div className="flex items-center justify-center ">
                <p>{task.title}</p>
                <label
                  className={`rounded w-4 h-4 ${
                    color === "red" && "bg-red-primary text-red-secondary"
                  }
    ${color === "pink" && "bg-pink-primary "}
    ${color === "grape" && "bg-grape-primary "}
    ${color === "violet" && "bg-violet-primary "}
    ${color === "indigo" && "bg-indigo-primary "}
    ${color === "blue" && "bg-blue-primary "}
    ${color === "cyan" && "bg-cyan-primary "}
    ${color === "teal" && "bg-teal-primary "}
    ${color === "yellow" && "bg-yellow-primary "}
    ${color === "brand" && "bg-brand-primary "}
    ${color === "green" && "bg-green-primary "}
    ${color === "lime" && "bg-lime-primary "}
    ${color === "orange" && "bg-orange-primary "}  ml-xs`}
                ></label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardListComponents;
