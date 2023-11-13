"use client";
import React from "react";

const Alarm = React.forwardRef((_, ref) => {
  return (
    <audio ref = {ref}>
      <source
        src= "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
        type="audio/mp3"
      />
    </audio>
  );
});

export default Alarm;
