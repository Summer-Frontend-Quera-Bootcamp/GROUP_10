import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface IInputTextProps {
  label: string;
  name: string;
  type?: "email" | "password" | "text";
  placeHolder?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
  onChange?: () => void;
}

export const InputText = ({
  label,
  type = "text",
  placeHolder,
  name,
  value,
  options,
  register,
}: IInputTextProps) => {
  return (
    <div className="flex flex-col text-right">
      <label className="text-right" htmlFor={name}></label>
      {label}
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeHolder}
        className="border border-gray-primary rounded-md p-xs my-xs w-full"
        {...(register !== undefined && { ...register(name, options) })}
      />
    </div>
  );
};
