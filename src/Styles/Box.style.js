import styled from "styled-components";

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  width: 100%;

  h3 {
    font-size: 25px;
    margin-bottom: 1rem;
  }

  input {
    height: 3.2rem;
    width: 95%;
    outline: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
  }
`;

export const AvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  width: 100%;

  h3 {
    font-size: 25px;
    margin-bottom: 1rem;
  }

  input {
    opacity: 0;
    height: 3rem;
    position: absolute;
    margin-top: 3rem;
    margin-left: 5rem;
    z-index: 1;
    cursor: pointer;

    &:hover label {
      transform: scale(1.02);
      outline: 1px solid #000;
    }
  }

  label {
    display: block;
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    background: linear-gradient(40deg, #3682f5, #7873f5);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    transition: transform 0.2s ease-out;
  }
`;
