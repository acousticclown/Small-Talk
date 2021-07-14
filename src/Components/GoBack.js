import { GoBackButton } from "../Styles/Button.style";

const GoBack = ({ history }) => {
  return (
    <GoBackButton onClick={() => history.goBack()}>
      <span>Back</span>
    </GoBackButton>
  );
};

export default GoBack;
