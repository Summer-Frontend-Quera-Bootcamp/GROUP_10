import { PropsWithChildren } from "react";
import "./App.css";
import { RegisterPage } from "../Pages/AuthenticationPages";

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      <RegisterPage />
      {/* <ForgetPassPage /> */}
      {/* <LoginPage /> */}
      {/* <ResetPasswordPage /> */}
    </>
  );
};

export default App;
