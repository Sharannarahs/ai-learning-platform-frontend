import React from "react";
import { useChat } from "../context/ChatContext";

const CommunityList = () => {
  const { selectCommunity, unreadCounts } = useChat();

  const communities = [
    { id: "dsa", name: "DSA" },
    { id: "ml", name: "Machine Learning" },
    { id: "web", name: "Web Development" },
  ];

  return (
    <div className="w-1/4 bg-slate-800/40 text-white p-4">
      <h2 className="bg-gradient-to-r from-purple-600 via-purple-400 to-pink-600 bg-clip-text text-transparent text-2xl mb-4 font-medium ">Communities</h2>
      <ul>
        {communities.map((c) => (
          <li
            key={c.id}
            onClick={() => selectCommunity(c.id)}
            className="p-2 cursor-pointer hover:bg-slate-600 rounded flex justify-between"
          >
            {c.name}
            {unreadCounts[c.id] > 0 && (
              <span className="bg-green-500 rounded-full px-2 text-xs">
                {unreadCounts[c.id]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
