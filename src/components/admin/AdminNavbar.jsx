import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin"); // 👈 Always send admin to admin login page
  };

  return (
    <div className="flex justify-between items-center bg-gray-800/60 text-white p-4 shadow">
      <h1 className="text-lg font-bold">Hi, Admin</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;
