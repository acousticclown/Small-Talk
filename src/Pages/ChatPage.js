import { useEffect, useState, useRef, useContext } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import ChatWindow from "../Components/ChatWindow";
import Stages from "../Components/Stages";
import { AuthContext } from "../Contexts/AuthContext";
import { db } from "../Configs/Firebase";
import useFirestoreQuery from "../Hooks/useFirestoreQuery";

const ChatPage = ({ history }) => {
  const [chat, setChat] = useState("temp");

  const { path } = useRouteMatch();

  const { currentUser } = useContext(AuthContext);

  const talkRef = db.collection(`talks`);
  const talks = useFirestoreQuery(talkRef);

  const getStage = (childData) => {
    setChat(childData);
  };

  return (
    <div className="chat-page">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Stages {...props} talks={talks} getStageID={getStage} />
          )}
        />
        <Route
          exact
          path={`${path}:id`}
          render={(props) => (
            <ChatWindow {...props} chat={chat} user={currentUser} />
          )}
        />
      </Switch>
    </div>
  );
};

export default ChatPage;
