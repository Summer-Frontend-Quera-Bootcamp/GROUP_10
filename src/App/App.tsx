import { PropsWithChildren } from "react";
import "./App.css";

// 0 70%, 100% 40%, 100% 100%, 0% 100%

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (props: IPropsApp): JSX.Element => {
  return (
    <div className="app ">
      {/* <div className="h-screen child"></div> */}
      {/* <h1 className="text-heading-xs text-red-primary">111</h1> */}
    </div>
  );
};

export default App;
