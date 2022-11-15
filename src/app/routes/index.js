import { Navigate, useLocation, useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import { isAuthenticated } from "../utils/auth";
import { path } from "./path";

export default function Router() {
  const location = useLocation();

  return useRoutes([
    {
      path: path.root,
      element: isAuthenticated() ? (
        <HomePage />
      ) : (
        // <Navigate to={path.login} state={{ from: location }} />
        <Login />
      ),
      children: [],
    },
    { path: path.all, element: <Navigate to={path.notFound} replace /> },
  ]);
}
