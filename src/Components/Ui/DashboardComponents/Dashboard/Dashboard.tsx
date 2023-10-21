import SideBarSection from "../../SideBar/SideBarSection/SideBarSection";
import DashboardWorkspace from "../DashboarWorkspace/DashboardWorkspace";

const Dashboard = (): JSX.Element => {
  const workspaces = [
    {
      id: 0,
      name: "درس مدیریت پروژه",
      color: "orange",
      projects: [
        {
          id: 0,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 1,
          projectName: "پروژه دوم ",
          icon: false,
        },
        {
          id: 2,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 3,
          projectName: "ساختن پروژه جدید",
          icon: true,
        },
      ],
    },
    {
      id: 1,
      name: "درس کامپایلر",
      color: "teal",
      projects: [
        {
          id: 1,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 2,
          projectName: "پروژه دوم ",
          icon: false,
        },
        {
          id: 3,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 4,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 5,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 6,
          projectName: "ساختن پروژه جدید",
          icon: true,
        },
      ],
    },
    {
      id: 2,
      name: "درس ممد اینا",
      color: "orange",
      projects: [
        {
          id: 1,
          projectName: "پروژه اول ",
          icon: false,
        },
        {
          id: 2,
          projectName: "پروژه دوم ",
          icon: false,
        },
        {
          id: 3,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 4,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 5,
          projectName: "پروژه سوم ",
          icon: false,
        },
        {
          id: 6,
          projectName: "ساختن پروژه جدید",
          icon: true,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-4">
      <div className="grid col-span-3 gap-s pt-xl ps-xl h-screen me-s">
        {/* DashboardWorkspace */}
        {workspaces.map((workspace) => (
          <DashboardWorkspace
            key={workspace.id}
            projects={workspace.projects}
            workspaceName={workspace.name}
            workspaceColor={workspace.color}
          />
        ))}
      </div>
      {/* SideBar Section */}
      <SideBarSection />
    </div>
  );
};

export default Dashboard;
