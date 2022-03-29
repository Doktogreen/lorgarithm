import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend developers",
          "Frontend developers",
          "Full-stack Engineers",
          "Game developers",
          "Blockchain developers",
          "Mobile developers",
          "UI/ UX designers",
          "Q.A. specialists"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
