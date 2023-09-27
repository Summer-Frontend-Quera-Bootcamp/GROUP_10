import { PropsWithChildren } from "react";
import "./App.css";
import { ColumnHeader, ContainerColTask } from "../Components/Ui/Containers";

//--------Import Your Components Here!--------//

//-------------Welcome to The App-------------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      <div className="w-[250px] m-m">
        <div className="my-m">
          <ColumnHeader
            color="grape"
            name="test"
            count={3}
            onAdd={() => {}}
            onEdit={() => {}}
            onArchive={() => {}}
            onDelete={() => {}}
          />
        </div>
        <div>
          <ContainerColTask
            image="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2023-03/puppy-dog-wiley-zz-230322-bc5aa9.jpg"
            listName="list test"
            taskTitle="this is a title test"
            priority="important"
            date="2000/4/14"
            taskStatus={{ tasksDone: 2, allTasks: 12 }}
            tags={[
              { title: "dars", color: "yellow" },
              { title: "test", color: "blue" },
            ]}
            onCheck={() => {}}
            onMore={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default App;
