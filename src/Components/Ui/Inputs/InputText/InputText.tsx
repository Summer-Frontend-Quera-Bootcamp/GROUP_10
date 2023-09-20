interface IInputTextProps {
  label: string;
  value?: string;
  type?: "email" | "password" | "text";
  placeHolder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  label,
  value,
  type = "text",
  placeHolder,
  onChange,
}: IInputTextProps) => {
  return (
    <div className="flex flex-col text-right">
      <label className="text-right" htmlFor={label}></label>
      {label}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className="border border-gray-primary rounded-md p-xs my-xs w-full"
      />
    </div>
  );
};
