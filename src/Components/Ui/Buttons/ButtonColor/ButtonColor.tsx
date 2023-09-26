interface IButtonColor {
  children: string;
  onClick: () => void;
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

export const ButtonColor = ({ children, onClick, color }: IButtonColor) => {
  return (
    <button
      className={`
    ${color === "red" && "bg-red-primary text-red-secondary"}
    ${color === "pink" && "bg-pink-primary text-pink-secondary"}
    ${color === "grape" && "bg-grape-primary text-grape-secondary"}
    ${color === "violet" && "bg-violet-primary text-violet-secondary"}
    ${color === "indigo" && "bg-indigo-primary text-indigo-secondary"}
    ${color === "blue" && "bg-blue-primary text-blue-secondary"}
    ${color === "cyan" && "bg-cyan-primary text-cyan-secondary"}
    ${color === "teal" && "bg-teal-primary text-teal-secondary"}
    ${color === "brand" && "bg-brand-primary text-brand-secondary"}
    ${color === "green" && "bg-green-primary text-green-secondary"}
    ${color === "lime" && "bg-lime-primary text-lime-secondary"}
    ${color === "orange" && "bg-orange-primary text-orange-secondary"} 
    rounded text-lg px-xs py-[4px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
