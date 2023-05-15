import { useState, useEffect, useRef } from "react";

export const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const restart = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  useEffect(() => {
    if (time === 0) {
      stop();
    }
  }, [time]);

  return {
    time,
    start,
    stop,
    restart,
  };
};
