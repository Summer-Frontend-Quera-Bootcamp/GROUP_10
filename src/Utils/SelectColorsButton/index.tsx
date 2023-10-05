import { CiNoWaitingSign } from "react-icons/ci";
import { MouseEvent } from "react";
import { IRenderSelectButtonColor } from "../../Components/Ui/SideBar/Interface";

const RenderSelectButtonColor: React.FC<IRenderSelectButtonColor> = ({
  data,
  setData,
}) => {
  const selectColorHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.dataset.color;
    setData((prevData) => ({
      ...prevData,
      color: target ? target : "default",
    }));
    // console.log(data);
  };

  const buttonsColor: string[] = [
    "default",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "brand",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "pink",
    "grape",
    "violet",
  ];

  return (
    buttonsColor &&
    buttonsColor.map((color) => (
      <button
        key={color}
        data-color={color}
        onClick={selectColorHandler}
        className={`w-5 h-5 mx-2 flex items-center justify-center rounded-lg ${
          color === "indigo"
            ? "bg-indigo-primary"
            : color == "blue"
            ? "bg-blue-primary"
            : color === "cyan"
            ? "bg-cyan-primary"
            : color === "teal"
            ? "bg-teal-primary"
            : color === "brand"
            ? "bg-brand-primary"
            : color === "green"
            ? "bg-green-primary"
            : color === "lime"
            ? "bg-lime-primary"
            : color === "yellow"
            ? "bg-yellow-primary"
            : color === "orange"
            ? "bg-orange-primary"
            : color === "red"
            ? "bg-red-primary"
            : color === "pink"
            ? "bg-pink-primary"
            : color === "grape"
            ? "bg-grape-primary"
            : color === "violet"
            ? "bg-violet-primary"
            : color === "default" && "text-xl"
        } ${data?.color === color && `w-7 h-7 rounded-xl ${data.color}`} `}
      >
        {color === "default" ? (
          <CiNoWaitingSign />
        ) : (
          <span
            className={`${
              color === data.color && "w-3.5 h-3.5 rounded-full bg-white z-10"
            }`}
          ></span>
        )}
      </button>
    ))
  );
};

export default RenderSelectButtonColor;
