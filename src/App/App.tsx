import { PropsWithChildren } from "react";
import "./App.css";

//--------Import Your Components Here!--------//

import { ColumnHeader, ContainerModule } from "../Components/Ui/Containers";
import {
  ButtonColor,
  ButtonIcon,
  ButtonNewTask,
} from "../Components/Ui/Buttons";

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
        <ButtonColor onClick={() => {}} color="grape">
          test button
        </ButtonColor>
        <div className="my-m">
          <ButtonNewTask onClick={() => {}} />
        </div>
        <div className="my-m">
          <ColumnHeader
            onAdd={() => {}}
            onArchive={() => {}}
            onDelete={() => {}}
            onEdit={() => {}}
            color="grape"
            count={3}
            name="Open"
          />
        </div>
        <div className="text-center flex flex-col mb-m">
          <p> ▄▀▄─────▄▀▄</p>
          <p> ▄█░░▀▀▀▀▀░░█▄</p>
          <p> █░░░░░░░░░░░█</p>
          <p> █░░▀░░┬░░▀░░█</p>
        </div>
        <ButtonIcon onClick={() => {}} useCase="back" bigger={true} />
      </ContainerModule>
    </>
  );
};

export default App;
