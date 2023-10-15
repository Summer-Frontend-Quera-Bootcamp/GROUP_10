import { PropsWithChildren } from "react";
import "./App.css";
import { Calendar } from "../Components/Ui/CalendarView";
//--------Import Your Components Here!--------//

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  const events = [
    {
      title: "Event 1",
      start: "2023-10-05",
      end: "2023-10-11",
    },
    // Add more events as needed
  ];
  return <Calendar events={events} />;
};

export default App;
