import { ButtonPrimary } from "../../Ui/Buttons";

const AccountInfo = () => {
  return (
    <form className="w-[354px] flex flex-col gap-s">
      <h1 className="text-[31px] text-right">اطلاعات حساب</h1>
      <div className="flex flex-col text-right h-[72px] gap-xs">
        <label htmlFor="email">ایمیل</label>
        <input
          id="email"
          type="email"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs">
        <label htmlFor="userName">نام کاربری</label>
        <input
          id="userName"
          type="text"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs">
        <label htmlFor="currentPassword">رمز عبور فعلی</label>
        <input
          id="currentPassword"
          type="password"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs">
        <label htmlFor="newPassword">رمز عبور جدید</label>
        <input
          id="newPassword"
          type="password"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>

      <div className="flex flex-col text-right h-[72px] gap-xs">
        <label htmlFor="newPasswordVerification">تکرار رمز عبور جدید</label>
        <input
          id="newPasswordVerification"
          type="password"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>
      <ButtonPrimary type="submit" bigger={true} onClick={() => {}}>
        ثبت تغییرات
      </ButtonPrimary>
    </form>
  );
};

export default AccountInfo;
