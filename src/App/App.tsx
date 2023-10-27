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
import "react-toastify/dist/ReactToastify.css";
import SideBarUi from "../Pages/ProfilePages/ProfileSideBar/SideBarUi/SideBarUi";
import AccountInfo from "../Pages/ProfilePages/ProfileForms/AccountInfo/AccountInfo";
import SettingForm from "../Pages/ProfilePages/ProfileForms/SettingForm/SettingForm";
import UserInfo from "../Pages/ProfilePages/ProfileForms/UserInfo/UserInfo";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "../routes/PrivateRoute";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import BackUpEmail from "../Pages/AuthenticationPages/ForgetPasswordPage/BackUpEmail";

//--------Import Your Components Here!--------//

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  const events = [
    {
      title: "Event 1",
      start: "2023-10-05",
      end: "2023-10-10",
    },
  ];

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password/" element={<ResetPasswordPage />} />
          <Route path="/backuplink" element={<BackUpEmail />} />
          <Route path="/forget-password" element={<ForgetPassPage />} />
        </Route>
        <Route element={<BoardLayout />}>
          <Route
            path="boards/listview"
            element={
              <PrivateRoute path="/listview">
                <ListView />
              </PrivateRoute>
            }
          />
          <Route
            path="boards/columnView"
            element={
              <PrivateRoute path="/columnview">
                <ColumnView />
              </PrivateRoute>
            }
          />
          <Route
            path="boards/calendarview"
            element={
              <PrivateRoute path="/calendarview">
                <Calendar events={events} />
              </PrivateRoute>
            }
          />
          <Route
            path="/boards"
            element={
              <PrivateRoute path="/boards">
                <ColumnView />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="profile" element={<SideBarUi />}>
          <Route path="/profile" element={<UserInfo />} />
          <Route
            path="account-info"
            element={
              <PrivateRoute path="/account-info">
                <AccountInfo />
              </PrivateRoute>
            }
          />
          <Route
            path="account-setting"
            element={
              <PrivateRoute path="/account-setting">
                <SettingForm />
              </PrivateRoute>
            }
          />
          <Route
            path="account-user"
            element={
              <PrivateRoute path="/account-user">
                <UserInfo />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </>
  );
};

export default App;
