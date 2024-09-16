import React, { useState, useEffect } from "react";
import lightButton from "../../assets/light.png";
import darkButton from "../../assets/dark.png";

const DarkMode = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark);
  }, [dark]); // Toggles dark mode when the state changes

  return (
    <div className="relative">
      <img
        onClick={() => setDark(!dark)}
        src={dark ? darkButton : lightButton}
        alt="Toggle Dark Mode"
        className="w-12 cursor-pointer transition-all duration-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
};

export default DarkMode;
