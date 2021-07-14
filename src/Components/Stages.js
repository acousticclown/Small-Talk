import { useState, useEffect } from "react";
import { StagesContainer } from "../Styles/Container.style.js";
import Header from "./Header.js";
import Stage from "./Stage";

const Stages = ({ talks, getStageID, history }) => {
  const [id, setId] = useState("bh");

  useEffect(() => {
    const getIt = (childData) => {
      getStageID(childData);
    };

    // console.log(id);

    getIt(id);
  }, [id]);

  return (
    <>
      <Header />
      <StagesContainer>
        {talks.map((talk) => (
          <Stage
            key={talk.id}
            {...talk}
            setID={(id) => setId(id)}
            history={history}
          />
        ))}
      </StagesContainer>
    </>
  );
};

export default Stages;
