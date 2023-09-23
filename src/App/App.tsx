import { PropsWithChildren } from "react";
import "./App.css";
import { Register } from "../Pages/AuthenticationPages";

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      <Register />
      {/* <ForgetPassPage /> */}
      {/* <LoginPage /> */}
      {/* <ResetPasswordPage /> */}
    </>
  );
};

export default App;
