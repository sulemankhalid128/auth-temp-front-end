
import { useLocation, Navigate, useParams } from "react-router-dom";
import { getToken } from "../utils";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();



  if (!getToken()) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}