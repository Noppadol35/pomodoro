"use client";
import React from "react";

function Timer({stage,switchStage,getTickingTime,seconds,ticking,setTicking}) {
  const options = ["Pomodoro", "Short break", "Long break"];

  return (
    <div className=" text-white w-10/12 mx-auto pt-5 flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={` p-1 cursor-pointer transition-all rounded ${
                index === stage ? "border-b-2 border-white" : ""
              } `}
              onClick={() => switchStage(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold select-none m-0">{getTickingTime()}:{seconds.toString().padStart(2, "0")}</h1>
      </div>
      <button className="px-16 py-2 text-2xl uppercase rounded-md bg-white text-red-400 font-bold " onClick={() => setTicking((ticking) => !ticking)}
      >

        {ticking? "paus":"Let's Do It!🔥"}
      </button>
    </div>
  );
}

export default Timer;
