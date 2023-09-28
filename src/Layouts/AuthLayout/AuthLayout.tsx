import { ButtonPrimary } from "../../Components/Ui/Buttons";
import ProjectTitle from "../../Components/Ui/Titles/ProjectTitle/ProjectTitle";
type IAuthLayout = {
  children: React.ReactNode;
  navButtonText?: string;
};

const AuthLayout = ({
  children,
  navButtonText = "ورود",
}: IAuthLayout): JSX.Element => {
  return (
    <div className="h-screen overflow-hidden px-[80px] mx-auto mb-0 pt-[30px] ">
      <div className="flex flex-col gap-14">
        <div className="flex items-center">
          <div>
            <ButtonPrimary onClick={() => {}} type="button">
              {navButtonText}
            </ButtonPrimary>
            <span className="text-body-m ms-1 font-semibold">
              ثبت نام نکرده ای؟
            </span>
          </div>
          <ProjectTitle />
        </div>
        <div className="flex justify-center items-center">{children}</div>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#54bee8] to-[#06846f] z-[-10]"
        style={{ clipPath: `polygon(0 70%, 100% 40%, 100% 100%, 0 100%)` }}
      ></div>
    </div>
  );
};

export default AuthLayout;
