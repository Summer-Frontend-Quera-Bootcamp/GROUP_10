import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Filter } from "./Filter";

interface Props {
  onClose: (values: string[]) => void;
}

const FilterModal = ({ onClose }: Props) => {
  const options = ["تاریخ", "تگ", "اعضا", "اولویت"];
  const optionList = ["درس", "کار", "پروژه"];
  const [filters, setfilters] = useState<number[]>([]);
  const [isOpen, setOpen] = useState(true);
  const [chosen, setChosen] = useState<string[]>([]);

  const handleClose = () => {
    setOpen(false);
    onClose(chosen);
  };
  const handleAdd = () => {
    if (filters.length < options.length) {
      const newElement = filters.length;
      setfilters([...filters, newElement]);
    }
  };

  const handleDelete = (id: number) => {
    setfilters(filters.filter((val) => val !== id));
  };

  const handleChange = (choice: string) => {
    setChosen([...chosen, choice]);
  };

  return (
    <>
      {isOpen && (
        <div className="bg-white w-[718px] min-h-[206px]  rounded-lg shadow-md pt-2 pb-4 flex flex-col gap-s mx-auto mt-[130px]">
          <div className="flex flex-row-reverse justify-between items-center w-[673px] ml-[24px]">
            <h1 className="font-extrabold text-2xl ">فیلترها</h1>
            <button onClick={handleClose}>
              <AiOutlineClose />
            </button>
          </div>

          {filters.map((index) => (
            <Filter
              key={index}
              id={index}
              d1Values={options}
              d2Values={optionList}
              onDelete={handleDelete}
              onChange={handleChange}
            />
          ))}

          <div className="flex flex-row-reverse justify-start w-[673px] ml-[24px]">
            <button
              className=" cursor-pointer text-brand-primary font-bold active:text-gray-primary"
              onClick={handleAdd}
            >
              افزودن فیلتر جدید
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterModal;
