import { useState, useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";
import assets from "../assets/assets";

export default function ChatRoom() {
  const { communityId, messages, setMessages } = useChat();
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const endOfMessagesRef = useRef(null);

  // scroll to bottom when messages/community changes
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, communityId]);

  if (!communityId) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a community to start chatting
      </div>
    );
  }

  const sendMessage = () => {
    if (!input.trim() && !file) return;

    let message = {
      sender: "You",
      text: input,
    };

    if (file) {
      message = {
        ...message,
        fileName: file.name,
        fileUrl: URL.createObjectURL(file), // URL.createObjectURL (temporary browser URL)
        fileType: file.type.startsWith("image/") ? "image" : "file",
      };
    }

    setMessages((prev) => [...prev, message]);

    setInput("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  return (
    <div className="flex flex-col h-screen w-full border-x border-gray-300 ">
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-slate-800/40 text-">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <strong className="text-purple-400">{m.sender}: </strong> 
            {m.text && <span>{m.text}</span>} {/* If the message has a .text field → render it inside a <span>. */}

            {/*
               Checks if there’s a file attached (m.fileUrl)
                And if the file type is an image (m.fileType === "image")
                src={m.fileUrl} → this is a temporary blob URL created earlier when file was uploaded.
            */}

            {m.fileUrl && m.fileType === "image" && (
              <div>
                <img
                  src={m.fileUrl}
                  alt={m.fileName}
                  className="max-w-xs mt-2 rounded"
                />
              </div>
            )}

            {/*
                Renders an <a> link:
                href={m.fileUrl} → download link to the file.
                download={m.fileName} → browser will download the file with this name.
                styled as blue & underlined for visibility.
            */}

            {m.fileUrl && m.fileType === "file" && (
              <div>
                <a
                  href={m.fileUrl}
                  download={m.fileName}
                  className="text-blue-400 underline"
                >
                  📄 {m.fileName}
                </a>
              </div>
            )}
          </div>
        ))}

        <div ref={endOfMessagesRef} />
      </div>

      {/* Input */}
      <div className="w-full p-4 flex gap-2 bg-gray-700/40 text-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded "
          placeholder="Type a message"
        />
        <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-1 py-3 rounded shadow">
            📁 Choose File
            <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
            />
            </label>

        <img onClick={sendMessage} src={assets.send_button2} alt="App Logo" className='w-12 cursor-pointer '/>
      </div>
    </div>
  );
}


/*

You type: Hello
You attach: image.jpg
The message becomes:

{
  sender: "You",
  text: "Hello",
  fileName: "image.jpg",
  fileUrl: "blob:http://...",
  fileType: "image"
}


*/