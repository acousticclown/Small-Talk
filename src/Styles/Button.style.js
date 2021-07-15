import styled from "styled-components";

export const MaterialButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #203685;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  border: 3px solid #fff;
  margin-top: auto;
  margin-bottom: -1rem;
`;

export const EnterChatButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0028aa;
  width: 15rem;
  height: 3rem;
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #fff;

  &:hover a {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const GoBackButton = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  left: 30px;
  height: 50px;
  width: 100px;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background-color: #016b01;
  }
`;
