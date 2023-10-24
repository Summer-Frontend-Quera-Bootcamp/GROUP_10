import { PropsWithChildren } from "react";
import "./App.css";
import ModalInformation from "../Components/Ui/Modal";

//--------Import Your Components Here!--------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <div>
      <ModalInformation />
    </div>
  );
};

export default App;
