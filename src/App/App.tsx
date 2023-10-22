import { PropsWithChildren } from "react";
import "./App.css";

//--------Import Your Components Here!--------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return <div></div>;
};

export default App;
