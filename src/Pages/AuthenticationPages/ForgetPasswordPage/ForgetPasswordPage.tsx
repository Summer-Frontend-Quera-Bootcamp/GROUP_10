// forgot password component

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { ContainerAuth } from "../../../Components/Ui/Containers/";
import { InputText } from "../../../Components/Ui/Inputs/";
import AuthLayout from "../../../Layouts/AuthLayout";
import { useState } from "react";

const schema = z.object({
  email: z.string().email({ message: "این ایمیل معتبر نیست" }),
});

type IFormValues = z.infer<typeof schema>;

const ForgetPass = () => {
  const [formVisiblity, setFormVisiblity] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: IFormValues) => {
    setFormVisiblity(false);
    console.log(data);
  };

  return (
    <AuthLayout>
      {formVisiblity && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerAuth heading=" فراموشی رمز عبور ">
            <InputText
              register={register}
              name="email"
              label="ایمیل خود را وارد کنید"
              type="text"
            />
            {errors.email && (
              <p className="text-red-primary text-right">
                {errors.email.message}
              </p>
            )}
            <div className="mt-m mb-m">
              <ButtonPrimary onClick={() => {}} bigger={true} type="submit">
                دریافت ایمیل بازیابی رمز عبور
              </ButtonPrimary>
            </div>
          </ContainerAuth>
        </form>
      )}
      {!formVisiblity && (
        <ContainerAuth heading=" فراموشی رمز عبور ">
          <p className="text-right" style={{ direction: "rtl" }}>
            لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
            کنید.
          </p>
        </ContainerAuth>
      )}
    </AuthLayout>
  );
};

export default ForgetPass;
