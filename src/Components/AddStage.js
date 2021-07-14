import { useContext, useState } from "react";
import { db } from "../Configs/Firebase";
import { NewStageContainer } from "../Styles/Container.style";
import { AuthContext } from "../Contexts/AuthContext";

const AddStage = ({ history }) => {
  const [name, setName] = useState("");

  const { currentUser } = useContext(AuthContext);

  const collectionRef = db.collection(`talks`);

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnSubmit = () => {
    collectionRef.add({
      name: name,
      imageURL: "https://picsum.photos/100",
      createdBy: currentUser.displayName,
    });

    history.push("/");
  };

  return (
    <NewStageContainer>
      <h2>New Stage</h2>
      <div>
        <h3>Name</h3>
        <input onChange={handleOnChange} type="text" />
      </div>
      <div>
        <h3>Image</h3>
        <input type="file" />
      </div>
      <button onClick={handleOnSubmit}>Create</button>
    </NewStageContainer>
  );
};

export default AddStage;
