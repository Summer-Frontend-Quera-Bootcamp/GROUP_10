import { RiDeleteBin6Line } from "react-icons/ri";

export interface IFilter {
  id: number;
  attributes: string[];
  attributeOptions: string[];
  onDelete: (id: number) => void;
  onChange: (choice: string) => void;
}

export const Filter = ({
  id,
  attributes,
  attributeOptions,
  onDelete,
  onChange,
}: IFilter) => {
  const isOrNot = ["است", "نیست"];

  return (
    <div className="w-[673px] ml-[24px] flex flex-row-reverse items-center gap-xs">
      <p>تسک هایی که </p>
      <select
        className="w-[182px] border rounded bg-inherit text-right"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option key={0} disabled hidden selected className="text-gray-400">
          انتخاب کنید
        </option>
        {attributes.map((choice, index) => (
          <option key={index + 1} value={choice} className="text-right">
            {choice}
          </option>
        ))}
      </select>
      <p>آنها</p>
      <select className="w-[146px] border rounded bg-inherit text-right">
        <option key={0} disabled hidden selected>
          انتخاب کنید
        </option>
        {attributeOptions.map((choice, index) => (
          <option key={index + 1} value={index} className="text-right">
            {choice}
          </option>
        ))}
      </select>
      <select className="w-[107px] border rounded bg-inherit text-right">
        <option key={0} disabled hidden selected>
          انتخاب کنید
        </option>
        {isOrNot.map((choice, index) => (
          <option key={index + 1} value={index} className="text-right">
            {choice}
          </option>
        ))}
      </select>
      <button className="mr-auto text-red-primary" onClick={() => onDelete(id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};
