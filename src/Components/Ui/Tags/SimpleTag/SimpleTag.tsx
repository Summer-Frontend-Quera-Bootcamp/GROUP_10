interface ISimpleTagProps {
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
export const SimpleTag = ({ title, color }: ISimpleTagProps) => {
  return (
    <span
      className={`
  ${color === "red" && "bg-red-secondary text-red-primary"}
  ${color === "pink" && "bg-pink-secondary text-pink-primary"}
  ${color === "grape" && "bg-grape-secondary text-grape-primary"}
  ${color === "violet" && "bg-violet-secondary text-violet-primary"}
  ${color === "indigo" && "bg-indigo-secondary text-indigo-primary"}
  ${color === "blue" && "bg-blue-secondary text-blue-primary"}
  ${color === "cyan" && "bg-cyan-secondary text-cyan-primary"}
  ${color === "teal" && "bg-teal-secondary text-teal-primary"}
  ${color === "brand" && "bg-brand-secondary text-brand-primary"}
  ${color === "green" && "bg-green-secondary text-green-primary"}
  ${color === "lime" && "bg-lime-secondary text-lime-primary"}
  ${color === "orange" && "bg-orange-secondary text-orange-primary"} 
  rounded-full`}
    >
      {title}
    </span>
  );
};
