import { ButtonNewTask } from "../Buttons";
import { ColumnHeader, ContainerColTask } from "../Containers";
const ColumnView = () => {
  return (
    <div className="flex flex-row-reverse h-[78vh] gap-x-s overflow-y-auto pr-4">
      <div className="w-[250px]">
        <ColumnHeader
          color="orange"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Open"
          count={2}
        />
        <ContainerColTask
          image="https://cdn.stocksnap.io/img-thumbs/960w/brown-puppy_7DWDQY7PEW.jpg"
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="important"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "سلام", color: "red" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="high"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "تگ جدید", color: "lime" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <div>
          <ButtonNewTask onClick={() => {}} />
        </div>
      </div>
      <div className="w-[250px]">
        <ColumnHeader
          color="blue"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="In Progress"
          count={3}
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="high"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "تگ جدید", color: "lime" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ContainerColTask
          image="https://cdn.stocksnap.io/img-thumbs/960w/brown-puppy_7DWDQY7PEW.jpg"
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="important"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "سلام", color: "red" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="high"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "تگ جدید", color: "lime" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ButtonNewTask onClick={() => {}} />
      </div>
      <div>
        <ColumnHeader
          color="yellow"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Pending"
          count={0}
        />
        <ButtonNewTask onClick={() => {}} />
      </div>
      <div className="w-[250px]">
        <ColumnHeader
          color="orange"
          onAdd={() => {}}
          onArchive={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
          name="Open"
          count={4}
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="important"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "سلام", color: "red" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="high"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "تگ جدید", color: "lime" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="important"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "سلام", color: "red" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ContainerColTask
          listName="پروژه اول"
          taskTitle="ین یک تیتر برای این تسک است"
          priority="high"
          tags={[
            { title: "تگ", color: "brand" },
            { title: "تگ جدید", color: "lime" },
          ]}
          onMore={() => {}}
          onCheck={() => {}}
          taskStatus={{ allTasks: 15, tasksDone: 4 }}
          date="۵ -مهر "
        />
        <ButtonNewTask onClick={() => {}} />
      </div>
    </div>
  );
};

export default ColumnView;
