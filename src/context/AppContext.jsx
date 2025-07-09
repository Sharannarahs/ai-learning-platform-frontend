import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [courses, setCourses] = useState([]);

  const { dummyCourses } = assets;

  

  useEffect(() => {
    setCourses(dummyCourses);
  }, []);

  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  };

  const value = {
    user,
    setUser,
    isAdmin,
    setIsAdmin,
    courses,
    navigate,
    setCourses,
    addCourse,
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
