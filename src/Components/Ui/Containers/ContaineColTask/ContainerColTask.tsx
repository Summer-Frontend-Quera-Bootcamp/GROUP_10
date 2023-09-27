import { SimpleTag } from "../../Tags/SimpleTag/SimpleTag";

interface tags {
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
    | "lime"
    | "orange";
}

interface IContainerColTaskProps {
  image?: string;
  listName: string;
  members?: string[];
  taskTitle: string;
  priority?: "important" | "high" | "mid" | "low";
  date: string;
  taskStatus: {
    allTasks: number;
    tasksDone: number;
  };
  tags: tags[];
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
}: IContainerColTaskProps) => {
  return (
    <div>
      {image && <image href={image}></image>}
      <div>
        {members && members.map((member: string) => <h2>{member}</h2>)}
        <p>{listName}</p>
      </div>
      <p>{taskTitle}</p>
      <div>
        {priority === "important" && <span></span>}
        {priority === "high" && <span></span>}
        {priority === "mid" && <span></span>}
        {priority === "low" && <span></span>}
        <p>{date}</p>
        <div>
          {taskStatus.tasksDone} / {taskStatus.allTasks}
        </div>
        {tags &&
          tags.map((tag: tags) => (
            <SimpleTag title={tag.title} color={tag.color} />
          ))}
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};
