import React from "react";
import { Container, StageContainer } from "../Styles/Container.style.js";
import useFirestoreQuery from "../Hooks/useFirestoreQuery";
import { db } from "../Configs/Firebase";
import { Link } from "react-router-dom";
import { EnterChatButton } from "../Styles/Button.style.js";

const Stage = ({ name, imageURL, id, setID, createdBy, history }) => {
  return (
    <StageContainer backgroundColor="grey">
      <div>
        <img src={imageURL} />
      </div>
      <div>
        <h4>{name}</h4>
        {/* <h6>Admin - {createdBy}</h6> */}
      </div>
      <div>
        <EnterChatButton
          onClick={() => {
            setID(id);
            history.push("/");
            history.goBack();
          }}
        >
          <Link to={`/${id}`}>Enter Chat</Link>
        </EnterChatButton>
      </div>
    </StageContainer>
  );
};

export default Stage;
