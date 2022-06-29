import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function Chat() {
  return (
    <BodyWrapper>
      Chat
      <Link to="/chat/account"></Link>
      <Outlet />
    </BodyWrapper>
  );
}

export default Chat;

const BodyWrapper = styled.div`
  height: 100vh;
  background: #ff0099;
  background: -webkit-linear-gradient(to right, #493240, #ff0099);
  background: linear-gradient(to right, #493240, #ff0099);
`;
