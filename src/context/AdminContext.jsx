import { createContext, useContext, useState } from "react";

const AdminContext = createContext();
export const useAdmin = () => useContext(AdminContext);

export default function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  const login = (info) => setAdmin(info);
  const logout = () => setAdmin(null);

  return (
    <AdminContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}
