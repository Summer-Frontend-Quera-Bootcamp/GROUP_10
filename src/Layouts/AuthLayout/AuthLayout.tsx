import { Link, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonPrimary } from "../../Components/Ui/Buttons";
import ProjectTitle from "../../Components/Ui/Titles/ProjectTitle/ProjectTitle";
type IAuthLayout = {
  children?: React.ReactNode;
};

const AuthLayout = ({}: IAuthLayout): JSX.Element => {
  const location = useLocation();
  const Navigate = useNavigate();
  const navigateTo =
    location.pathname === "/login" || location.pathname === "/"
      ? "/register"
      : "/login";

  // console.log(pathname);

  return (
    <div className="h-screen overflow-hidden px-[80px] mx-auto mb-0 pt-[30px] ">
      <div className="flex flex-col gap-14">
        <div className="flex items-center">
          <div>
            <Link
              to={
                location.pathname === "/login" || location.pathname === "/"
                  ? "/register"
                  : "/login"
              }
            >
              <ButtonPrimary onClick={() => Navigate(navigateTo)} type="button">
                {location.pathname === "/login" || location.pathname === "/"
                  ? "ثبت نام"
                  : "ورود"}
              </ButtonPrimary>
            </Link>
            <span className="text-body-m ms-1 font-semibold">
              {location.pathname === "/login" || location.pathname === "/"
                ? "ثبت نام نکرده ای ؟"
                : "قبلا ثبت نام کرده ای ؟"}
            </span>
          </div>
          <ProjectTitle />
        </div>
        <div className="flex justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#54bee8] to-[#06846f] z-[-10]"
        style={{ clipPath: `polygon(0 70%, 100% 40%, 100% 100%, 0 100%)` }}
      ></div>
    </div>
  );
};

export default AuthLayout;
