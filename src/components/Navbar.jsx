import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import assets from "../assets/assets";

const Navbar = () => {
  const { user, setUser, navigate } = useAppContext();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setShowMobileMenu(false);
    navigate("/login");
  };

  const handleHamburgerClick = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const renderAuthButton = () => {
    if (user) {
      return (
        <div className="hidden md:flex items-center gap-2">
          <span className="text-sm text-slate-300">{user.name || user.email}</span>
          <img
            src={assets.profile_icon  }
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-sm text-white px-2 py-1 rounded hover:text-red-400 transition cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9m0 0l3-3m-3 3l3 3"
              />
            </svg>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black border-2 border-slate-600 px-4 py-1 rounded-full text-sm font-medium w-32 mx-auto cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]"
        >
          Login
        </button>
      );
    }
  };

  return (
    <div className="w-full mt-4">
      <nav className="flex items-center justify-between border border-slate-600 px-6 py-4 rounded-full text-white text-sm bg-black/50 backdrop-blur w-full relative">
        <NavLink to={user ? "/courses" : "/login"} className="mr-2">
          <img src={assets.logo} alt="Logo" className="w-10 border rounded-md" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {user && (
            <>
              <NavLink
                to="/courses"
                className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
              >
                Courses
              </NavLink>

              <NavLink
                to="/pdf-summarizer"
                className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
              >
                PDF Summarizer
              </NavLink>

              <NavLink
                to="/chat"
                className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
              >
                Chat
              </NavLink>

              <NavLink
                to="/study-planner"
                className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
              >
                Study Planner
              </NavLink>
            </>
          )}

          {renderAuthButton()}
        </div>

        {/* Mobile - Hamburger & Avatar */}
        <div className="md:hidden flex items-center gap-2">
          {user ? (
            <>
              <button className="cursor-pointer" onClick={handleHamburgerClick}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-8 h-8 rounded-full border"
              />

              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm text-white px-2 py-1 rounded hover:text-red-400 transition cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black border-2 border-slate-600 px-4 py-1 rounded-full text-sm font-medium w-24 mx-auto cursor-pointer shadow-md transition hover:shadow"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {showMobileMenu && user && (
          <div className="absolute top-20 w-full max-w-xs bg-black/90 border border-slate-600 rounded-lg shadow-md text-white p-4 flex flex-col gap-3 z-50 md:hidden">
            <NavLink
              to="/courses"
              onClick={() => setShowMobileMenu(false)}
              className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
            >
              Courses
            </NavLink>

            <NavLink
              to="/pdf-summarizer"
              onClick={() => setShowMobileMenu(false)}
              className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
            >
              PDF Summarizer
            </NavLink>

            <NavLink
              to="/chat"
              className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            >
              Chat
            </NavLink>

            <NavLink
              to="/study-planner"
              onClick={() => setShowMobileMenu(false)}
              className="border-2 border-slate-600 px-4 py-1 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
            >
              Study Planner
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
