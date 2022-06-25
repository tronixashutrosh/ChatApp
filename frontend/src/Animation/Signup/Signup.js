import React from "react";
import Lottie from "react-lottie";
import animationData from "./Signup.json";

function Signup() {
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
      <Lottie options={defaultOptions} height={120} width={130} />
    </div>
  );
}

export default Signup;
