import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function PrivateRoute() {
  const { user, loadingUser } = useContext(UserContext);
  if (loadingUser) {
    return <div>Carregando...</div>;
  }
  return user ? <Outlet /> : <Navigate to="/" />;
}
