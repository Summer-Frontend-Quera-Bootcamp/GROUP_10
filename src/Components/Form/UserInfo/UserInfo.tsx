import { ChangeEvent, useRef, useState } from "react";
import { ButtonPrimary } from "../../Ui/Buttons";

const UserInfo = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImageUrl(imgUrl);
    }
  };

  return (
    <form className="w-[354px] flex flex-col items-end gap-s">
      <h1 className="text-[31px] text-right">اطلاعات فردی</h1>
      <div className="flex flex-row justify-start w-[328px] gap-xs">
        <div className="flex flex-col justify-center items-center gap-s">
          <button
            onClick={handleButtonClick}
            className="border border-cyan-primary rounded-lg p-[10px] text-cyan-primary"
          >
            ویرایش تصویر پروفایل
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          <p className="text-[12px] text-right text-gray-primary">
            این تصویر برای عموم قابل نمایش است
          </p>
        </div>
        {imageUrl ? (
          <div
            className="bg-cover bg-center bg-orange-secondary h-[104px] w-[100px] rounded-full"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        ) : (
          <div className="bg-cover bg-center bg-orange-secondary h-[104px] w-[100px] rounded-full" />
        )}
      </div>
      <div className="flex flex-col text-right h-[72px] gap-xs w-full">
        <label htmlFor="firstName">نام</label>
        <input
          id="firstName"
          type="text"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs w-full">
        <label htmlFor="lastName">نام خانوادگی</label>
        <input
          id="lastName"
          type="text"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs w-full">
        <label htmlFor="phoneNumber">شماره موبایل</label>
        <input
          id="phoneNumber"
          type="text"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>
      <ButtonPrimary type="submit" bigger={true} onClick={() => {}}>
        ثبت تغییرات
      </ButtonPrimary>
    </form>
  );
};

export default UserInfo;
