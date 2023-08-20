import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer","Aspiring Blockchain Developer", "Ex-Intern@IQApex Labs","Developer Intern@The Bengal Studio","Backend Lead@GDSC-HITK","CSE Undergrad@HITK"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
