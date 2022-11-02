import styled from "styled-components";

const ToggleButton = ({ onClick, toggle, text }) => {
  return (
    <Wrapper>
      <StyleText>{text}</StyleText>
      <ToggleBtn onClick={onClick} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyleText = styled.h3`
  ${(props) => props.theme.typography.bodySmBold};
  color: ${(props) => props.theme.color.grayScale.gray90};
  padding-right: 6px;
`;
const ToggleBtn = styled.button`
  width: 40px;
  height: 24px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "#DBDBDB" : "#F56767")};
  position: relative;
  transition: all 0.2s ease-in-out;
`;
const Circle = styled.div`
  background-color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.toggle &&
    `
      transform: translate(16px, 0);
      transition: all 0.2s ease-in-out;
    `}
`;

export default ToggleButton;
