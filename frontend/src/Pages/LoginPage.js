import React from "react";
import Login from "../Animation/Login/Login";
import bgi from "../assets/background.jpg";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/chat", { replace: false });
    alert("login successfull");
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
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-[12rem] rounded  "
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  // value={credentials.email}
                  // onChange={onChange}
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
                  // value={credentials.password}
                  // onChange={onChange}
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
