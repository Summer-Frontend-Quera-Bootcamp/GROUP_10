import { PropsWithChildren } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ForgetPassPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from "../Pages/AuthenticationPages";
import Dashboard from "../Components/Ui/DashboardComponents/Dashboard/Dashboard";
import BoardLayout from "../Layouts/BoardLayout/BoardLayout";
import { Calendar } from "../Components/Ui/CalendarView";
import ListView from "../Components/Ui/BoardListComponents/ListView/ListView";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import ColumnView from "../Components/Ui/ColumnView/ColumnView";

import SideBarUi from "../Components/Ui/ProfilePages/ProfileSideBar/SideBarUi/SideBarUi";
import AccountInfo from "../Components/Ui/ProfilePages/ProfileForms/AccountInfo/AccountInfo";
import SettingForm from "../Components/Ui/ProfilePages/ProfileForms/SettingForm/SettingForm";
import UserInfo from "../Components/Ui/ProfilePages/ProfileForms/UserInfo/UserInfo";

//--------Import Your Components Here!--------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  const events = [
    {
      title: "Event 1",
      start: "2023-10-05",
      end: "2023-10-11",
    },
  ];

  // NewTask Modal : Arman
  // DropDown : Arman
  // Container Col Task : Arman
  // Tags : Arman
  
  // TODO:ColumnMoreModal UI Bug should to fix
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="forget-password" element={<ForgetPassPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/boards" element={<BoardLayout />}>
          <Route path="listView" element={<ListView />}></Route>
          <Route path="columnView" element={<ColumnView />}></Route>
          <Route
            path="calendarView"
            element={<Calendar events={events} />}
          ></Route>
        </Route>
        <Route path="/profile" element={<SideBarUi />}>
          <Route path="account-info" element={<AccountInfo />}></Route>
          <Route path="account-setting" element={<SettingForm />}></Route>
          <Route path="account-user" element={<UserInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
