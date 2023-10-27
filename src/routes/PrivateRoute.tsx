import { Navigate } from "react-router-dom";

type ProtectedProps = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path }: ProtectedProps) => {
  const isLoggedIn = localStorage.getItem("authToken");

  if (!isLoggedIn) {
    return <Navigate to={`/login?redirect=${path}`} replace />;
  }
  return children;
};

export default PrivateRoute;