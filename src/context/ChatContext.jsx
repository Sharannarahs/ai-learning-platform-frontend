import { createContext, useContext, useState, useEffect } from "react";
import socket from "../socket.js";
import assets from "../assets/assets"; // ✅ import your dummy messages

const ChatContext = createContext();
export const useChat = () => useContext(ChatContext);

export default function ChatProvider({ children }) {
  const [communityId, setCommunityId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [unreadCounts, setUnreadCounts] = useState({});
  const [media, setMedia] = useState([]);

  useEffect(() => {
    socket.connect();

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);

      if (msg.fileUrl) {
        setMedia((prev) => [...prev, msg]);
      }

      if (msg.communityId !== communityId) {
        setUnreadCounts((prev) => ({
          ...prev,
          [msg.communityId]: (prev[msg.communityId] || 0) + 1,
        }));
      }
    });

    return () => {
      socket.off("receive-message");
      socket.disconnect();
    };
  }, []);

  const selectCommunity = (id) => {
    if (communityId) {
      socket.emit("leave-community", communityId);
    }

    setCommunityId(id);

    // ✅ load dummy messages for the selected community
    setMessages(assets.dummyMessages[id] || []);

    setMedia([]);
    setUnreadCounts((prev) => ({ ...prev, [id]: 0 }));

    socket.emit("join-community", id);
  };

  return (
    <ChatContext.Provider
      value={{
        socket,
        communityId,
        messages,
        setMessages,
        unreadCounts,
        selectCommunity,
        media,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
