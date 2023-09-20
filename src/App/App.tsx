import { PropsWithChildren } from "react";
import "./App.css";

//---------- Form component test --------------//

import { AuthFromLogin } from "../Components/Form/AuthFroms";

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return <AuthFromLogin />;
};

export default App;
