import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary } from "../../../Components/Ui/Buttons";
import { ContainerAuth } from "../../../Components/Ui/Containers/";
import { InputText } from "../../../Components/Ui/Inputs/";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Features/Hooks/Hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export type FieldValues = Record<string, unknown>;
import {
  forgot as forgotApi,
  reset,
} from "../../../Features/AuthUserSlice/AuthSlice/AuthUserSlice";

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
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading, isError, message } = useAppSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error(message as string);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.dismiss();
      toast.success(`لطفا ایمیل خود را بررسی کنید 😀`, {
        rtl: true,
      });
      Navigate("/backuplink");
      dispatch(reset());
    }
  }, [isSuccess, isError, message, isLoading, Navigate, dispatch]);
  const onSubmit = (data: FieldValues) => {
    dispatch(
      forgotApi({
        email: data.email,
      })
    );
  };

  return (
    <>
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
              <ButtonPrimary
                onClick={() => {}}
                bigger={true}
                type="submit"
                disabled={isLoading}
              >
                دریافت ایمیل بازیابی رمز عبور
              </ButtonPrimary>
            </div>
          </ContainerAuth>
        </form>
      )}
    </>
  );
};

export default ForgetPass;
