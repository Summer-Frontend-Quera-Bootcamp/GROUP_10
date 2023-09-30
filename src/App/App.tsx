import { PropsWithChildren } from "react";
import "./App.css";

//--------Import Your Components Here!--------//

import { BoardLayout } from "../Pages/MainPage/BoardLayout/BoardLayout";

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      <div className="h-[600px]">
        <BoardLayout></BoardLayout>
      </div>
    </>
  );
};

export default App;
