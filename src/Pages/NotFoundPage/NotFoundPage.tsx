import { FaRegFaceSadTear } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 ">
      <h2 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#118C80] to-[#4AB7D8]">
        404
      </h2>
      <div className="flex items-center gap-x-5 mt-4">
        <FaRegFaceSadTear className="text-5xl text-cyan-primary" />
        <h2 className="text-3xl">{"(:"} صفحه مورد نظر شما یافت نشد </h2>
      </div>
      <div className="mt-xl flex items-center transition-all ease-in-out hover:pl-7 hover:cursor-pointer hover:text-gray-darker">
        <Link to="/" className="text-2xl">
          بازگشت به بخش ورک اسپیس ها
        </Link>
        <HiOutlineArrowLongRight className="text-4xl ml-2 mt-1.5" />
      </div>
    </div>
  );
};

export default NotFoundPage;
