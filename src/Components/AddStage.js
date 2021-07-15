import { useContext, useState } from "react";
import { db } from "../Configs/Firebase";
import { NewStageBox, NewStageContainer } from "../Styles/Container.style";
import { AuthContext } from "../Contexts/AuthContext";
import { MaterialButton } from "../Styles/Button.style";
import { AvatarBox, NameBox } from "../Styles/Box.style";

const AddStage = ({ history }) => {
  const [name, setName] = useState("");

  const { currentUser } = useContext(AuthContext);

  const collectionRef = db.collection(`talks`);

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!name) {
      alert("Name can't be empty");
      return;
    }
    collectionRef.add({
      name: name,
      imageURL: "https://picsum.photos/100",
      createdBy: currentUser.displayName,
    });

    history.push("/");
  };

  return (
    <NewStageContainer>
      <NewStageBox>
        <h2>Create New Stage</h2>
        <NameBox>
          <h3>Name</h3>
          <input onChange={handleOnChange} type="text" />
        </NameBox>
        <AvatarBox>
          <h3>Avatar</h3>
          <input type="file" className="file" />
          <label for="file">Select file</label>
        </AvatarBox>
        <MaterialButton onClick={handleOnSubmit}>Create</MaterialButton>
      </NewStageBox>
    </NewStageContainer>
  );
};

export default AddStage;
