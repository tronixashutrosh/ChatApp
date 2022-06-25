import React from "react";
import Login from "../Animation/Login/Login";

function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="my-[125px] items-center">
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="border-solid border-black border-2 rounded flex flex-col items-center w-[20%]">
          <h1 className="mb-[1.5rem] font-bold">Login to your Account</h1>

          <Login />

          <div className="mb-[7px] mt-[10px]">
            <label htmlFor="email" className="flex">
              Your Email
            </label>
            <input
              type="email"
              className="w-[110%]"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              // value={credentials.email}
              // onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="flex">
              Password
            </label>
            <input
              type="password"
              className="w-[110%]"
              id="password"
              name="password"
              // value={credentials.password}
              // onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="border-solid border-black border-2 rounded-md w-[20%] mb-[8px] font-bold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
