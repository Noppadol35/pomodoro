import React from "react";
import { AccessTime, Settings } from "@mui/icons-material";

function Navigation({ setOpenSetting }) {
  return (
    <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1 cursor-pointer font-bold">
        <AccessTime className="text-sm " />
        <a href="https://github.com/Noppadol35/pomodoro">
          <h1>Pomodoro Focus</h1>
        </a>
      </div>
      <Settings
        className="text-2xl cursor-pointer"
        onClick={() => setOpenSetting((value) => !value)}
      />
    </nav>
  );
}

export default Navigation;
