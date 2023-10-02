import { PropsWithChildren } from "react";
import "./App.css";
// import { TagSearch } from "../Components/Ui/Task";
import { MinimalistDatePicker } from "../Components/Ui/Task";

//--------Import Your Components Here!--------//

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <div>
      <MinimalistDatePicker />
      {/* <TagSearch /> */}
    </div>
  );
};

export default App;
