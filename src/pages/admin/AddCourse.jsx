import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const { addCourse } = useAppContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    content1: "",
    content2: "",
    content3: "",
    notes: [],
    playlist: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddNote = () => {
    const noteName = prompt("Note name?");
    const noteUrl = prompt("Note URL?");
    if (noteName && noteUrl) {
      setForm({
        ...form,
        notes: [...form.notes, { name: noteName, url: noteUrl }],
      });
    }
  };

  const handleAddPlaylist = () => {
    const link = prompt("YouTube link?");
    if (link) {
      setForm({
        ...form,
        playlist: [...form.playlist, link],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      ...form,
      id: Date.now(),
    };

    addCourse(newCourse);
    alert("Course added!");
    navigate("/admin/dashboard");
  };

  return (
    <div className="p-6 max-w-xl mx-auto ">
      <h1 className="text-2xl mb-4">Add Course</h1>
      <form onSubmit={handleSubmit} className="space-y-3  ">
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full bg-black p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full p-2 bg-black rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          className="w-full p-2 bg-black rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          name="content1"
          placeholder="Content Point 1"
          value={form.content1}
          onChange={handleChange}
          className="w-full p-2 bg-black rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          name="content2"
          placeholder="Content Point 2"
          value={form.content2}
          onChange={handleChange}
          className="w-full p-2 bg-black rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          name="content3"
          placeholder="Content Point 3"
          value={form.content3}
          onChange={handleChange}
          className="w-full p-2 bg-black rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="button"
          onClick={handleAddNote}
          className="bg-purple-700 px-3 py-1 rounded-full mr-5 cursor-pointer"
        >
          Add Note
        </button>
        <button
          type="button"
          onClick={handleAddPlaylist}
          className="bg-purple-700 px-3 py-1 rounded-full mr-5 cursor-pointer"
        >
          Add YouTube Link
        </button>
        <button
          type="submit"
          className="bg-green-600 px-3 py-1 rounded-full mr-5 cursor-pointer hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-4">
        <h2 className="text-lg">Notes</h2>
        <ul>
          {form.notes.map((n, i) => (
            <li key={i}>{n.name} - {n.url}</li>
          ))}
        </ul>
        <h2 className="text-lg mt-2">Playlist Links</h2>
        <ul>
          {form.playlist.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddCourse;
