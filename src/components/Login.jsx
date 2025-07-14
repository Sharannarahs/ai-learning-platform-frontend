import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setUser, navigate } = useAppContext();

  const [authState, setAuthState] = useState("login"); // 'login' or 'signup'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload =
    authState === "signup"
      ? { name, email, password }
      : { email, password };

  console.log(authState === "signup" ? "Signup:" : "Login:", payload);

  try {
    const url =
      authState === "signup"
        ? "http://localhost:4000/api/users/signup"
        : "http://localhost:4000/api/users/login";

    const { data } = await axios.post(url, payload, {
      withCredentials: true,
    });

    console.log("✅ Success:", data);

    setUser(data.user);
    localStorage.setItem("token", data.token);
    navigate("/");
  } catch (err) {
    console.error("❌ Error:", err);
    alert(err.response?.data?.message || "Something went wrong");
  }
};

  

  return (
    <div className="flex h-screen w-full">
      {/* Left Side Image */}
      <div className="hidden md:flex w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center bg-black">
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl text-slate-50 font-medium">
            {authState === "signup" ? "Sign up" : "Sign in"}
          </h2>
          <p className="text-sm text-slate-50 mt-3">
            {authState === "signup"
              ? "Create a new account to get started"
              : "Welcome back! Please sign in to continue"}
          </p>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-slate-400 text-center">
              {authState === "signup" ? "sign up" : "sign in"} with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          {/* Name */}
          {authState === "signup" && (
            <div className="flex items-center w-full bg-white border  h-12 
                rounded-full overflow-hidden pl-6 gap-2 mb-5
                 focus-within:ring-2 focus-within:ring-purple-300">
              <input
                type="text"
                placeholder="Full Name"
                className=" text-slate-800 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="flex items-center w-full bg-white border h-12 
                rounded-full overflow-hidden pl-6 gap-2 mb-5
                focus-within:ring-2 focus-within:ring-purple-300">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className=" text-slate-800 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center w-full bg-white border  h-12 
              rounded-full overflow-hidden pl-6 gap-2 mb-5
               focus-within:ring-2 focus-within:ring-purple-300">
            <svg className="bg-white"
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className=" text-slate-800 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-t from-[#4d009b] to-[#a847d9] hover:opacity-90 transition-opacity cursor-pointer"
          >
            {authState === "signup" ? "Sign up" : "Login"}
          </button>

          {/* Switch Auth State */}
          <p className="text-gray-500/90 text-sm mt-4">
            {authState === "signup" ? (
              <>
                Already have an account?{" "}
                <button
                  className="text-indigo-400 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => setAuthState("login")}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  className="text-indigo-400 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => setAuthState("signup")}
                >
                  Sign up
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
