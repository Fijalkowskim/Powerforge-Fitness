import React from "react";
import BgImage from "../../images/BgTexture.jpg";
function Background() {
  return (
    <img
      src={BgImage}
      alt="Background"
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
    />
  );
}

export default Background;
