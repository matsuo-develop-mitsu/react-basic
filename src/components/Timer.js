import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const timeFunc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(timeFunc, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval clear");
    };
  }, []);

  return <div>{count}</div>;
};

export default Timer;
