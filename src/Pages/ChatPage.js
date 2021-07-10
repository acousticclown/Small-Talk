import { ChatEngine } from "react-chat-engine";

const ChatPage = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.PROJECT_ID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

export default ChatPage;
