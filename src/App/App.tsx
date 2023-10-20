import { PropsWithChildren } from "react";
import "./App.css";
import { Calendar } from "../Components/Ui/CalendarView";
//--------Import Your Components Here!--------//

import BoardLayout from "../Layouts/BoardLayout/BoardLayout";
import ListView from "../Components/Ui/BoardListComponents/ListView/ListView";
//import { LoginPage } from "../Pages/AuthenticationPages";
//import { ForgetPassPage } from "../Pages/AuthenticationPages";

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <div>
      <BoardLayout>
        <ListView />
      </BoardLayout>
      {/* <RegisterPage /> */}
      {/* <ForgetPassPage /> */}
      {/* <LoginPage /> */}
      {/* <ResetPasswordPage /> */}
    </div>
  );
  //   const events = [
  //     {
  //       title: "Event 1",
  //       start: "2023-10-05",
  //       end: "2023-10-11",
  //     },
  //     // Add more events as needed
  //   ];
  //   return <Calendar events={events} />;
};

export default App;
