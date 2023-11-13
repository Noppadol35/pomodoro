import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function ModalSetting({
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  openSetting,
  setOpenSetting,
  updateTimeDefaultValue,

}) {
  const options = [
    {
      value: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "Short break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "Long break",
      ref: longBreakRef,
      defaultValue: 15,
    },
  ];

  return (
    <>
      <div className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
        openSetting ? "" : "hidden"
      }`}  >
       
        <div
          className={`max-w-xl bg-white absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md ${
            openSetting ? "" : "hidden"
          }`}
          
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-gray-500 flex justify-between items-center">
            <CloseIcon className="text-gray-500 cursor-pointer absolute right-5 top-5" onClick={() =>setOpenSetting(false)}/>
            <h1 className="uppercase font-bold tracking-wide">Time Setting</h1>
          </div>
          <div className="h-1 w-full bg-gray-400 mt-5 mb-5"></div>
          <div className="flex gap-5">
            {options.map((option, index) => {
              return (
                <div key={index}>
                  <h1 className="text-gray-500 text-xs text-center cursor-pointer uppercase font-bold">
                    {option.value}
                  </h1>
                  <input
                    ref={option.ref}
                    type="number"
                    defaultValue={option.defaultValue}
                    className="w-full text-black text-center bg-gray-400 rounded bg-opacity-50 py-2"
                  />
                </div>
              );
            })}
          </div>
          <button className="bg-green-400 uppercase w-full mt-5 text-white font-bold rounded py-2" onClick={updateTimeDefaultValue}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalSetting;
