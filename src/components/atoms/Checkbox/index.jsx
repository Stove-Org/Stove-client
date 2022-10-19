import React from "react";
import styled from "styled-components";

function Checkbox({ text, onClick }) {
  return (
    <>
      <StyledInput type="checkbox" id={text} name={text} onClick={onClick} />
      <StyledLabel htmlFor={text}>
        <StyledP>{text}</StyledP>
      </StyledLabel>
    </>
  );
}

const StyledLabel = styled.label`
  ${(props) => props.theme.typography.description};
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  &:before {
    display: block;
    content: "";
    height: 18px;
    width: 18px;
    background-color: ${(props) => props.theme.color.white};
    border-color: ${(props) => props.theme.color.grayScale.gray30};
    border-width: 1px;
    border-style: solid;
    border-radius: 20px;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.color.grayScale.gray30};
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: "";
    height: 18px;
    width: 18px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

// visually-hidden
// https://www.a11yproject.com/posts/how-to-hide-content/
const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;

const StyledP = styled.p`
  margin-left: 10px;
`;

export default Checkbox;
