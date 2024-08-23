import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
const ProtectedRoute = ({ redirectTo = "/signin", children }) => {
  const { user } = useAuth();

  if (Object.keys(user).length === 0) {
    console.log("user", user);

    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
