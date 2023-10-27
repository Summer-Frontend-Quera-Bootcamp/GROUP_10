import { LuPlusSquare } from "react-icons/lu";
interface IButtonNewTask {
  onClick: () => void;
}
export const ButtonNewTask = ({ onClick }: IButtonNewTask) => {
  return (
    <button
      className={
        "w-full border-[2px] border-solid border-brand-primary text-brand-primary font-extrabold px-m py-[5px] rounded-md  duration-300 cursor-pointer hover:bg-gray-secondary flex flex-row items-center justify-center gap-1"
      }
      onClick={onClick}>
      ساختن تسک جدید
      <LuPlusSquare size="25" />
    </button>
  );
};
