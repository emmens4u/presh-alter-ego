"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkmodeToggle = () => {
  const [toggleDark, setToggleDark] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    // You can set the initial state based on the current theme
    if (theme === "dark") {
      setToggleDark(true);
    } else {
      setToggleDark(false);
    }
  }, [theme]);

  const handleSwitch = () => {
    // Toggle between light and dark mode
    setTheme(toggleDark ? "light" : "dark");
    setToggleDark(!toggleDark);
  };
  return (
    <div>
      <button
        onClick={handleSwitch}
        className={`p-2 rounded-full focus:outline-none ${
          toggleDark
            ? "bg-gray-800 text-white dark:bg-gray-300 dark:text-gray-800"
            : "bg-yellow-500 text-black dark:bg-yellow-400 dark:text-black"
        }`}
      >
        {toggleDark ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </div>
  );
}

export default DarkmodeToggle