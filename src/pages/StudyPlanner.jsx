import React, { useState } from "react";
import { toast } from "react-hot-toast";

const StudyPlanner = () => {
  
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [schedule, setSchedule] = useState([]);

  const  handleGenerate = async () => {
    if(!topic || ! date){
        toast.error("Please enter a topic and select a target date!")
    } 
  

  toast.success("Generating your AI schedule...")

  const generated = [
      { day: "Day 1", task: `Read notes on ${topic}`, notes: "Admin notes for Day 1." },
      { day: "Day 2", task: `Practice exercises`, notes: "Admin notes for Day 2." },
      { day: "Day 3", task: `Review and test`, notes: "Admin notes for Day 3." },
    ];

  setTimeout(() => {
    setSchedule(generated);
    toast.success("Schedule generated successfully!")
  }, 1000)  
};
  
  return (
    <div>
      <div className="text-center items-center">
        <h1 className="mt-10 text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent text-center">AI Study Scheduler </h1>
        <p className="mb-6 text-center bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">Let AI create personalized study plans to optimize your learning</p>
      </div>
      <div className=" p-8 flex gap-12">
      
      {/* Left Panel */}
      <div className="w-1/3 bg-slate-800/30 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Create Study Plan</h2>

        <label className="block text-sm mb-1">Topic / Task:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="e.g., Data Structures"
        />

        <label className="block text-sm mb-1">Target Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-white"
        />

        <button
          onClick={handleGenerate}
          className="w-full  text-white py-2 rounded-full cursor-pointer bg-gradient-to-r from-purple-700 to-pink-500 hover:opacity-80 transition"
        >
          🧠Generate AI Schedule
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 bg-slate-800/30 p-6 rounded-xl shadow">
  <h2 className="text-xl font-semibold mb-4 ">Generated Schedule</h2>

  {schedule.length === 0 ? (
    <p className="text-gray-500">No schedule generated yet.</p>
  ) : (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="p-2 text-left underline text-purple-500">Day</th>
          <th className="p-2 text-left underline text-purple-500">Task</th>
          <th className="p-2 text-left underline text-purple-500">Notes</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, idx) => (
          <tr key={idx}>
            <td className="p-2">{item.day}</td>
            <td className="p-2">{item.task}</td>
            <td className="p-2">{item.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

      
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-40 w-full max-w-4xl px-4 text-center mx-auto justify-center">
      <div className="flex-1 bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-purple-300">📅 AI Study Scheduler</h3>
        <p className="text-sm text-gray-300 mt-2">
          Plan smarter, not harder.
          Enter your topic and deadline — and let AI craft a personalized study schedule with key notes.
          Stay organized, save time, and reach your goals efficiently.
        </p>
      </div>

      <div className="flex-1 bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-purple-300">🚀 Study Plan Genius</h3>
        <p className="text-sm text-gray-300 mt-2">
          Your personal study coach.
          Describe what you want to learn and when — AI builds a day-by-day schedule and pulls key notes to help you succeed.
        </p>
      </div>
    </div>


    </div>
    
  );
};

export default StudyPlanner;
