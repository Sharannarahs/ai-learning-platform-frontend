import { Navigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

const AdminProtectedRoute = ({ children }) => {
  const { admin } = useAdmin();

  if (!admin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
