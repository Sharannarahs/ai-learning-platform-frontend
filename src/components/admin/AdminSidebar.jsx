import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className=" text-white w-48 h-screen p-4 space-y-4">
      <NavLink to="/admin/dashboard/add-course" className="block">➕ Add Course</NavLink>
      <NavLink to="/admin/dashboard/students" className="block">👥 Registered Students</NavLink>
    </div>
  );
}
