import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../Components/Account";
import Chat from "../Pages/Chat";
import ForgetpassPage from "../Pages/ForgetpassPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import PrivateRoute from "./PrivateRoute";

function Routelist() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="chat" element={<Chat />}>
          <Route path="account" element={<Account />} />
        </Route>
      </Route>
      <Route path="signup" element={<SignupPage />} />
      <Route path="forgetpassword" element={<ForgetpassPage />} />
    </Routes>
  );
}

export default Routelist;
