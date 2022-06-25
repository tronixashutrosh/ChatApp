import React from "react";
import Lottie from "react-lottie";
import animationData from "./Login.json";

function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={130} width={200} />
    </div>
  );
}

export default Login;
