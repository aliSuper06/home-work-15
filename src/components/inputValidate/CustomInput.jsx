import { useState } from "react";

export const useInput = (initialValue, validationFn) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (validationFn) {
      setError(validationFn(inputValue));
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError("");
  };

  return {
    value,
    error,
    onChange: handleChange,
    reset,
  };
};

