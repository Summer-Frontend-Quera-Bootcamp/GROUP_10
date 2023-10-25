import { ButtonPrimary } from "../../../../Components/Ui/Buttons";
const UserInfo = () => {
  return (
    <form
      className="w-[354px] flex flex-col items-end gap-s"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="text-[31px] text-right">اطلاعات فردی</h1>
      <div className="flex flex-row justify-start w-[328px] gap-xs">
        <div className="flex flex-col justify-center items-center gap-s">
          <button
            onClick={() => {}}
            className="border border-cyan-primary rounded-lg p-[10px] text-cyan-primary"
          >
            ویرایش تصویر پروفایل
          </button>

          <p className="text-[12px] text-right text-gray-primary">
            این تصویر برای عموم قابل نمایش است
          </p>
        </div>

        <div className="bg-cover bg-center bg-[url('../src/assets/prof.jpg')] bg-orange-secondary h-[104px] w-[100px] rounded-full" />
      </div>
      <div className="flex flex-col text-right h-[72px] gap-xs w-full">
        <label htmlFor="firstName">نام</label>
        <input
          id="firstName"
          type="text"
          className="border border-gray-primary h-[72px] rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs w-full">
        <label htmlFor="lastName">نام خانوادگی</label>
        <input
          id="lastName"
          type="text"
          className="border border-gray-primary h-[72px] rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs w-full">
        <label htmlFor="phoneNumber">شماره موبایل</label>
        <input
          id="phoneNumber"
          type="text"
          className="border border-gray-primary h-[72px] rounded-md w-full grow text-right"
        />
      </div>
      <div className="mt-6 w-full">
        <ButtonPrimary type="submit" bigger={true} onClick={() => {}}>
          ثبت تغییرات
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default UserInfo;
