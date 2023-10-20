import BoardProjectList from "../BoardProjectList/BoardProjectList";

const ListView = () => {
  // TODO:Handling Components TS
  return (
    <div className="flex flex-col gap-y-6">
      <BoardProjectList projectName="پروژه اول" />
      {/* <BoardProjectList projectName="درس کامپایلر" /> */}
      {/* <BoardProjectList projectName="مدیریت پروژه" /> */}
    </div>
  );
};

export default ListView;
