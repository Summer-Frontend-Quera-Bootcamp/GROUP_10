import { PropsWithChildren } from "react";
import "./App.css";

//--------Import Your Components Here!--------//

import { ButtonIcon } from "../Components/Ui/Buttons";

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      <ButtonIcon onClick={() => {}} useCase="share" />
    </>
  );
};

export default App;
