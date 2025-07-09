import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

export default function AdminLogin() {
  const { login } = useAdmin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    navigate("/admin/dashboard");
  };

  return (
    
    <div className="h-screen flex items-center justify-center text-white">
        
      <form onSubmit={handleSubmit} className="bg-gray-700/40 p-6 rounded space-y-4">
        <h1 className="text-xl">Admin Login</h1>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="
                p-2 w-full text-white 
                bg-black border border-gray-500 rounded 
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            "
            required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 w-full text-white 
                bg-black border border-gray-500 rounded 
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
        <button type="submit" className="bg-purple-700 px-4 py-2 rounded-full cursor-pointer hover:bg-purple-600 w-full">
          Login
        </button>
      </form>
    </div>
    
  );
}
