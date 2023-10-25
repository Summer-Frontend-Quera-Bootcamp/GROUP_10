import { useState } from "react";
import { ButtonIcon, ButtonNewTask } from "../Buttons";
import { ColumnHeader, ContainerColTask, ContainerModal } from "../Containers";
import { NewTask } from "../NewTask";
import { ModalInformation } from "../Modal";

const ColumnView = () => {
  const [newTask, setNewTask] = useState(false);
  const [addComment, setAddComment] = useState<boolean>(false);

  return (
    <div className="flex flex-row-reverse h-[78vh] gap-x-l overflow-y-auto pr-4">
      {newTask && (
        <>
          <div className="fixed flex justify-center items-center top-[-250px] right-[-300px] w-[130vw] h-[130vh] bg-black opacity-30 z-10" />
          <div className="fixed top-[8%] right-[22%] z-20">
            <NewTask
              onClose={() => {
                setNewTask(false);
              }}
            />
          </div>
        </>
      )}
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
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div>
          <ButtonNewTask
            onClick={() => {
              setNewTask(true);
            }}
          />
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
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <ButtonNewTask
          onClick={() => {
            setNewTask(true);
          }}
        />
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
        <ButtonNewTask
          onClick={() => {
            setNewTask(true);
          }}
        />
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
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setAddComment((prevState) => !prevState)}
        >
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
        </div>
        <ButtonNewTask
          onClick={() => {
            setNewTask(true);
          }}
        />
      </div>
      <div className=" absolute bottom-[50px] left-[50px]">
        <ButtonIcon
          useCase="newTask"
          onClick={() => {
            setNewTask(true);
          }}
        ></ButtonIcon>
      </div>
      {addComment && (
        <div className="z-10">
          <div className="fixed inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300">
            <ContainerModal
              onClose={() => {
                setAddComment((prevState) => !prevState);
              }}
              width="w-[1400px]"
            >
              <ModalInformation />
            </ContainerModal>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnView;
