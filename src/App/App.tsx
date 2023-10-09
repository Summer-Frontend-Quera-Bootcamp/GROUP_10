import { PropsWithChildren } from "react";
import "./App.css";

//import { ForgetPassPage } from "../Pages/AuthenticationPages";

import UserInfo from "../Components/Form/UserInfo/UserInfo";
// import AccountInfo from "../Components/Form/AccountInfo/AccountInfo";
// import SettingForm from "../Components/Form/SettingForm/SettingForm";
// import NavBar from "../Components/Ui/NavBar";
// import FilterModal from "../Components/Ui/FilterView/FilterModal";

interface IPropsApp extends PropsWithChildren {}
const App: React.FC<IPropsApp> = (/*props: IPropsApp*/): JSX.Element => {
  return (
    <>
      {/*<ForgetPassPage />*/}

      <UserInfo />
      {/* <AccountInfo /> */}
      {/* <SettingForm /> */}
      {/* <NavBar /> */}
    </>
  );
};

export default App;
