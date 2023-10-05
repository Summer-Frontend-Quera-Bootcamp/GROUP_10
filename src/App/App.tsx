import { PropsWithChildren } from "react";
import "./App.css";
import { NewTask } from "../Components/Ui/Task";

//--------Import Your Components Here!--------//

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <div>
      <NewTask onClose={() => {}} />
    </div>
  );
};

export default App;
