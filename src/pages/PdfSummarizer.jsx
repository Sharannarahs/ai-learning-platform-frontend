import React, { useState } from "react";
import { toast } from "react-hot-toast";

const PDFSummarizer = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ];

  const validateFile = (selected) => {
    if (!allowedTypes.includes(selected.type)) {
      toast.error("Only PDF, PPT, or Word files are allowed.")
      //setError("Only PDF, PPT, or Word files are allowed.");
      setFile(null);
      return false;
    }
    if (selected.size > 10 * 1024 * 1024) { // less than 10 mb
      toast.error("File size must be under 10MB.")
      //setError("File size must be under 10MB.");
      setFile(null);
      return false;
    }
    setError("");
    return true;
  };

  const handleFileChange = (e) => { // choose via input
    const selected = e.target.files[0];
    if (!selected) return;
    if (validateFile(selected)) setFile(selected);
  };

  const handleDrop = (e) => { // drag and drop
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (!dropped) return;
    if (validateFile(dropped)) setFile(dropped);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please upload a valid file.")
      //setError("Please upload a valid file.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await new Promise((res) => setTimeout(res, 2000));
      alert(`✅ Summary generated for: ${file.name}`);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start mt-10 min-h-screen  text-white p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-400 to-pink-600 bg-clip-text text-transparent text-center">
        AI Notes Summarizer
      </h1>

      <p className="mb-6 text-center bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
        Upload notes and get an instant AI-generated summary
      </p>

      {/* Upload Box */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("file-upload").click()}
        //🔹 document.getElementById("file-upload")
        // → finds the hidden <input> element on the page with id="file-upload"
        // </input>🔹 .click()
        // → programmatically “clicks” the <input>, which opens the OS file picker dialog.
        
        className="w-full max-w-2xl min-h-[200px] md:min-h-[250px] p-6 border-2 border-dashed border-purple-500 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition flex flex-col items-center justify-center text-center"
      >
        <p className="text-gray-300">Drag & drop your PDF, PPT, or Word file here</p>
        <p className="text-sm text-gray-500 mt-1">or click to select</p>

        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.ppt,.pptx"
        />
      </div>

      {/* Uploaded file info */}
      {file && (
        <p className="mt-4 text-green-400 text-center">
          ✅ Uploaded: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
        </p>
      )}

      {/* Error */}
      {error && <p className="mt-2 text-red-400 text-center">{error}</p>}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full max-w-2xl mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 hover:opacity-80 transition ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }cursor-pointer hover:bg-gray-700 transition`}
      >
        {loading ? "Generating..." : "🧠Generate AI Summary"}
      </button>

      {/* Extra cards below */}
      <div className="flex flex-col md:flex-row gap-4 mt-40 w-full max-w-4xl px-4">
        <div className="flex-1 bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-300">📝 Quick Quill</h3>
          <p className="text-sm text-gray-300 mt-2">
            Turn lengthy notes into bite-sized knowledge.
            Upload your file and let AI write the highlights.
            Study less, understand more, and ace your goals
          </p>
        </div>

        <div className="flex-1 bg-black/80 border border-purple-700 rounded-lg p-4 text-center hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-300">📚Summary Spark</h3>
          <p className="text-sm text-gray-300 mt-2">
            Upload your documents and relax — we’ve got it.
            AI scans and summarizes the essentials lightning fast.
            Perfect for students, professionals, and lifelong learners.


          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFSummarizer;
