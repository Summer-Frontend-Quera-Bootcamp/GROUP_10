import { ButtonPrimary } from "../../../../Buttons";
import { PiLinkLight } from "react-icons/pi";
const Modal = () => {
  const getInitials = (username: string) => {
    const words = username.split(/[^A-Za-z]/);
    return words.map((word) => word.charAt(0).toUpperCase()).join("");
  };
  const email = "sararahmani@gmail.com";
  const username = email.split("@")[0];
  const initials = getInitials(username);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[462px] h-[343px] bg-white p-s rounded-xl flex flex-col items-center">
        <div className="w-[430px] flex pb-10 flex-row-reverse">
          <p className="text-xl pe-24">به اشتراک گذاری تسک</p>
        </div>

        <div className="w-[430px] pb-5">
          <ButtonPrimary onClick={() => {}} type="submit">
            ارسال
          </ButtonPrimary>
          <input
            type="text"
            className="w-[349px] h-[40px] outline-none rounded-e-lg text-right pe-2 bg-gray-200 -ms-1"
            placeholder="دعوت با ایمیل"
          />
        </div>

        <div className="flex items-center justify-between w-[430px] mb-5">
          <button className="bg-gray-100 rounded-md px-3 py-1 text-xs border border-solid">
            کپی لینک
          </button>
          <div className="flex items-center">
            <p className="text-sm me-2">لینک خصوصی</p>
            <PiLinkLight className="text-gray-400" />
          </div>
        </div>
        <div className="w-[430px]">
          <p className=" text-gray-600 text-right pb-5">اشتراک گذاری شده با</p>
          <div className="flex justify-between mb-3">
            <p className="bg-gray-100 rounded-md text-sm border-solid border my-auto px-3 py-1">
              دسترسی کامل
            </p>
            <div className="flex items-center">
              <p className="bg-blue-200 text-blue-500 rounded-md text-sm px-3 py-1 me-3">
                Workspace Owner
              </p>
              <p className="me-2">من</p>
              <img className="w-[36px] h-[36px] rounded-full" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <select className="bg-gray-100 border-solid border rounded-md text-sm px-3 py-0.5 me-3 outline-none">
              <option value="Administrator" selected>
                دسترسی کامل
              </option>
              <option value="Editor">ویرایشگر</option>
              <option value="Author">نویسنده</option>
              <option value="Contributor">مشترک</option>
              <option value="User">کاربر</option>
            </select>
            <div className="flex items-center">
              <p>sararahimi@gmail.com</p>
              <p className="bg-red-400 rounded-full w-[36px] h-[36px] flex items-center justify-center ms-2">
                {initials}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
