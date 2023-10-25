import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../../../Layouts/AuthLayout/AuthLayout";
import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { AncherPrimary } from "../../../Components/Ui/Anchers";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: ".لطفا ایمیل خود را به درستی وارد کنید" }),
  pass: z
    .string()
    .min(8, { message: "رمز کوتاه است" })
    .max(32, { message: ".رمز عبور صحیح نیست" }),
});

type Check = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Check>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form>
        <ContainerAuth heading="(:به کوئرا تسک منیجر خوش برگشتی  ">
          <div className="flex flex-col">
            <div className="mt-m">
              <InputText
                name="email"
                register={register}
                label="ایمیل"
                type="email"
              />
              {errors.email && (
                <p className="text-red-primary text-right">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="my-m">
              <InputText
                name="pass"
                register={register}
                label="رمز عبور"
                type="password"
              />
              {errors.pass && (
                <p className="text-red-primary text-right">
                  {errors.pass.message}
                </p>
              )}
            </div>

            <div dir="rtl" className="flex items-center text-right">
              <AncherPrimary path="/forget-password">
                رمز عبور را فراموش کرده ای؟
              </AncherPrimary>
            </div>

            <div className="mt-m">
              <ButtonPrimary onClick={() => {}} bigger={true} type="submit">
                ورود
              </ButtonPrimary>
            </div>

            <div className="inline text-center">
              <AncherPrimary path="/register">ثبت نام</AncherPrimary>
              <p className="mt-5  ms-2 inline-block">ثبت نام نکرده ای؟</p>
            </div>
          </div>
          <Outlet />
        </ContainerAuth>
      </form>
    </>
  );
};

export default Login;
