import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function Chat() {
  return (
    <BodyWrapper>
      <div className="subcontainer"></div>
      <Outlet />
    </BodyWrapper>
  );
}

export default Chat;

const BodyWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #ff0099;
  background: -webkit-linear-gradient(to right, #493240, #ff0099);
  background: linear-gradient(to right, #493240, #ff0099);
  .subcontainer {
    display: grid;
    height: 85vh;
    width: 85vh;
    background-color: #131324;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1024px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
