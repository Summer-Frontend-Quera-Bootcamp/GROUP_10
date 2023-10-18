import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

interface DropDownListProps {
  width: string;
  tsize?: string;
  options: string[];
  onChange: (option: string) => void;
  containsSearch: boolean;
}

function DropDownList({
  width,
  options,
  onChange,
  tsize = "text-[14px]",
  containsSearch,
}: DropDownListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [filterdOptions, setFilteredOptions] = useState(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleSearch = (sValue: string) => {
    const newOptions = options.filter(
      (option) => option.substring(0, sValue.length) === sValue
    );
    setFilteredOptions(newOptions);
  };
  return (
    <div className={"relative inline-block " + width}>
      <div
        className="flex flex-row-reverse justify-between py-[4px] px-[8px] border rounded-[6px] min-h-[30px]"
        onClick={toggleDropdown}
      >
        <span
          className={`${tsize} + ${
            selectedOption ? "text-black" : "text-gray-primary"
          }`}
        >
          {selectedOption || "انتخاب کنید"}
        </span>

        <IoIosArrowDown />
      </div>

      {isOpen && (
        <div className="fixed border-x">
          {containsSearch && (
            <div
              className={
                "border-x flex flex-row-reverse gap-x-xs items-center bg-white z-10 pr-[8px] " +
                width
              }
            >
              <BsSearch className="text-blue-primary" />
              <input
                type="text"
                placeholder="جستجو"
                className="text-xs text-right w-[110px]"
                onChange={(e) => {
                  handleSearch(e.currentTarget.value);
                }}
              ></input>
            </div>
          )}
          <ul className={"border border-t-0 rounded-lg bg-white z-10 " + width}>
            {filterdOptions.map((option) => (
              <li
                key={option}
                onClick={() => selectOption(option)}
                className="px-4 py-2 cursor-pointer bg-white hover:bg-blue-100 text-right text-[14px]"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownList;
