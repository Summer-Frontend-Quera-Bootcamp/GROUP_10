import { PropsWithChildren } from "react";
import "./App.css";
import { NewTask } from "../Components/Ui/Task";
import { ContainerModal } from "../Components/Ui/Containers";

//--------Import Your Components Here!--------//

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <div>
      <ContainerModal heading="test" onClose={() => {}}>
        <div>hello</div>
      </ContainerModal>
      <NewTask onClose={() => {}} />
    </div>
  );
};

export default App;
