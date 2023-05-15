import React, { useState } from "react";
import styled from "styled-components";
import { useCounter } from "./CounterHook";
import EmailInput from "../inputValidate/InputValidate";
import { Timer } from "../Timer/UseTimer";

export const Counter = () => {
  const {
    count,
    incrementLevel,
    decrementLevel,
    setIncrementLevel,
    setDecrementLevel,
    increment,
    decrement,
    reset,
  } = useCounter();

  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      increment();
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleDecrement = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      decrement();
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <>
      <BackgroundContainer>
        <TransparentContainer>
          <Count className={isAnimating ? "animate" : ""}>
            Count: {count >= 0 ? count : 0}
          </Count>
          <ButtonContainer>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
            <Button onClick={reset}>Reset</Button>
          </ButtonContainer>
          <LevelContainer>
            <Label>Increment Level:</Label>
            <Input
              type="number"
              value={incrementLevel}
              onChange={(e) => setIncrementLevel(parseInt(e.target.value))}
            />
          </LevelContainer>
          <LevelContainer>
            <Label>Decrement Level:</Label>
            <Input
              type="number"
              value={decrementLevel}
              onChange={(e) => setDecrementLevel(parseInt(e.target.value))}
            />
          </LevelContainer>
          <EmailInput />
          <Timer />
        </TransparentContainer>
      </BackgroundContainer>
    </>
  );
};

const BackgroundContainer = styled.div`
  background-image: url(${"https://wallpaperaccess.com/full/1192125.jpg"});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TransparentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.236);
  padding: 20px;
  border-radius: 10%;
`;

const Count = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  &.animate {
    animation: fadeAnimation 0.5s;
  }

  @keyframes fadeAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
