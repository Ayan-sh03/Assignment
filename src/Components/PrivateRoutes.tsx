import { Navigate, Outlet } from "react-router-dom";
import UserType from "./Login";

const PrivateRoutes = () => {
  const authJSON = localStorage.getItem("auth");
  const auth = authJSON ? JSON.parse(authJSON) : null;

  return auth && auth.name ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
