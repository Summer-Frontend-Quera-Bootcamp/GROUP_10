import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Filter } from "./Filter";

interface Props {
  onClose: (attributes: string[]) => void;
}

const FilterModal = ({ onClose }: Props) => {
  const options = ["تاریخ", "تگ", "اعضا", "اولویت"];
  const optionList = ["درس", "کار", "پروژه"];
  const [elements, setElements] = useState<number[]>([]);
  const [isOpen, setOpen] = useState(true);
  const [chosen, setChosen] = useState<string[]>([]);

  const handleClose = () => {
    setOpen(false);
    onClose(chosen);
  };
  const handleAdd = () => {
    if (elements.length < options.length) {
      const newElement = elements.length;
      setElements([...elements, newElement]);
    }
  };

  const handleDelete = (id: number) => {
    setElements(elements.filter((val) => val !== id));
  };

  const handleChange = (choice: string) => {
    setChosen([...chosen, choice]);
  };

  return (
    <>
      {isOpen && (
        <div className="bg-white w-[718px] min-h-[206px] rounded-lg shadow-md pt-2 pb-4 flex flex-col gap-s ml-[232px] mt-[190px] fixed backdrop-grayscale">
          <div className="flex flex-row-reverse justify-between items-center w-[673px] ml-[24px]">
            <h1 className="font-extrabold text-2xl ">فیلترها</h1>
            <button onClick={handleClose}>
              <AiOutlineClose />
            </button>
          </div>

          {elements.map((index) => (
            <Filter
              id={index}
              attributes={options}
              attributeOptions={optionList}
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
