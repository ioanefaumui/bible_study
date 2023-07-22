import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ThemesPage from "../pages/ThemesPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [{ path: "/", element: <LoginPage /> }],
  },
  {
    path: "/temas",
    element: <PrivateRoute />,
    children: [{ path: "/temas", element: <ThemesPage /> }],
  },
]);

export default router;
