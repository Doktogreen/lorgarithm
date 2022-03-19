import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Back End developers",
          "Front End developers",
          "Full Stack Engineers",
          "Game developers",
          "Mobile developers",
          "UI/ UX designers",
          ""
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
