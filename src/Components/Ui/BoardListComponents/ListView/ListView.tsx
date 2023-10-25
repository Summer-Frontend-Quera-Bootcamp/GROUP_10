import BoardProjectList from "../BoardProjectList/BoardProjectList";

const ListView = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <BoardProjectList projectName="پروژه اول" />
      <BoardProjectList projectName="درس کامپایلر" />
      <BoardProjectList projectName="مدیریت پروژه" />
    </div>
  );
};

export default ListView;
