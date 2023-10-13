import { PropsWithChildren } from "react";
import "./App.css";

//--------Import Your Components Here!--------//

import BoardLayout from "../Layouts/BoardLayout/BoardLayout";
import BoardList from "../Components/Ui/BoardListComponents/BoardList/BoardList";
//import { LoginPage } from "../Pages/AuthenticationPages";
//import { ForgetPassPage } from "../Pages/AuthenticationPages";

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <div>
      <BoardLayout>
        <BoardList />
      </BoardLayout>
      {/* <RegisterPage /> */}
      {/* <ForgetPassPage /> */}
      {/* <LoginPage /> */}
      {/* <ResetPasswordPage /> */}
    </div>
  );
};

export default App;

// 1 - first clone the Git repository on your system.
// 2 - open the terminal and type "npm install".
// 3 - wait for it to finish then type "npm run dev".
// 4 - "ctrl + click" on the link.
// 5 - remember to only save your changes on your branch!

//------------- -> WISH YOU THE BEST <- -------------//
