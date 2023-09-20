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
  const btnSize = bigger ? "w-full" : "";
  return (
    <button
      className={
        " bg-brand-primary text-white px-l py-xs rounded-md border-0 duration-300 cursor-pointer active:bg-gray-primary " +
        btnSize
      }
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};