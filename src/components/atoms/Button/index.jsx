import styled from "styled-components";

const Button = ({ text, styleType, onClick, type }) => {
  const btnStyle = [
    "primary",
    "reverse",
    "light",
    "dark",
    "kakaoShare",
  ].includes(styleType)
    ? styleType
    : "default";
  return (
    <ButtonStyle onClick={onClick} type={type} btnStyle={btnStyle}>
      {text}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  ${(props) => props.theme.typography.bodyRg};
  ${({ btnStyle }) => {
    switch (btnStyle) {
      case "primary":
        return `
            background-color: #F54242;
            color: #fff;
            border-color: #F54242;
            `;
      case "reverse":
        return `
            background-color: #fff;
            color: #F54242;
            border-color: #F54242;
            `;
      case "light":
        return `
            background-color: #fff;
            color: #000;
            border-color: #EEEEEE;
            `;
      case "dark":
        return `
            background-color: #000;
            color: #fff;
            border-color: #000;
            `;
      case "kakaoShare":
        return `
            background-color: #FEE500;
            color: #000000;
            border-color: #FEE500;
            `;
      default:
        return `
            background-color: #EEEEEE;
            color: #000;
            border-color: #EEEEEE;
            `;
    }
  }}

  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  padding: 8px 15px;
  white-space: nowrap;
`;

Button.defaultProps = {
  styleType: "default",
};

export default Button;
