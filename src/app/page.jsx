"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";
import About from "../components/About";
import "./globals.css";

function page() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);

  const [stage, setStrage] = useState(0);

  const switchStage = (index) => {
    setStrage(index);
  };

  const getTickingTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  const updateStage = () => {
    const updateStage = {
      0:setPomodoro,
      1:setShortBreak,
      2:setLongBreak,
    };
    return updateStage[stage];
  }

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateStage();

    if(minutes === 0 && seconds === 0){
      alert("Time's up!");
    }else if(seconds === 0){
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    }else{
      setSeconds((seconds) => seconds - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if(ticking){
        clockTicking();
      }
      }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  
  return (
    <div className="bg-red-400 min-h-screen font-inter">
      <div className=" max-w-2xl min-h-screen mx-auto">
        <Navigation />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          setTicking={setTicking}
        />
        <About />
      </div>
    </div>
  );
}

export default page;
