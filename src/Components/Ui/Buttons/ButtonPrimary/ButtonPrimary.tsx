interface IButtonPrimary {
  children: string;
  type?: "submit" | "reset" | "button";
  bigger?: boolean;
  onClick: () => void;
}
export const ButtonPrimary = ({
  children,
  type = "button",
  bigger,
  onClick,
}: IButtonPrimary) => {
  return (
    <button
      className={`${
        bigger && "w-full"
      } bg-brand-primary text-white px-m py-xs rounded-md border-0 duration-300 cursor-pointer active:bg-gray-primary `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
