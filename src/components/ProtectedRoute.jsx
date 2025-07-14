import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => { //children → the component/page you’re trying to render inside this route.
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/" replace />; //The replace prop means that the current route is replaced in browser history — so the user cannot hit “back” and return to the protected page.
  }

  return children;
};

export default ProtectedRoute;


