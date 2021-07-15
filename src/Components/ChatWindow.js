import { useEffect, useState, useRef } from "react";
import useFirestoreQuery from "../Hooks/useFirestoreQuery";
import { db } from "../Configs/Firebase";
import Message from "./Message";
import { ChatContainer } from "../Styles/Container.style";
import GoBack from "./GoBack";
import MessageInput from "./MessageInput";

const ChatWindow = ({ user, chat, history }) => {
  const messagesRef = db.collection(`talks/${chat}/messages`);
  const messages = useFirestoreQuery(
    messagesRef.orderBy("createdAt", "desc").limit(100)
  );

  return (
    <div>
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
      </ChatContainer>
      <MessageInput user={user} messageRef={messagesRef} />
    </div>
  );
};

export default ChatWindow;
