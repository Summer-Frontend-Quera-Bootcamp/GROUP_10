//------ Functional Imports ----//

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//------ Other Components -----//

import AuthLayout from "../../../Layouts/AuthLayout";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";

//------ Zod Schema here ------//

const schema = z.object({
  username: z.string().min(3, { message: "Too short" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password cannot be longer than 32 characters"),
  guideline: z.boolean().refine((value) => value === true, {
    message: "Please accept the guidelines",
  }),
});

type IFormValues = z.infer<typeof schema>;

//---- Component Starts Here ----//

const Register = () => {
  //---------- UseForm ----------//

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  //---------- Functions ---------//

  const onSubmit = (data: IFormValues) => console.log(data);

  //----------- Return -----------//

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerAuth heading=" ثبت‌نام در کوئرا تسک منیجر ">
          <div className="flex flex-col">
            <div>
              <InputText
                name="username"
                register={register}
                label="نام کامل"
                type="text"
              />
              {errors.username && (
                <p className="text-red-primary text-right">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mt-m">
              <InputText
                name="email"
                register={register}
                label="ایمیل"
                type="text"
              />
              {errors.email && (
                <p className="text-red-primary text-right">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="my-m">
              <InputText
                name="password"
                register={register}
                label="رمز عبور"
                type="password"
              />
              {errors.password && (
                <p className="text-red-primary text-right">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div dir="rtl" className="flex items-center">
              <input
                type="checkBox"
                id="guideline"
                className="w-m h-m cursor-pointer rounded"
                {...register("guideline")}
              />
              <label
                htmlFor="guideline"
                className="mx-xs font-bold cursor-pointer"
              >
                قوانین و مقررات را می‌پذیرم.
              </label>
            </div>
            {errors.guideline && (
              <p className="text-red-primary text-right">
                {errors.guideline.message}
              </p>
            )}
            <div className="mt-m">
              <ButtonPrimary onClick={() => {}} bigger={true} type="submit">
                ثبت‌نام
              </ButtonPrimary>
            </div>
          </div>
        </ContainerAuth>
      </form>
    </AuthLayout>
  );
};

export default Register;
