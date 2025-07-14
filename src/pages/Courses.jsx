import CourseCard from "../components/CourseCard";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const Courses = () => {
  const { courses } = useAppContext();
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1 className="text-4xl font-medium ml-20 mt-14 mb-5 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 bg-clip-text text-transparent"> 
         Courses
        </h1>
        <h2 className="text-xl ml-20 bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 bg-clip-text text-transparent">
          Start your learning journey
        </h2>
      </div>

      {/* Search Bar */}
      <div>
        <input
          className="max-w-[400px] w-full ml-20 mt-20 border rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-white"
          type="text"
          placeholder="Search Course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Courses Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-20">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} /> //this course accessed in coursecard
          ))
        ) : (
          <p className="text-white text-lg col-span-full text-center">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;


// useAppCOntext -> course -> courseCard