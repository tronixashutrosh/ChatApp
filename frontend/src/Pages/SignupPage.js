import React, { useState } from "react";
import bgi from "../assets/background.jpg";
import { Link } from "react-router-dom";
import Signup from "../Animation/Signup/Signup";
import Swal from "sweetalert2";

function SignupPage() {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleValidation();
  }

  function handleChange(e) {
    setValues({ ...Values, [e.target.name]: e.target.value });
  }

  function handleValidation() {
    const { username, email, password, confirm } = Values;
    if (password !== confirm) {
      Swal.fire({ icon: "warning", title: "password missmatched" });
    } else if (username.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Oopss!",
        text: "Username must be at least 3 characters long",
      });
    } else if (password.length < 8) {
      Swal.fire({
        icon: "warning",
        title: "Oopss!",
        text: "Password must be at least 8 characters long",
      });
    } else if (email === "") {
      Swal.fire({
        icon: "warning",
        title: "Oopss!",
        text: "Email cannot be empty",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Account created successfully",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }
  return (
    <>
      <div
        className="bg-center bg-no-repeat  h-[100vh] flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${bgi})` }}
      >
        <div className="my-[125px] items-center">
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="border-solid border-black border-2 rounded flex flex-col items-center w-[20rem]">
              <h1 className="mb-[1.5rem] font-bold">Login to your Account</h1>

              <Signup />

              <div className="mb-[7px] mt-[10px]">
                <label className="flex font-bold">Username</label>
                <input
                  type="text"
                  className="w-[12rem] rounded"
                  id="username"
                  name="username"
                  // value={credentials.email}
                  onChange={handleChange}
                />
              </div>

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
                  // value={credentials.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="text" className="flex font-bold">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="w-[12rem] rounded"
                  id="confirm"
                  name="confirm"
                  // value={credentials.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="border-white border-2 rounded-md font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[4rem] mb-[1rem]"
              >
                Sign Up
              </button>

              <div className="flex flex-col text-white ">
                <Link to="/" className="hover:text-violet-300 mb-[1rem]">
                  Already have account ?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
