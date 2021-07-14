import { useEffect, useState, useRef } from "react";
import useFirestoreQuery from "../Hooks/useFirestoreQuery";
import { db } from "../Configs/Firebase";
import firebase from "firebase/app";
import Message from "./Message";
import {
  ChatContainer,
  MessageInputContainer,
} from "../Styles/Container.style";
import GoBack from "./GoBack";

const ChatWindow = ({ user = null, chat, history }) => {
  const messagesRef = db.collection(`talks/${chat}/messages`);
  const messages = useFirestoreQuery(
    messagesRef.orderBy("createdAt", "desc").limit(100)
  );

  const [newMessage, setNewMessage] = useState("");

  const inputRef = useRef();
  const bottomListRef = useRef();

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage("");
      // Scroll down to the bottom of the list
      bottomListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ChatContainer>
      <GoBack history={history} />
      <h1>Welcome 🙏 This is the start of this Stage</h1>
      <ul>
        {messages
          ?.sort((first, second) =>
            first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
          )
          ?.map((message) => (
            <li key={message.id}>
              <Message {...message} />
            </li>
          ))}
      </ul>
      <div ref={bottomListRef} />
      <MessageInputContainer className="mb-6 mx-4">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-row bg-gray-200 dark:bg-coolDark-400 rounded-md px-4 py-3 z-10 max-w-screen-lg mx-auto dark:text-white shadow-md"
        >
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Type your message here..."
            className="flex-1 bg-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!newMessage}
            className="uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Send
          </button>
        </form>
      </MessageInputContainer>
    </ChatContainer>
  );
};

export default ChatWindow;
