import React from "react";
import styled from "styled-components";
import { useInput } from "./CustomInput";

const EmailInput = () => {
  const validateEmail = (value) => {
    if (!value) {
      return "Email is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      return "Invalid email format";
    }

    return "";
  };

  const emailInput = useInput("", validateEmail);

  return (
    <Container>
      <Input
        type="email"
        value={emailInput.value}
        onChange={emailInput.onChange}
        onBlur={emailInput.onBlur}
        hasError={!!emailInput.error}
      />
      {emailInput.error && <ErrorText>{emailInput.error}</ErrorText>}
      <Button onClick={emailInput.reset}>Reset</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
`;

const ErrorText = styled.p`
  margin: 5px 0;
  color: red;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default EmailInput;
