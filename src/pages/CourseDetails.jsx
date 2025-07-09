import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { parseYouTubeLink } from "../utils/youtubeUtils";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useAppContext();

  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-center p-4 text-red-500">
        Course not found!
      </div>
    );
  }

  const handleDownload = async (note) => {
    try {
      const response = await fetch(note.url);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${note.name}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download file.");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-medium bg-gradient-to-r from-[#5702ac] via-[#c909bc] to-[#6605c8] bg-clip-text text-transparent mb-10 mt-5">
        {course.name}
      </h1>

      <img
        src={course.image}
        alt={course.name}
        className="w-full h-64 object-contain rounded mb-6"
      />

      <div>
        <h1 className="text-2xl bg-gradient-to-r from-purple-700 via-purple-300 to-purple-700 bg-clip-text text-transparent">
          What you'll learn:
        </h1>
        <ul className="mb-10 mt-10 list-disc list-outside pl-5">
          <li className="mb-5 text-white">
            <span className="bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 bg-clip-text text-transparent">
              {course.content1}
            </span>
          </li>
          <li className="mb-5 text-white">
            <span className="bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 bg-clip-text text-transparent">
              {course.content2}
            </span>
          </li>
          <li className="mb-5 text-white">
            <span className="bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500 bg-clip-text text-transparent">
              {course.content3}
            </span>
          </li>
        </ul>
      </div>

      {/* Notes Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-700 via-purple-300 to-purple-700 bg-clip-text text-transparent mb-5">
          Notes
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-20">
          {course.notes.map((note, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-black/50 border border-purple-700 rounded p-2 hover:shadow mb-2"
            >
              <span>{note.name}</span>
              <button
                onClick={() => handleDownload(note)}
                className="text-blue-400 cursor-pointer"
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Playlist Section */}
      <div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-700 via-purple-300 to-purple-700 bg-clip-text text-transparent mb-5">
          Watch & Learn
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {course.playlist.map((link, idx) => {
            const { playlistId, videoId } = parseYouTubeLink(link);

            let embedUrl = "";
            if (playlistId) {
              embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
            } else if (videoId) {
              embedUrl = `https://www.youtube.com/embed/${videoId}`;
            }

            return (
              <iframe
                key={idx}
                src={embedUrl}
                title={`Video/Playlist ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded shadow border border-purple-200"
              ></iframe>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
