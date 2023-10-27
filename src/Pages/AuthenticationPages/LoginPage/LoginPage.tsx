import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import { ContainerAuth } from "../../../Components/Ui/Containers";
import { InputText } from "../../../Components/Ui/Inputs";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { AncherPrimary } from "../../../Components/Ui/Anchers";
import { Outlet } from "react-router";
export type FieldValues = Record<string, unknown>;
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../Features/Hooks/Hooks";
import {
  login as loginApi,
  reset,
} from "../../../Features/AuthUserSlice/AuthSlice/AuthUserSlice";

const schema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "رمز کوتاه است" })
    .max(32, { message: ".رمز عبور صحیح نیست" }),
});

// type Check = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );
  console.log(isLoading, isSuccess, isError, message);
  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error(
        `${
          message === "Request failed with status code 401"
            ? "نام کاربری یا رمز عبور اشتباه است"
            : message
        } ❗`
      );

      dispatch(reset());
    }
    if (isSuccess) {
      toast.dismiss();
      toast.success(` خوش آمدید `, { autoClose: 2000, rtl: true });
      dispatch(reset());
    }
    const redirect = searchParams.has("redirect")
      ? searchParams.get("redirect")
      : null;
    if (redirect && isSuccess) {
      navigate(redirect);
    } else if (isSuccess) {
      navigate("/");
    }
  }, [
    isSuccess,
    isError,
    isLoading,
    message,
    navigate,
    dispatch,
    searchParams,
  ]);

  const onSubmit = (data: FieldValues) => {
    dispatch(
      loginApi({
        username: data.username,
        password: data.password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerAuth heading="(:به کوئرا تسک منیجر خوش برگشتی  ">
        <div className="flex flex-col">
          <div className="mt-m">
            <InputText name="username" register={register} label="نام کاربری" />
            <p className="text-red-primary text-right">
              {errors.username?.message}
            </p>
          </div>

          <div className="my-m">
            <InputText
              name="password"
              register={register}
              label="رمز عبور"
              type="password"
            />
            <p className="text-red-primary text-right">
              {errors.password?.message}
            </p>
          </div>

          <div dir="rtl" className="flex items-center text-right">
            <AncherPrimary path="/forget-password">
              رمز عبور را فراموش کرده ای؟
            </AncherPrimary>
          </div>

          <div className="mt-m">
            <ButtonPrimary
              onClick={() => {}}
              bigger={true}
              type="submit"
              disabled={isLoading}
            >
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
  );
};

export default Login;
