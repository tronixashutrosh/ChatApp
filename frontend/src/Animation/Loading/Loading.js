import React from "react";
import Lottie from "react-lottie";
import animationData from "./Loading.json";

function Loading() {
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
      <Lottie options={defaultOptions} height={225} width={225} />
    </div>
  );
}

export default Loading;
