import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");

  const heroText = `Your one-stop platform to learn, collaborate, and grow. 
Find high-quality notes, curated video playlists, and connect with peers to master your courses with confidence.`;

  // typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(heroText.slice(0, index + 1));
      index++;
      if (index === heroText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#3e007c] via-[#c909bc] to-[#6605c8] bg-clip-text text-transparent">
          Welcome to Narahs Academy!
        </h1>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 bg-clip-text text-transparent">
          AI-Powered Education
        </h1>
        <p className="text-lg max-w-2xl mx-auto min-h-[100px] bg-gradient-to-r from-purple-700 via-purple-300 to-purple-700 bg-clip-text text-transparent">
          {displayedText}
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-center text-2xl mb-6  bg-gradient-to-r from-[#3e007c] via-[#c909bc] to-[#6605c8] bg-clip-text text-transparent">
          Our platform combines traditional learning with cutting-edge AI technology to enhance your educational experience
        </h2>
      </div>

     <div className="flex border-2 bg-gradient-to-r from-[#3e007c] via-[#c909bc] to-[#6605c8] border-purple-700 rounded p-10 justify-evenly mb-20 ">
      <div>
        <h1 className="text-4xl w-1/2 bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ababab] bg-clip-text text-transparent">Start your journey with AI-powered learning today!</h1>

      <p className="w-100 mt-5 bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ababab] bg-clip-text text-transparent">
        Get exam-ready with AI: quick notes, curated YouTube resources, smart study plans, summaries, and real-time chat to clear doubts.
      </p>
      </div>
      <div >
        <NavLink to="/login">
          <button className="mr-10 mt-20 bg-gradient-to-t from-[#4d009b] to-[#a847d9] border-1 border-purple-400 rounded-full hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer p-2">
            Get Started!!!
          </button>
        </NavLink>
      </div>
      

     </div>
        


      {/* New Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-300">📚Course Management</h3>
          <p className="text-sm text-gray-300 mt-2">
            Organize, track, and manage your courses seamlessly with ease.
          </p>
        </div>

        <div className="bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-300">🧠AI-Powered Summaries</h3>
          <p className="text-sm text-gray-300 mt-2">
            Get concise, AI-generated summaries to save time and learn efficiently.
          </p>
        </div>

        <div className="bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-300">💬Real-Time Chat</h3>
          <p className="text-sm text-gray-300 mt-2">
            Collaborate and communicate with peers instantly via our chat.
          </p>
        </div>

        <div className="bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-300">⏳Smart Study Planner</h3>
          <p className="text-sm text-gray-300 mt-2">
            Plan and schedule your studies smartly to achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
