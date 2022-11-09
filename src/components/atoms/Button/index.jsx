import styled from "styled-components";

const Button = ({ text, styleType, onClick, type, icon, isActive }) => {
  const isIcon = !!icon;
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
    <ButtonStyle
      onClick={onClick}
      type={type}
      btnStyle={btnStyle}
      isIcon={isIcon}
      isActive={isActive}
    >
      {text ? text : icon}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;
  ${(props) => props.theme.typography.bodyRg};

  & + & {
    margin-left: 10px;
  }

  /* isIcon === true */
  padding: ${(props) => (props.isIcon ? "10px" : "8px 15px")};
  border-radius: ${(props) => (props.isIcon ? "50%" : "3px")};

  display: ${(props) => props.isIcon && "flex"};
  justify-content: ${(props) => props.isIcon && "center"};
  align-items: ${(props) => props.isIcon && "center"};
  width: ${(props) => props.isIcon && "40px"};
  height: ${(props) => props.isIcon && "40px"};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};

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
            background-color: #FFE812;
            color: #000000;
            border-color: #FFE812;
            `;
      default:
        return `
            background-color: #EEEEEE;
            color: #000;
            border-color: #EEEEEE;
            `;
    }
  }}
`;

Button.defaultProps = {
  styleType: "default",
  isActive: true,
};

export default Button;
