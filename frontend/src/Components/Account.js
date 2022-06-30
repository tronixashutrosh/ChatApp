import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { Buffer } from "buffer";
import Loading from "../Animation/Loading/Loading";
import { account, accountRoute, loginRoute } from "../Utils/APIRoutes";

function Account() {
  const [Values, setValues] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [avatar, setAvatar] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProfileData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      const { data } = await axios.post(accountRoute);
      console.log(data);
    }
  }

  function handleChange(e) {
    setValues({ ...Values, [e.target.name]: e.target.value });
  }

  function handleValidation() {
    const { password, confirm } = Values;
    if (password !== confirm) {
      Swal.fire({ icon: "warning", title: "password missmatched" });
      if (password.length < 8) {
        Swal.fire({
          icon: "warning",
          title: "Oopss!",
          text: "Password must be at least 8 characters long",
        });
        return false;
      }
      return false;
    } else {
      setProfilePicture();
    }
    return true;
  }

  async function setProfileData() {
    const api = "https://api.multiavatar.com/45678945";
    let data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      const buffer = new Buffer(image.data);
      data.push(buffer.toString("base64"));
    }
    setAvatar(data);
    setIsLoading(false);
  }

  async function setProfilePicture() {
    if (selectedAvatar === undefined) {
      Swal.fire({
        icon: "warning",
        title: "Ughhh!",
        text: "Please select an avatar",
        timer: 1500,
        showConfirmButton: false,
      });
      return false;
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center flex-col h-[90vh]">
          <h2 className="font-bold">Please Wait...</h2>
          <Loading />
        </div>
      ) : (
        <BodyWrapper>
          <div className="bg-center bg-no-repeat  h-[100vh] flex items-center justify-center bg-cover">
            <div className="my-[125px] items-center">
              <form className="flex justify-center" onSubmit={handleSubmit}>
                <div className="border-solid border-black border-2 rounded flex flex-col items-center">
                  <h1 className="mb-[1.5rem] font-bold">
                    Edit to your Account
                  </h1>

                  <div className="mb-[7px] mt-[10px] avatars">
                    <label className="flex text-center">
                      Select Your Avatar
                    </label>
                    {avatar.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className={`avatar ${
                            selectedAvatar === index ? "selected" : ""
                          }`}
                        >
                          <img
                            src={`data:image/svg+xml;base64,${data}`}
                            alt="avatar"
                            onClick={() => setSelectedAvatar(index)}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-[7px] mt-[10px]">
                    <label className="flex font-bold ">Username</label>
                    <input
                      type="disabled"
                      className="w-[12rem] rounded"
                      id="username"
                      name="username"
                      placeholder="Change nahi krr skte"
                      disabled
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

                  <div className="mb-3">
                    <label htmlFor="text" className="flex font-bold">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      className="w-[12rem] rounded"
                      id="confirm"
                      name="confirm"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="border-white border-2 rounded-md font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[4rem] mb-[1rem]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </BodyWrapper>
      )}
    </>
  );
}

const BodyWrapper = styled.div`
  background: #ff0099;
  background: -webkit-linear-gradient(to right, #493240, #ff0099);
  background: linear-gradient(to right, #493240, #ff0099);
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      trasition: 0.5s ease-in-out;
      img {
        height: 4rem;
      }
    }
    .selected {
      border: 0.3rem solid #4e0eff;
    }
  }
`;

export default Account;
