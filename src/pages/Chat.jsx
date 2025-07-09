import CommunityList from "../components/CommunityList";
import ChatRoom from "../components/ChatRoom";

const Chat = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <CommunityList />
      <ChatRoom />
    </div>
  );
};

export default Chat;
