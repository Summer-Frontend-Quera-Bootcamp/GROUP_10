import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface IInputTextProps {
  label: string;
  name: string;
  type?: "email" | "password" | "text";
  placeHolder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  options?: RegisterOptions;
}

export const InputText = ({
  label,
  type = "text",
  placeHolder,
  name,
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
        defaultValue=""
        placeholder={placeHolder}
        className="border border-gray-primary rounded-md p-xs my-xs w-full"
        {...register(name, options)}
      />
    </div>
  );
};
