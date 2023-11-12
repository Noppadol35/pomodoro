import React from 'react';
import { AccessTime, Settings } from '@mui/icons-material';

function Navigation() {
  return (
    <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1 cursor-pointer font-bold">
        <AccessTime className="text-sm " />
        <h1>Pomodoro Focus</h1>
      </div>
      <Settings className="text-2xl cursor-pointer" />
    </nav>
  );
}

export default Navigation;
