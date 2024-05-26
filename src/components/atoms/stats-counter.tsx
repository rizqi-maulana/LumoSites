import React from "react";
import StatsObjectAnimation from "./stats-counter-object";

const StatsCounter = ({ statObjects }: StatsCounterProps) => {
  return (
    <div>
      {statObjects.map((statObject, index) => (
        <StatsObjectAnimation
          duration={1000}
          key={index}
          statsObject={statObject}
        />
      ))}
    </div>
  );
};

export default StatsCounter;