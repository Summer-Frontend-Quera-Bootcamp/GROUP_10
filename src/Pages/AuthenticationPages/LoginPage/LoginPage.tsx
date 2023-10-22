import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../../../Layouts/AuthLayout/AuthLayout";
import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { AncherPrimary } from "../../../Components/Ui/Anchers";

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

  return (
    <AuthLayout>
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
              <AncherPrimary href="">رمز عبور را فراموش کرده ای؟</AncherPrimary>
            </div>

            <div className="mt-m">
              <ButtonPrimary
                onClick={handleSubmit((data1) => console.log(data1))}
                bigger={true}
                type="submit"
              >
                ورود
              </ButtonPrimary>
            </div>

            <div className=" inline text-center">
              <AncherPrimary href="">ثبت نام</AncherPrimary>
              <p className="mt-5 inline-block">ثبت نام نکرده ای؟</p>
              <p className="mt-5 inline-block">سلام</p>
            </div>
          </div>
        </ContainerAuth>
      </form>
    </AuthLayout>
  );
};

export default Login;
