import { Outlet, NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800/50  text-white flex flex-col">
        <div className="text-xl font-bold p-4 border-b border-gray-700">
          Dashboard
        </div>
        <NavLink
          to="add-course"
          className="px-4 py-2 hover:bg-gray-700"
        >
          Add Courses / Notes
        </NavLink>
        <NavLink
          to="students"
          className="px-4 py-2 hover:bg-gray-700"
        >
          Registered Students
        </NavLink>
      </div>

      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
