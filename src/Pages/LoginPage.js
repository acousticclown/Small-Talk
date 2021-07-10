import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": process.env.PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username / password => chatengine => give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      setUsername("");
      setPassword("");
      setError("Wait... Staging You In 🤗");

      window.location.reload();
    } catch (error) {
      // error => try with new username
      setError("OOPS, Incorrect Credentials....Try Again");
      console.log(error);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Small Talk</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <div>
              <span className="error">{error}</span>
            </div>
            <button type="submit" className="button">
              <span>Enter Into Small Talk</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
