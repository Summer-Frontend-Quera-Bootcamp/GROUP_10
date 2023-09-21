import { PropsWithChildren } from "react";
import "./App.css";
import AuthLayout from "../Layouts/AuthLayout";
interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <AuthLayout>
      <h1>test1</h1>
    </AuthLayout>
  );
};

export default App;
