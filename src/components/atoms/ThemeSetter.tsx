"use client";

import React, { useEffect } from "react";

const ThemeSetter: React.FC = () => {
  useEffect(() => {
    function setInitialTheme() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    setInitialTheme();
  }, []);

  return null;
};

export default ThemeSetter;
