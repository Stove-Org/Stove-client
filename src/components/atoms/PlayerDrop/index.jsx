import styled from "styled-components";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../../../utils/ItemTypes";

const PlayerDrop = ({
  imgToggle,
  descriptionToggle,
  position,
  teamName,
  onDrop,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PLAYER,
    // drop: () => ({ name: `${teamName}_${position}` }),
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  //isOver는 Drop가능한곳에 올려놨을때
  //canDrop은 마우스로 잡고있을때

  return (
    <FalsePositionBlock
      imgToggle={imgToggle}
      descriptionToggle={descriptionToggle}
      ref={drop}
    >
      {position}
    </FalsePositionBlock>
  );
};

const FalsePositionBlock = styled.div`
  height: ${(props) =>
    props.imgToggle ? "100%" : props.descriptionToggle ? "100%" : "36.5px"};
  align-self: center;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  ${(props) => props.theme.typography.bodySmBold};
  color: ${(props) => props.theme.color.grayScale.gray60};
  border-width: 1px;
  border-style: dashed;
  border-color: ${(props) => props.theme.color.grayScale.gray60};
`;

export default PlayerDrop;
