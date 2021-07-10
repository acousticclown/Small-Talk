import "./App.css";
import ChatPage from "./Pages/ChatPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  if (!localStorage.getItem("username")) {
    return <LoginPage />;
  }

  return <ChatPage />;
}

export default App;
