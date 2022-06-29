import React, { useState } from "react";
import Login from "../Animation/Login/Login";
import bgi from "../assets/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { loginRoute } from "../Utils/APIRoutes";

function LoginPage() {
  const navigate = useNavigate();
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [isLogin, setIsLogin] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (handleValidation()) {
      const { username, password, email } = Values;
      const { data } = await axios.post(loginRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        sessionStorage.setItem("auth", "false");
        Swal.fire({
          icon: "error",
          title: "Oppss!",
          text: data.msg,
          timer: 1500,
          showConfirmButton: false,
        });
      }
      if (data.status === true) {
        sessionStorage.setItem("auth", "true");
        navigate("/chat", { replace: false });
      }
    }
  }

  function handleChange(e) {
    setValues({ ...Values, [e.target.name]: e.target.value });
  }

  function handleValidation() {
    const { username, password } = Values;
    if (username === "") {
      Swal.fire({
        icon: "warning",
        title: "Oopss!",
        text: "Username or Email is required",
        timer: 1500,
        showConfirmButton: false,
      });
      return false;
    } else if (password === "") {
      Swal.fire({
        icon: "warning",
        title: "Oopss!",
        text: "Password is required",
        timer: 1500,
        showConfirmButton: false,
      });
      return false;
    }
    return true;
  }

  return (
    <>
      <div
        className="bg-center bg-no-repeat  h-[100vh] flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${bgi})` }}
      >
        <div className="my-[125px] items-center">
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="border-solid border-black border-2 rounded flex flex-col items-center w-[16rem]">
              <h1 className="mb-[1.5rem] font-bold">Login to your Account</h1>

              <Login />

              <div className="mb-[7px] mt-[10px]">
                <label htmlFor="email" className="flex font-bold">
                  Username
                </label>
                <input
                  type="text"
                  className="w-[12rem] rounded  "
                  id="username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="flex font-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="w-[12rem] rounded"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="border-white border-2 rounded-md font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[4rem] mb-[1rem]"
              >
                Login
              </button>

              <div className="flex flex-col text-white ">
                <Link to="/signup" className="hover:text-violet-300">
                  Don't have account ?
                </Link>
                <Link
                  to="/forgetpassword"
                  className="hover:text-violet-300 mb-[1rem]"
                >
                  Forgot password ?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
