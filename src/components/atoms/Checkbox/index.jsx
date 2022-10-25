import styled from "styled-components";

const Checkbox = ({ id, text, value, styleType, width, height, onClick }) => {
  const checkboxStyle = ["primary"].includes(styleType) ? styleType : "default";
  return (
    <CheckboxWrapper>
      <StyledInput
        type="checkbox"
        id={id}
        name={id}
        value={value}
        onClick={onClick}
      />
      <StyledLabel
        htmlFor={id}
        checkboxStyle={checkboxStyle}
        width={width}
        height={height}
      >
        <StyledP>{text}</StyledP>
      </StyledLabel>
      <EmptySpace />
    </CheckboxWrapper>
  );
};
const CheckboxWrapper = styled.div`
  display: flex;
`;
const StyledLabel = styled.label`
  ${(props) => props.theme.typography.description};
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  &:before {
    display: block;
    content: "";
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-color: ${(props) => props.theme.color.grayScale.gray30};
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
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
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border: 1px solid transparent;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;

    ${({ checkboxStyle }) => {
      switch (checkboxStyle) {
        case "primary":
          return `
            background-color: #F54242;
          `;
        default:
          return `
            background-color: #32cd32;
          `;
      }
    }}
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

const EmptySpace = styled.div`
  flex-grow: 1;
  cursor: default;
`;

Checkbox.defaultProps = {
  text: "",
  idName: "",
  width: "18px",
  height: "18px",
  styleType: "default",
  onClick: () => {},
};

export default Checkbox;
