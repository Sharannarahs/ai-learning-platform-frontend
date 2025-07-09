import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="
      relative flex flex-col text-left text-sm text-gray-100
    rounded-lg shadow-sm max-w-80 border-2 border-white/30 bg-black
    transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-lg hover:-translate-y-1
    ">
      <img
        className="rounded-t-md w-full h-40 object-contain bg-gradient-to-r from-[rgb(65,1,95)] via-[#000000] to-[rgb(65,1,95)]  p-1"
        src={course.image}
        alt={course.name}
      />

      <div className="flex flex-col justify-between h-full p-5">
        <h2 className="text-lg font-bold mb-2">{course.name}</h2>
        <p className="mb-4">{course.description}</p>
        <button
          type="button"
          onClick={handleViewCourse}
          className="mt-auto bg-gradient-to-t  from-[#4d009b] to-[#a847d9] text-white font-medium rounded-full px-6 py-1.5 hover:text-white-600 transition hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)] cursor-pointer"
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
