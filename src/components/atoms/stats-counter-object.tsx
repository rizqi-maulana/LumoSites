"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

const StatsObjectAnimation = ({
  statsObject,
  textColor,
  duration: _duration,
}: {
  statsObject: StatsObject;
  textColor?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState<number>(0);
  const duration = _duration || 1000;

  useEffect(() => {
    let startValue = 0;
    const interval = Math.floor(duration / (statsObject.value - 10));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= statsObject.value) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [statsObject.value, duration]);

  return (
    <div>
      <h3 className="text-2xl mb-5" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>{statsObject.title}</h3>
      <div className="mx-auto flex justify-center gap-y-4">
        <h2>
          <span
            className={cn(
              "flex tabular-nums text-slate-900 dark:text-white text-4xl",
              textColor
            )}
          >
            <span>{count}</span>
            {statsObject.suffix}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default StatsObjectAnimation;