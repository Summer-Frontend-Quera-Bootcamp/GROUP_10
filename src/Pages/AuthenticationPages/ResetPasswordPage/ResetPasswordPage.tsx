// reset password component
import AuthLayout from "../../../Layouts/AuthLayout/AuthLayout";
import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const ResetPassword = () => {
  const PasswordResetSchema = z
    .object({
      password: z
        .string()
        .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
        .regex(
          /^(?=.*?[A-Z])(?=.*?[0-9])/,
          "رمز عبور باید شامل یک عدد و یک حرف بزرگ باشد"
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.confirmPassword === data.password, {
      message: "رمز عبور و تأیید رمز عبور باید یکسان باشند",
      path: ["confirmPassword"],
    });

  type IFormValues = z.infer<typeof PasswordResetSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(PasswordResetSchema),
  });
  const onSubmit = (data: IFormValues) => console.log(data);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <ContainerAuth heading="بازیابی رمز عبور">
          <div className="flex flex-col">
            <div>
              <InputText
                name="password"
                register={register}
                label="رمز عبور جدید را وارد کنید"
                type="password"
              />
              {errors.password && (
                <p className="text-red-primary text-right">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-m my-m">
              <InputText
                name="confirmPassword"
                register={register}
                label="رمز عبور جدید را تایید کنید"
                type="password"
              />
              {errors.confirmPassword && (
                <p className="text-red-primary text-right">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div>
              <ButtonPrimary onClick={() => {}} bigger={true} type="submit">
                تغییر رمز عبور
              </ButtonPrimary>
            </div>
          </div>
        </ContainerAuth>
      </form>
    </>
  );
};

export default ResetPassword;
