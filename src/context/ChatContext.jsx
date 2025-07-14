import { createContext, useContext, useState, useEffect } from "react";
import socket from "../socket.js";
import assets from "../assets/assets"; // ✅ import your dummy messages

const ChatContext = createContext();
export const useChat = () => useContext(ChatContext);

export default function ChatProvider({ children }) {
  const [communityId, setCommunityId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [unreadCounts, setUnreadCounts] = useState({}); //{ community1: 3, community2: 0, ... }
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

  //function to select a community
  const selectCommunity = (id) => {
    if (communityId) { // already in a room
      socket.emit("leave-community", communityId);
    }

    setCommunityId(id); // after leaving new community

    // ✅ load dummy messages for the selected community
    setMessages(assets.dummyMessages[id] || []);

    setMedia([]); // since new room media cleared for previous room
    setUnreadCounts((prev) => ({ ...prev, [id]: 0 }));

    socket.emit("join-community", id); //  Sends a join-community event to the server with the new community id.
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


/*

Example:

Current: communityId = "dsa"

You click on: id = "ml"

It runs:
socket.emit("leave-community", "dsa")

-------------

You clicked "ml".

communityId becomes: "ml"

-------------------------

✅ Loads some dummy (predefined) messages for the selected community from your assets.

If none exist in assets.dummyMessages, it sets an empty array.

assets.dummyMessages = {
  dsa: [{ sender: "Bot", text: "Welcome to DSA!" }],
  ml:  [{ sender: "Bot", text: "Welcome to ML!" }]
}

If you click on "ml", then:
setMessages([{ sender: "Bot", text: "Welcome to ML!" }])


*/