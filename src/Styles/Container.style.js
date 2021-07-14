import styled from "styled-components";

export const Container = styled.div``;

export const StagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StageContainer = styled.div`
  align-items: center;
  background-color: #00196d;
  border: 8px solid #00165e;
  color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 18rem;
  min-width: 15rem;
  margin: 2rem;
  padding: 0 0rem;
  box-shadow: 0 0 0 4px hsl(0, 0%, 80%), 0 0 0 7px hsl(0, 0%, 90%);

  img {
    width: 15rem;
    height: 8rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid #fff;
  }

  h4 {
    font-size: 1.4rem;
  }
`;

export const NewStageContainer = styled.div`
  padding: 3rem;
  min-height: 60vh;
  min-width: 40vw;
  background-color: #007460;
  color: #fff;
  position: absolute;
  top: 20%;
  left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2f4f4f;
  min-height: 100vh;
  align-items: center;
  padding: 1.5rem 3rem;

  h1 {
    color: #fff;
    margin-top: 4rem;
    margin-bottom: 12px;
  }

  ul {
    min-width: 70vw;
    margin-bottom: 60px;
  }

  li {
    list-style-type: none;
  }
`;

export const ChatMessage = styled.div`
  display: flex;
  padding: 1.3rem 0.5rem;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 8px;

  &:hover {
    backdrop-filter: brightness(80%);
  }

  img {
    border-radius: 50%;
    margin-right: 20px;
  }
  p {
    color: #f7f7f7;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  p {
    color: #7b93ff;
    font-weight: bold;
  }

  span {
    margin-left: 10px;
    color: #9c9c9c;
  }
`;

export const MessageInputContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  justify-content: center;
  background-color: #2f4f4f;

  form {
    display: flex;
    margin: 10px 0;
    background-color: transparent !important;

    input {
      width: 70vw;
      padding: 20px;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
      display: flex;
      margin: 0;
      outline: none;
    }

    button {
      width: 8rem;
      text-transform: uppercase;
      color: #300000;
      background-color: #2f4f4f;
      transition: all 300ms ease;
      border-bottom-right-radius: 12px;
      border-top-right-radius: 12px;
      color: #fff;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
