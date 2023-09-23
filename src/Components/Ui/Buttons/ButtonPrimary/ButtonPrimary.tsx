interface IButtonPrimary {
  children: string;
  type?: "submit" | "reset" | "button";
  bigger?: boolean;
  onClick: () => void;
  disabled?: boolean;
}
export const ButtonPrimary = ({
  children,
  type = "button",
  bigger,
  onClick,
  disabled,
}: IButtonPrimary) => {
  return (
    <button
      className={`${
        bigger && "w-full"
      } bg-brand-primary text-white px-m py-xs rounded-md border-0 duration-300 cursor-pointer active:bg-gray-primary `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
