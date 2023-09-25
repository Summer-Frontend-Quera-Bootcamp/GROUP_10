import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface IInputInviteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
  onClick: () => void;
  onChange?: () => void;
}

export const InputInvite = ({
  options,
  onChange,
  register,
  onClick,
}: IInputInviteProps) => {
  return (
    <div className="flex flex-row w-full items-center">
      <button
        type="submit"
        onClick={onClick}
        className="bg-brand-primary w-1/4 h-[40px] rounded-tl-md rounded-bl-md text-white duration-200 active:bg-gray-primary"
      >
        ارسال
      </button>
      <input
        id="emailInvite"
        type="email"
        onChange={onChange}
        placeholder=" دعوت با ایمیل "
        className="bg-gray-secondary rounded-tr-md rounded-br-md p-xs my-xs w-full h-[40px] text-right"
        {...(register !== undefined && { ...register("emailInvite", options) })}
      ></input>
    </div>
  );
};
