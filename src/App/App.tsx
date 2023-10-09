//import List from "../Components/Ui/FmButton/List";
//import { ButtonColor } from "../Components/Ui/Buttons";
//import Mamad from "../Components/Ui/FmButton/mamad";

import {BoardListComponents} from "../Components/Ui/BoardList";

function App() {
  // const tasks = [
  //   {
  //     member: "hasan",
  //     deadline: "23 aban",
  //     priority: "High",
  //     description: "blah blah",
  //   },
  //   {
  //     member: "asghar",
  //     deadline: "22 aban",
  //     priority: "Medium",
  //     description: "yhdgh",
  //   },
  // ];

  return (
    <div className="App">

      {/* <ButtonColor onClick={()=>{}} color="green"> In Progress </ButtonColor> */}
      {/* <h1>Task List</h1> */}
      {/* <List tasks={tasks} /> */}
      
      <BoardListComponents Heading={{color:"pink",
      state: "Pending"
      
    }}
    Tasks={[
    {
      id: 1,
      title: "تیتر",
      members: ["Amir", "arman"],
      deadline: "shanbe",
      priority: 0,
      description: "hi guys all",
    },
    {
      id: 2,
      title: "akbar",
      members: ["asghar", "dostan"],
      deadline: "doshanbe",
      priority: 1,
      description: "bye guys all",
    },
    {
      id: 3,
      title: "reza",
      members: ["reza"],
      deadline: "4 shanbe",
      priority: 2,
      description: "aaaaaaaaaaaaaaa",
    },
  ]}
    />
    <BoardListComponents Heading={{color:"orange", state:"in Progress"}}
    Tasks={[
    {
      id: 1,
      title: "تیتر",
      members: ["Amir", "arman"],
      deadline: "shanbe",
      priority: 0,
      description: "hi guys all",
    },
    {
      id: 2,
      title: "akbar",
      members: ["asghar", "dostan"],
      deadline: "doshanbe",
      priority: 1,
      description: "bye guys all",
    }]}
    /> 
    
  

<BoardListComponents Heading={{color:"green", state:"Done"}}
    Tasks={[
    {
      id: 1,
      title: "تیتر",
      members: ["Amir", "arman"],
      deadline: "shanbe",
      priority: 0,
      description: "hi guys all",
    },
    {
      id: 2,
      title: "akbar",
      members: ["asghar", "dostan"],
      deadline: "doshanbe",
      priority: 1,
      description: "bye guys all",
    }]}
    /> 
    </div>

  );}
export default App;
