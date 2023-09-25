import { PropsWithChildren } from "react";
import "./App.css";

//--------Import Your Components Here!--------//

import { ContainerModule } from "../Components/Ui/Containers";
import { ButtonIcon } from "../Components/Ui/Buttons";
import { InputInvite } from "../Components/Ui/Inputs";

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      <ContainerModule
        heading="this is a test"
        onClose={() => {}}
        onBack={() => {}}
      >
        <InputInvite onClick={() => {}}></InputInvite>
        <div className="text-center flex flex-col mb-m">
          <p> ▄▀▄─────▄▀▄</p>
          <p> ▄█░░▀▀▀▀▀░░█▄</p>
          <p> █░░░░░░░░░░░█</p>
          <p> █░░▀░░┬░░▀░░█</p>
        </div>
        <ButtonIcon onClick={() => {}} useCase="share" bigger={true} />
      </ContainerModule>
    </>
  );
};

export default App;
