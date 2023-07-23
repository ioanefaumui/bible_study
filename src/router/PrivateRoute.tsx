import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading";
import Header from "../components/Header";

export default function PrivateRoute() {
  const { user, loadingUser } = useContext(UserContext);
  if (loadingUser) {
    return <Loading />;
  }
  return user ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}
