import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [incrementLevel, setIncrementLevel] = useState(1);
  const [decrementLevel, setDecrementLevel] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + incrementLevel);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - decrementLevel);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    incrementLevel,
    decrementLevel,
    setIncrementLevel,
    setDecrementLevel,
    increment,
    decrement,
    reset,
  };
};

