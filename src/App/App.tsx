import { PropsWithChildren } from "react";
import "./App.css";
// import { NewTask } from "../Components/Ui/Task";
import { FlagSelecter } from "../Components/Ui/Task/FlagSelecter/FlagSelecter";

//--------Import Your Components Here!--------//

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  const handleData = (data: number) => {
    console.log(data);
  };
  return (
    <>
      {/* <NewTask onClose={() => {}} /> */}
      <FlagSelecter onData={handleData} />
    </>
  );
};

export default App;
