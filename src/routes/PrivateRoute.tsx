import { Navigate } from "react-router-dom";

type IPrivateRoute = {
  children: React.ReactNode;
  path?: string;
};
const PrivateRoute = ({ children, path }: IPrivateRoute) => {
  const userIsLoggedIn = localStorage.getItem("accessToken");

  !userIsLoggedIn ? (
    <Navigate to={`/login?redirect=${path}`} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
