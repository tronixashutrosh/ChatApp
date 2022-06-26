import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetpassPage from "../Pages/ForgetpassPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";

function Routelist() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="forgetpassword" element={<ForgetpassPage />} />
    </Routes>
  );
}

export default Routelist;
