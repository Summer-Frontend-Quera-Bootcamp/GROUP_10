import { BsTags } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";
const MainContent = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
 
  return (
    <>
      <div className="flex items-center justify-end p-5 pe-10">
        <p
          className="w-[61px] h-[24px] bg-[#ffe8cc] text-[#FD7E14] text-xs flex justify-center items-center rounded-[35px] font-bold me-5"
          style={{ display: visible ? "flex" : "none" }}
        >
          میان ترم
        </p>
        <div className="inline-flex items-center relative">
          <div
            className="w-[34px] h-[34px] rounded-full flex justify-center items-center border-[1.5px] border-dotted border-gray-400 hover:cursor-pointer"
            onClick={toggle}
          >
            <BsTags className="text-gray-400 text-[20px]" />
          </div>
        </div>
      </div>
      <div className="w-[95%] flex mx-auto">
        <div className="flex flex-col items-end justify-center">
          <p className="text-2xl font-bold mb-5">عنوان تسک</p>
          <div className="border border-gray-400 p-3 rounded-xl text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-5 pe-10 cursor-pointer">
        <p className="text-[#208D8E]">اضافه کردن پیوست</p>
        <AiOutlinePlusSquare className="text-[#208D8E] text-bold-xl ms-1" />
      </div>
    </>
  );
};

export default MainContent;
