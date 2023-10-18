import { ButtonPrimary } from "../../Ui/Buttons";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email({ message: "ایمیل معتبر نیست" }),
    userName: z
      .string()
      .min(3, { message: "نام کاربری باید حداقل سه حرف باشد" }),
    newPassword: z
      .string()
      .min(8, { message: "پسورد باید حداقل هشت حرف باشد" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "پسورد جدید با تکرارش مطابقت ندارد",
    path: ["confirmPassword"], // path of error
  });

type FormData = z.infer<typeof schema>;

const AccountInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      className="w-[354px] flex flex-col gap-s"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-[31px] text-right">اطلاعات حساب</h1>
      <div className="flex flex-col text-right gap-xs">
        <div className="flex flex-col h-[72px] gap-xs">
          <label htmlFor="email">ایمیل</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="border border-gray-primary rounded-md w-full grow text-right"
          />
        </div>
        {errors.email && (
          <p className="text-red-primary text-[12px]">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col text-right gap-xs">
        <div className="flex flex-col h-[72px] gap-xs">
          <label htmlFor="userName">نام کاربری</label>
          <input
            {...register("userName")}
            id="userName"
            type="text"
            className="border border-gray-primary rounded-md w-full grow text-right"
          />
        </div>
        {errors.userName && (
          <p className="text-red-primary text-[12px]">
            {errors.userName.message}
          </p>
        )}
      </div>
      <div className="flex flex-col text-right h-[72px] gap-xs">
        <label htmlFor="currentPassword">رمز عبور فعلی</label>
        <input
          id="currentPassword"
          type="password"
          className="border border-gray-primary rounded-md w-full grow text-right"
        />
      </div>
      <div className="flex flex-col text-right gap-xs">
        <div className="flex flex-col h-[72px] gap-xs">
          <label htmlFor="newPassword">رمز عبور جدید</label>
          <input
            {...register("newPassword")}
            id="newPassword"
            type="password"
            className="border border-gray-primary rounded-md w-full grow text-right"
          />
        </div>
        {errors.newPassword && (
          <p className="text-red-primary text-[12px]">
            {errors.newPassword.message}
          </p>
        )}
      </div>
      <div className="flex flex-col text-right gap-xs">
        <div className="flex flex-col h-[72px] gap-xs">
          <label htmlFor="confirmPassword">تکرار رمز عبور جدید</label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            className="border border-gray-primary rounded-md w-full grow text-right"
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-primary text-[12px]">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <ButtonPrimary type="submit" bigger={true} onClick={() => {}}>
        ثبت تغییرات
      </ButtonPrimary>
    </form>
  );
};

export default AccountInfo;
