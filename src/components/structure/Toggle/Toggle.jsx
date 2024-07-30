"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SunComponent from "@/components/ui/icons/sun";
import MoonComponent from "../../ui/icons/moon";
import Button from "../../ui/button/button";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDark]);

  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="flex items-center justify-center">
      <Button onClick={handleClick}>
        {isDark ? <MoonComponent /> : <SunComponent />}
      </Button>
    </div>
  );
};

export default Toggle;
