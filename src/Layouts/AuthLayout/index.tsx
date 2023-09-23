import { ButtonPrimary } from "../../Components/Ui/Buttons";

type IAuthLayout = {
  children: React.ReactNode;
  navButtonText?: string;
};

const AuthLayout = ({
  children,
  navButtonText = "ورود",
}: IAuthLayout): JSX.Element => {
  return (
    <div className="h-screen overflow-hidden px-[80px] mx-auto mb-0 pt-[80px] ">
      <div className="flex items-center">
        <div>
          <ButtonPrimary onClick={() => {}} type="button">
            {navButtonText}
          </ButtonPrimary>
          <span className="text-body-m ms-1 font-semibold">
            ثبت نام نکرده ای؟
          </span>
        </div>
        <h2 className="ml-auto text-heading-l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8]">
          کوئرا تسک منیجر
        </h2>
      </div>
      <div className="flex justify-center items-center">{children}</div>
      <div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#54bee8] to-[#06846f] z-[-10]"
        style={{ clipPath: `polygon(0 70%, 100% 40%, 100% 100%, 0 100%)` }}
      ></div>
    </div>
  );
};

export default AuthLayout;
