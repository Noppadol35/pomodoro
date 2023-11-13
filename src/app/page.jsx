"use client";
import React, { useRef, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";
import About from "../components/About";
import Alarm from "../components/Alarm";
import ModalSetting from "../components/ModalSetting";
import "./globals.css";

function Page() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [consumedSeconds, setConsumedSeconds] = useState(0);
  const [isTimeup, setIsTimeUp] = useState(false);

  const [openSetting, setOpenSetting] = useState(false);

  const [stage, setStrage] = useState(0);

  const AlaramRef = useRef();

  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();


  const updateTimeDefaultValue = () =>{
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSetting(false);
    setSeconds(0);
    setConsumedSeconds(0);
  }

  const switchStage = (index) => {
    const isYes =
      consumedSeconds && stage !== index
        ? confirm("Are you sure you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStrage(index);
    } else if (!consumedSeconds) {
      setStrage(index);
    }
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
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setConsumedSeconds(0);
    setTicking(false);
    setSeconds(0);
    updateTimeDefaultValue();
  };

  const timeUp = () => {
    reset();
    setIsTimeUp(true);
    AlaramRef.current.play();
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateStage();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };

  const muteAlarm = () => {
    AlaramRef.current.pause();
    AlaramRef.current.currentTime = 0;
  };

  const startTimer = () => {
    setIsTimeUp(false);
    muteAlarm();
    setTicking((ticking) => !ticking);
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSeconds ? "Show warning" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSeconds((value) => value + 1);
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
        <Navigation setOpenSetting={setOpenSetting} />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          startTimer={startTimer}
          muteAlarm={muteAlarm}
          isTimeUp={isTimeup}
          reset={reset}
        />
        <About />
        <Alarm ref={AlaramRef} />
        <ModalSetting
          openSetting={openSetting}
          setOpenSetting={setOpenSetting}
          pomodoroRef={pomodoroRef}
          shortBreakRef={shortBreakRef}
          longBreakRef={longBreakRef}
          updateTimeDefaultValue={updateTimeDefaultValue}
        />
      </div>
    </div>
  );
}

export default Page;
