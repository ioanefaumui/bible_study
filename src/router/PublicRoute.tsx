import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";

export default function PublicRoute() {
  const { user, loadingUser } = useContext(UserContext);
  if (loadingUser) {
    return <Loading />;
  }
  return user ? <Navigate to={"/temas"} /> : <Outlet />;
}
