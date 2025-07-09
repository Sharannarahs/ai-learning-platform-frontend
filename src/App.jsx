import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./components/Login";
import StudyPlanner from "./pages/StudyPlanner";
import PdfSummarizer from "./pages/PdfSummarizer";
import Chat from "./pages/Chat";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import { useAdmin } from "./context/AdminContext";

// admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AddCourse from "./pages/admin/AddCourse";
import RegisteredStudents from "./pages/admin/RegisteredStudents";

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === "/login";
  const isChat = location.pathname === "/chat";

  const { user } = useAppContext();

  const shouldHideNavbar = isAdminPage || isLoginPage;
  const shouldHideFooter = isAdminPage || isLoginPage || isChat;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#000000] to-[#323232] text-white">
      {!shouldHideNavbar && <Navbar />}
      <Toaster />

      <div className="flex-grow">
        <Routes>
          {/* User Routes */}
          <Route
            path="/"
            element={user ? <Navigate to="/courses" replace /> : <Home />}
          />

          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/course/:id"
            element={
              <ProtectedRoute>
                <CourseDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/study-planner"
            element={
              <ProtectedRoute>
                <StudyPlanner />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pdf-summarizer"
            element={
              <ProtectedRoute>
                <PdfSummarizer />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<Navigate to="add-course" />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="students" element={<RegisteredStudents />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default App;
