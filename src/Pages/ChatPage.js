import { ChatEngine } from "react-chat-engine";

const ChatPage = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="2bae04c8-def6-4742-a71f-1242c1f42eaa"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

export default ChatPage;
