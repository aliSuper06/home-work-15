import React from "react";
import { useTimer } from "./CustomTimer";
import styled from "styled-components";

export const Timer = () => {
  const timer = useTimer(200);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <TimerContainer>
      <TimeText>Time: {formatTime(timer.time)}</TimeText>
      <TimerButton onClick={timer.start}>Start</TimerButton>
      <TimerButton onClick={timer.stop}>Stop</TimerButton>
      <ResetButton onClick={timer.restart}>Restart</ResetButton>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const TimeText = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TimerButton = styled.button`
  background-color: #3a86ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #2b62cc;
  }
`;

const ResetButton = styled(TimerButton)`
  background-color: #ff4d4d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #cc3d3d;
  }
`;
