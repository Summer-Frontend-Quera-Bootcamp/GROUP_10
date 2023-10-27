// reset password component
import AuthLayout from "../../../Layouts/AuthLayout/AuthLayout";
import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Features/Hooks/Hooks";
import { reset } from "../../../Features/AuthUserSlice/AuthSlice/AuthUserSlice";
import axios from "axios";
const API_URL = "https://quera.iran.liara.run/";
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
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading, isError, message } = useAppSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error(`لینک بازیابی رمز منقضی شده است ❌`);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.dismiss();
      toast.success(`تغییر رمز عبور با موفقیت انجام شد ✅ `, {
        autoClose: 1000,
        rtl: true,
      });
      navigate("/login");
      dispatch(reset());
    }
  }, [isSuccess, isError, message, isLoading, navigate, dispatch]);
  const [searchParams] = useSearchParams();
  const onSubmit = async (data: IFormValues) => {
    const { token } = Object.fromEntries([...searchParams]);
    isLoading;
    try {
      const response = await axios.patch(
        API_URL + "accounts/reset-password/set-password/",
        {
          token: token,
          password: data.password,
          password1: data.confirmPassword,
        }
      );
      console.log(response.data);
      isSuccess;
      navigate("/login");
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        isError;
      }
    }
  };

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
              <ButtonPrimary
                onClick={() => {}}
                bigger={true}
                type="submit"
                disabled={isLoading}
              >
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
